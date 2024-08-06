import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {      
      const forwardedHost = request.headers.get('x-forwarded-host'); 
      const isLocalEnv = process.env.NODE_ENV === 'development';

      const { access_token, refresh_token } = data.session;

      const cookieStore = cookies();
      cookieStore.set('supabase-access-token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600, // 1 hour
        path: '/',
      });

      cookieStore.set('supabase-refresh-token', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600 * 24 * 30, // 30 days
        path: '/',
      });

      let redirectUrl;
      if (isLocalEnv) {
        redirectUrl = `${origin}${next}`;
      } else if (forwardedHost) {
        redirectUrl = `https://${forwardedHost}${next}`;
      } else {
        redirectUrl = `${origin}${next}`;
      }

      console.log('Redirecting to:', redirectUrl);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

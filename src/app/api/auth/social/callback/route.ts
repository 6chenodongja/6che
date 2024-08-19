import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';
  console.log('ㅇㅁㄴㅇㅁㅈㅇㅈㅇㅁㄴㅇㅁㄴㅇ');
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
        maxAge: 600, // 10분
        path: '/',
      });

      cookieStore.set('supabase-refresh-token', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 600,
        path: '/',
      });

      // 토큰과 만료 시간을 콘솔에 출력
      console.log('Access Token:', access_token);
      console.log('Refresh Token:', refresh_token);
      console.log('Access Token Expiry:', new Date(Date.now() + 600 * 1000)); // 현재 시간 + 10분
      console.log('Refresh Token Expiry:', new Date(Date.now() + 600 * 1000)); // 현재 시간 + 10분

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

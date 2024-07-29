import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/client';

export async function GET(request: Request) {
  const supabase = createClient();
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');

  if (!provider) {
    return NextResponse.json({ error: 'Provider is required' }, { status: 400 });
  }

  let redirectTo = '';
  switch (provider) {
    case 'kakao':
      redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;
      break;
    case 'google':
      redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;
      break;
    default:
      return NextResponse.json({ error: 'Unsupported provider' }, { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.redirect(data.url);
}

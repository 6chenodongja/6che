import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/client';

export async function GET(request: Request) {
  const supabase = createClient();
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');

  if (!provider) {
    console.error('Provider is required');
    return NextResponse.json(
      { error: 'Provider is required' },
      { status: 400 }
    );
  }

  let redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider as 'kakao' | 'google',
    options: {
      redirectTo,
    },
  });

  if (error) {
    console.error('Error in signInWithOAuth:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ url: data.url });
}

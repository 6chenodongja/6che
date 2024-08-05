import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const reqData = await request.json();
  const email = reqData.email as string;
  const password = reqData.password as string;

  const supabase = createClient();
  
  // 사용자 로그인
  const { error, data} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  const user = data.user;

  if (user) {
    const { id, email, user_metadata } = user;
    return NextResponse.json({
      id,
      email,
      nickname: user_metadata.nickname,
    });
  }

  return NextResponse.json({ error: '사용자를 찾을 수 없습니다.' }, { status: 404 });
}
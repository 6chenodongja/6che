import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const reqData = await request.json();
  const email = reqData.email as string;
  const password = reqData.password as string;

  const supabase = createClient();
  
  // 사용자 로그인
  const { error: signInError, data: signInData } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    return NextResponse.json({ error: signInError.message });
  }

  // 로그인 성공 후 사용자 닉네임 가져오기
  const userId = signInData.user.id;
  const { data: nickNameData, error: nickNameError } = await supabase
    .from('users')
    .select('nick_name')
    .eq('id', userId)
    .single();

  if (nickNameError) {
    return NextResponse.json({ error: nickNameError.message });
  }

  return NextResponse.json({
    user: signInData.user,
    nickname: nickNameData.nick_name,
  });
}

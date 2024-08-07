// src/api/auth/find-email/route.ts
import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const reqData = await request.json();
  const email = reqData.email as string;

  const supabase = createClient();

  // 이메일 확인
  const { data, error } = await supabase.from('users').select('email').eq('email', email).single();

  if (error || !data) {
    return NextResponse.json({ message: '가입되지 않은 이메일입니다.' }, { status: 404 });
  }

  return NextResponse.json({ message: '가입된 이메일입니다.' }, { status: 200 });
}




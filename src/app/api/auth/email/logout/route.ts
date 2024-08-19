import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return NextResponse.json({ error: "로그아웃에 실패 했습니다." }, { status: 400 });
  } else {
    return NextResponse.json({ message: '로그아웃 하셨습니다.' }, {status: 200});
  }
}

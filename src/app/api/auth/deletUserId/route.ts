import { createSupabaseClientForUserDeletion } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
  const reqData = await request.json();
  const userId = reqData.userId as any;
  const supabase = createSupabaseClientForUserDeletion();
  
  console.log('delete user with ', userId)
  const { data, error } = await supabase.auth.admin.deleteUser(userId);

  if (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 401 });
  } else {
    return NextResponse.json({}, {status: 200});
  }
}
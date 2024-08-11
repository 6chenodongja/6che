import { createSupabaseClientForUserDeletion } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
  const reqData = await request.json();
  const userId = reqData.userId as any;
  const supabase = createSupabaseClientForUserDeletion();
  const {data: { user }} = await supabase.auth.getUser()
  
  const { data, error } = await supabase.auth.admin.deleteUser(user?.id!);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  } else {
    return NextResponse.json({data}, {status: 200});
  }
}
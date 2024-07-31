import { Json } from './../../../../../types/supabase';
import { createClient } from '@/supabase/server';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
  }
}

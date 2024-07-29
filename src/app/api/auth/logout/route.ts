import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/supabase/client';

export async function GET(request: NextRequest) {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.redirect('/');
}

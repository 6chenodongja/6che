import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/supabase/client';

export async function GET(request: NextRequest) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
        },
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.redirect(data.url);
}

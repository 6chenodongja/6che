import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const {email, password, nickname} = await request.json();
    const supabase = createClient();
    
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: nickname,
          },
        },
      });

      if (error) {
        return NextResponse.json({error: error.message}, {status: 500});
      } else {
        return NextResponse.json({message: data}, {status: 201});
      }
}
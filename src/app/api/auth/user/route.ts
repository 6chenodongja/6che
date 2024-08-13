import { createClient } from "@/supabase/server";
import { NextResponse }  from "next/server"
export async function GET() {
	const { data: { user } } = await createClient().auth.getUser();	
	return NextResponse.json(user) 
}
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "./client";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  return res;
};

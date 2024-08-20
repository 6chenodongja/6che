import { createClient as createSupabaseClient, UserAttributes } from '@supabase/supabase-js';
import { Database } from '../../types/supabase';
import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 기존 클라이언트 생성
export const supabase = createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
export const createClient = () => createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
export const createAuthClient = () => createBrowserClient(supabaseUrl, supabaseAnonKey)
// UserAttributes 타입 확장
export interface UserAttributesWithToken extends UserAttributes {
    accessToken?: string;
}
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
export const createClient = () => createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
// import { createBrowserClient } from '@supabase/ssr';
// import { Database } from '../../types/supabase';

// export function createClient() {
//   return createBrowserClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   );
// }

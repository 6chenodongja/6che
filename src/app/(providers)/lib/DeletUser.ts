'use sever';

import { createSupabaseClientForUserDeletion } from "@/supabase/server";

export const handleUserDeletionConfirm = async (user: any) => {
    const supabase = createSupabaseClientForUserDeletion();
    if (!user) return;
    const { data, error } = await supabase.auth.admin.deleteUser(user.id);
  };
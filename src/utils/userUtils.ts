import { supabase } from '@/utils/supabase/client';

export const updateUserProfile = async (updates: Record<string, any>, userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error updating user profile:', error);
    return null;
  }

  return data;
};

export const checkNicknameAvailability = async (nickname: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('nick_name')
    .eq('nick_name', nickname);

  if (error) {
    console.error('Error checking nickname:', error);
    return false;
  }

  return data.length === 0;
};

import { createClient, supabase } from "@/supabase/client";


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

export const checkEmailDuplication = async (email: string): Promise<boolean> => {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email);

  if (error) {
    console.error('이메일 중복 체크 중 에러가 발생했습니다:', error);
    return false;
  }

  return data.length === 0;
};

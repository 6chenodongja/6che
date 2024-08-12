import { createClient } from '@/supabase/client';

export interface ErrorState {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface VerificationRule {
  validator: (value: string, fields?: { password: string }) => boolean;
  message: string;
}

export const verificationRules: { [key: string]: VerificationRule[] } = {
  nickname: [
    {
      validator: (value: string) => /^.{1,10}$/.test(value),
      message: '닉네임은 띄어쓰기, 공백, 특수문자를 포함하여 최대 10글자까지 가능합니다.',
    }
  ],
  email: [
    {
      validator: (value: string) => /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value),
      message: '유효한 이메일 주소를 입력해주세요.',
    },
  ],
  password: [
    {
      validator: (value: string) => value.length >= 8,
      message: '비밀번호는 최소 8자 이상이어야 합니다.',
    },
    {
      validator: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
      message: '비밀번호는 특수문자를 포함해야 합니다.',
    },
    {
      validator: (value: string) => /[A-Z]/.test(value),
      message: '비밀번호는 대문자를 포함해야 합니다.',
    },
  ],
  passwordConfirm: [
    {
      validator: (value: string, fields?: { password: string }) => value === fields?.password,
      message: '비밀번호가 일치하지 않습니다.',
    },
  ],
};

export const verifyField = (name: string, value: string, fields?: { password: string }): string => {
  const rules = verificationRules[name];
  for (const rule of rules) {
    if (!rule.validator(value, fields)) {
      return rule.message;
    }
  }
  return '';
};

export const checkNicknameDuplication = async (nickname: string): Promise<boolean> => {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('nick_name', nickname);

  if (error) {
    console.error('닉네임이 변경되지 않았어요.:', error);
    return false;
  }

  return data.length === 0;
};

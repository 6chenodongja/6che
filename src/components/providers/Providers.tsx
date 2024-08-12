'use client';

import { createClient } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import { useEffect } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { setUser, user } = useUserStore();
  const supabase = createClient();
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!user) return;

      const { data, error } = await supabase
        .from('users')
        .select()
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('유저 데이터 받아오기 실패:', error);
        return;
      }

      setUser({
        id: user.id,
        nickname: data.nick_name || '',
        email: data.email,
        provider: '',
        profileImage: data.avatar || '',
      });
    };

    getUser();
  }, []);

  return <div>{children}</div>;
};

export default Providers;

'use client';

import { createClient } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const SocialLogin = () => {
  const supabase = createClient();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

  const handleSocialLogin = async (provider: 'google' | 'kakao') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `http://localhost:3000/api/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account',
        },
      },
    });

    if (error) {
      console.error('소셜 로그인 중 오류 발생:', error);
      alert('소셜 로그인 중 오류가 발생했습니다.');
      return;
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('인증 확인 중 오류 발생:', error);
        return;
      }

      const user = data?.user;
      if (user) {
        console.log('User metadata:', user.user_metadata);

        const displayName =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.user_metadata?.nickname ||
          '';

        console.log('Display Name:', displayName);

        const userData = {
          id: user.id,
          email: user.email!,
          nick_name: displayName,
        };

        console.log('User Data:', userData);

        const { error: updateError } = await supabase
          .from('users')
          .upsert(userData, {
            onConflict: 'id',
          });

        if (updateError) {
          console.error('사용자 정보 업데이트 중 오류 발생:', updateError);
          return;
        }

        setUser({
          id: user.id || '',
          nickname: displayName,
          email: user.email || '',
          profileImage: user.user_metadata?.avatar_url || '',
        });
        setIsLoggedIn(true);
        router.replace('/');
      }
    };

    checkAuth();
  }, [setUser, setIsLoggedIn]);

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => handleSocialLogin('google')}
        className=""
      >
        구글
      </button>
      <button
        type="button"
        onClick={() => handleSocialLogin('kakao')}
        className=""
      >
        카카오톡
      </button>
    </div>
  );
};

export default SocialLogin;

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
        // 사용자 메타데이터 로그 추가
        console.log('User metadata:', user.user_metadata);

        // 사용자 메타데이터에서 이름 가져오기
        const displayName =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.user_metadata?.nickname ||
          '';

        console.log('Display Name:', displayName); // Display Name이 올바르게 추출되는지 확인

        // 필수 필드들을 포함한 사용자 정보 설정
        const userData = {
          id: user.id,
          email: user.email!,
          nick_name: displayName,
          
        };

        console.log('User Data:', userData); // User Data가 올바르게 구성되었는지 확인

        // users 테이블에 사용자 정보 업데이트
        const { error: updateError } = await supabase
          .from('users')
          .upsert(userData, {
            onConflict: 'id', // 중복 시 업데이트할 기준 필드
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

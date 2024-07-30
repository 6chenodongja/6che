'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/supabase/client';
import { useAuthStore } from '@/zustand/store/useTagStore';

const CallbackPage = () => {
  const router = useRouter();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const supabase = createClient();

  useEffect(() => {
    const handleCallback = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.exchangeCodeForSession(window.location.href);

      if (error) {
        console.error('Error getting session from URL:', error.message);
      } else if (session) {
        const user = session.user;

        // 로그인 상태 업데이트
        setIsLoggedIn(true);

        // 사용자 정보 데이터베이스에 저장
        const { error: userError } = await supabase.from('users').upsert(
          {
            id: user.id,
            email: user.email ?? '',
            nickname: user.user_metadata.full_name ?? user.email ?? '',
          },
          {
            onConflict: ['id'],
          },
        );

        if (userError) {
          console.error('Error inserting/updating user:', userError.message);
        } else {
          router.push('/'); // 로그인 후 리다이렉트할 페이지
        }
      }
    };

    handleCallback();
  }, [router, setIsLoggedIn, supabase]);

  return <div>Loading...</div>;
};

export default CallbackPage;

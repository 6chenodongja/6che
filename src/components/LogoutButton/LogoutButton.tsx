'use client'; // Client Component로 설정

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/zustand/store/useUserStore';

function LogoutButton() {
  // router 페이지 이동
  const router = useRouter();
  const { clearUser } = useUserStore();

  // 컴포넌트가 렌더링 된 이후에 특정 작업을 수행할 수 있게
  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
        });
        if (response.ok) {
          clearUser(); // 상태 초기화
          router.replace('/'); // 홈으로 이동
        } else {
          console.error('로그아웃에 실패 하였습니다.');
        }
      } catch (error) {
        console.error('로그아웃 중 오류 발생:', error);
      }
    };

    handleLogout(); // Logout 호출
  }, [router, clearUser]);

  return <button className="">로그아웃</button>; // null; // UI 요소가 필요 없는 경우
}

export default LogoutButton;

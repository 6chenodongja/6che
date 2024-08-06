'use client'; // Client Component로 설정

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/zustand/store/useUserStore';
import { IconHeart1 } from 'icons/IconHeart1';
import { IconArrowRight1 } from 'icons/IconArrowRight1';
import { IconLocation } from 'icons/IconLocation';
import { IconWeatherBlur } from 'icons/IconWeatherBlur';

function LogoutButton() {
  // router 페이지 이동
  const router = useRouter();
  const { clearUser } = useUserStore();
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

  return (
    <button
      title="로그아웃 버튼"
      onClick={handleLogout}
      className="bg-white rounded-xl drop-shadow-md"
    >
      <IconWeatherBlur className="w-6 h-6" />
    </button>
  ); // null; // UI 요소가 필요 없는 경우
}

export default LogoutButton;

'use client';

import { useRouter } from 'next/navigation';
import { useUserStore } from '@/zustand/store/useUserStore';
import { IconWeatherBlur } from 'icons/IconWeatherBlur';
import { IconWeatherThunderstorm } from 'icons/IconWeatherThunderstorm';

function LogoutButton() {
  const router = useRouter();
  const { clearUser } = useUserStore();
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      if (response.ok) {
        clearUser();
        router.replace('/');
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
      <IconWeatherThunderstorm className="w-34 h-34" />
    </button>
  );
}

export default LogoutButton;

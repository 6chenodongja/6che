'use client';

import { useRouter } from 'next/navigation';
import { useUserStore } from '@/zustand/store/useUserStore';

function LogoutButton() {
  const router = useRouter();
  const { clearUser } = useUserStore();
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/email/logout', {
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
      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-xl"
    >
      로그아웃
    </button>
  );
}

export default LogoutButton;

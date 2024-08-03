'use client';

import { useUserStore } from '@/zustand/store/useLogoutStore';
import { useRouter } from 'next/router';
import React from 'react';

function LogoutButton() {
  const router = useRouter();
  const { clearUser } = useUserStore();

  const handleLogout = async () => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });
    if (response.ok) {
      clearUser();
      // 로그아웃 시 메인 홈페이지로 이동
      router.replace('/');
    } else {
      console.error('로그아웃에 실패 하였습니다.');
    }
  };

  return (
    <button onChange={handleLogout} className="">
      로그아웃
    </button>
  );
}

export default LogoutButton;

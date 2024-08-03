// "use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuthStore } from '@/zustand/store/useTagStore';
import { createClient } from '@/supabase/client';

const Header = () => {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuthStore();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    logout();
    router.push('/');
  };

  return (
    <div className="w-full bg-gray-300 p-4 flex justify-between items-center">
      <div>
        <button className="px-2 py-1" onClick={() => router.push('/mainpage')}>
          <Image src="/back.png" alt="뒤로가기" width={24} height={24} />
        </button>
      </div>
      <div className="flex items-center">
        <button
          className="px-4 py-2 bg-gray-300"
          onClick={() => router.push('/mainpage')}
        >
          날씨
        </button>
        <button className="px-4 py-2 bg-gray-300">코디</button>
        <button className="px-4 py-2 bg-gray-300">기온별 옷차림</button>
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <button className="px-2 py-1" onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          <button
            className="px-2 py-1"
            onClick={() => router.push('/auth/login')}
          >
            로그인
          </button>
        )}
        <button className="px-2 py-1 ml-2">
          <Image src="/search.png" alt="검색" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

// export default Header;

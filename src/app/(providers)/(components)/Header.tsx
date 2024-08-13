'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../../icons/LogoText';
import { IconLogin } from '../../../icons/IconLogin';
import LoadingScreen from '../(components)/LoadingScreen'; // LoadingScreen 컴포넌트를 불러옵니다.
import LoginDropdown from '@/components/LoginDropdown/LoginDropdown';
import { useUserStore } from '@/zustand/store/useUserStore';
import { createClient } from '@/supabase/client';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser, isLoggedIn } = useUserStore();
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/api/auth/user');
      const user = await response.json();
      if (!user) return;
      const { data, error } = await createClient()
        .from('users')
        .select('*')
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
        provider: user.app_metadata.provider || '',
        profileImage: data.avatar || '',
      });
    };

    getUser();
  }, [setUser]);

  const handleLogoClick = () => {
    // 메인화면에서 로고 클릭 시 새로고침
    if (window.location.pathname === '/') {
      window.location.reload(); // 메인화면에서는 새로고침
    } else {
      router.push('/'); // 다른 페이지에서는 메인화면으로 이동
    }
  };

  const handleNavigation = (url: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(url);
    }, 2300); // 2.3초 동안 로딩 화면을 보여줍니다.
  };

  if (isLoading) {
    return <LoadingScreen />; // 로딩 중일 때 LoadingScreen 컴포넌트를 보여줍니다.
  }

  return (
    <header className="w-full max-w-[320px] bg-white shadow-md py-4 flex justify-between items-center px-4 fixed top-0 z-50 h-[60px]">
      <div className="flex-1 flex justify-start">
        <button title="button" onClick={handleMenuToggle}>
          <Image src="/images/menu.png" alt="메뉴" width={24} height={24} />
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <LogoText className="w-24 h-8" />
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        {isLoggedIn && user ? (
          <>
            <LoginDropdown />
          </>
        ) : (
          <>
            <Link href={'/login'}>
              <IconLogin className="w-6 h-6" />
            </Link>
          </>
        )}
      </div>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-close" onClick={handleMenuToggle}>
          &times;
        </div>
        <ul>
          <li>
            <Link href="/" onClick={handleMenuToggle}>
              홈
            </Link>
          </li>
          <li>
            <a
              onClick={() => handleNavigation('/list')}
              className="cursor-pointer"
            >
              스타일
            </a>
          </li>
          <li>            
              <Link href="/thermometer-style">옷 차림</Link>            
          </li>
          <li>
            <Link href="/survey">취향 코디</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

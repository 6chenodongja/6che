'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../../icons/LogoText';
import { IconLogin } from '../../../icons/IconLogin';
import LoadingScreen from '../(components)/LoadingScreen';
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
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      router.push('/');
    }
  };

  const handleNavigation = (url: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(url);
    }, 2300);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <header className="w-full fixed  bg-#fff top-0 z-50 h-[60px]">
      <div
        className="absolute w-full h-full bg-rgba(255, 255, 255, 0.70))"
        style={{
          boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
        }}
      ></div>
      <div className="relative w-full h-full flex items-center px-4">
        <div className="flex-1 flex justify-start md:hidden">
          <button title="button" onClick={handleMenuToggle}>
            <Image src="/images/menu.png" alt="메뉴" width={24} height={24} />
          </button>
        </div>
        <div className="md:flex-1 flex justify-center md:justify-start">
          <div className="cursor-pointer" onClick={handleLogoClick}>
            <LogoText className="w-24 h-8" />
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          {isLoggedIn && user ? (
            <LoginDropdown />
          ) : (
            <Link href={'/login'}>
              <IconLogin className="w-6 h-6" />
            </Link>
          )}
        </div>
        <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <ul className="flex space-x-8">
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/list">코디</Link>
            </li>
            <li>
              <Link href="/thermometer-style">옷차림</Link>
            </li>
            <li>
              <Link href="/survey">취향 코디</Link>
            </li>
          </ul>
        </div>
      </div>

      <nav
        className={`navbar ${isMenuOpen ? 'open' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.70)',
          transform: isMenuOpen
            ? 'translate(-50%,0%)'
            : 'translate(-50%, -100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
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
            <Link href="/list">스타일</Link>
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

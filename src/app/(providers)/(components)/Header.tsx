'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../..//icons/LogoText';
import { IconLogin } from '../../../icons/IconLogin';
import LoadingScreen from '../(components)/LoadingScreen'; // LoadingScreen 컴포넌트를 불러옵니다.

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (url: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(url);
    }, 5000); // 5초 동안 로딩 화면을 보여줍니다.
  };

  if (isLoading) {
    return <LoadingScreen />; // 로딩 중일 때 LoadingScreen 컴포넌트를 보여줍니다.
  }
  // fixed 밑에 header className 에 추가해야함 그래야 헤더 고정됌
  return (
    <header className="w-[320px] bg-white shadow-md py-4 flex justify-between items-center px-4  top-0 z-50">
      <button title="button" onClick={handleMenuToggle}>
        <Image src="/images/menu.png" alt="메뉴" width={24} height={24} />
      </button>
      <Link href="/">
        <LogoText className="w-24 h-8" />
      </Link>
      <Link href="/login">
        <IconLogin className="w-6 h-6" />
      </Link>

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
            <a
              onClick={() => handleNavigation('/list')}
              className="cursor-pointer"
            >
              옷차림
            </a>
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

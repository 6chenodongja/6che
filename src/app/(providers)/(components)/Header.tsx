'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../../icons/LogoText';
import { IconLogin } from '../../../icons/IconLogin';
import LoadingScreen from '../(components)/LoadingScreen';
import LoginDropdown from '@/components/LoginDropdown/LoginDropdown';
import { useUserStore } from '@/zustand/store/useUserStore';
import { supabase } from '@/supabase/client';
import LoginPopup from '../(root)/(auth)/login/_components/LoginPopup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useUserStore();
  const [loginModal, setLoginModal] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // 활성화된 링크 상태 관리
  const router = useRouter();
  const pathname = usePathname();
  const isDetailPage = pathname?.startsWith('/detail');
  const [isDetailMobile, setIsDetailMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDetailMobile(window.innerWidth <= 768); // DetailPage 768이하에서만 헤더 안보이게 하기
    };

    handleResize(); // 초기 호출
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoginModal = () => setLoginModal(!loginModal);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // 클릭한 링크를 활성화 상태로 설정
    setIsMenuOpen(false); // 메뉴 닫기
    router.push(link); // 링크로 이동
  };

  useEffect(() => {
    // 현재 경로에 따라 활성화된 링크 설정
    setActiveLink(window.location.pathname);
  }, [router]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/api/auth/user');
      const user = await response.json();
      if (!user) return;

      const { data, error } = await supabase
        .from('users')
        .select()
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
  }, []);

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
  if (isDetailPage && isDetailMobile) {
    return <></>;
  }

  return (
    <>
      <header className="w-full fixed top-0 z-50 h-[60px] bg-white header">
        <div
          className="absolute w-full h-full bg-white "
          style={{
            boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
          }}
        ></div>
        <div className="relative w-full h-full flex items-center px-4">
          <div className="flex-1 flex justify-start md:hidden">
            <button
              title="button"
              onClick={handleMenuToggle}
              style={{
                padding: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              <Image
                src="/images/menu.svg"
                alt="메뉴"
                width={28}
                height={28}
                sizes="100vw"
              />
            </button>
          </div>
          <div className="md:flex-1 flex justify-center md:justify-start">
            <div className="cursor-pointer" onClick={handleLogoClick}>
              <LogoText className="w-24 h-8" />
            </div>
          </div>
          <div className="hidden md:flex items-end">
            {user ? (
              <LoginDropdown />
            ) : (
              <div className="flex gap-1">
                <button
                  onClick={handleLoginModal}
                  className="font-NotoSansKR tracking-[-0.28px] leading-[130%] py-[11px] text-[14px]  font-normal px-4 rounded-lg bg-[#298CFF]/80 hover:bg-[#5EB0FF]/80 focus:bg-black-500/50 text-white"
                >
                  로그인
                </button>
                <Link href={'/signup'} className="">
                  <button className="font-NotoSansKR font-semibold tracking-[-0.28px] leading-[130%] py-[11px] px-4 text-[14px] border-1 border-[#5EB0FF]/80 hover:bg-[##E6E6E6] focus:bg-[##b3b3b3] rounded-lg text-[#5EB0FF]/80">
                    회원가입
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="block md:hidden flex-1 flex justify-end">
            {user ? (
              <LoginDropdown />
            ) : (
              <Link href={'/login'}>
                <IconLogin className="w-6 h-6" />
              </Link>
            )}
          </div>
          <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <ul className="flex space-x-2">
              <li>
                <button
                  onClick={() => handleLinkClick('/')}
                  className={`nav-button  ${
                    activeLink === '/' ? 'active-link' : ''
                  }`}
                >
                  홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/list')}
                  className={`nav-button2 ${
                    activeLink === '/list' ? 'active-link' : ''
                  }`}
                >
                  코디
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/thermometer-style')}
                  className={`nav-button3 ${
                    activeLink === '/thermometer-style' ? 'active-link' : ''
                  }`}
                >
                  옷차림
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/survey')}
                  className={`nav-button4 ${
                    activeLink === '/survey' ? 'active-link' : ''
                  }`}
                >
                  취향 코디
                </button>
              </li>
            </ul>
          </div>
        </div>
        <nav
          className={`navbar ${isMenuOpen ? 'open' : ''}`}
          style={{
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255, 255, 255, 0.70)',
            transform: isMenuOpen
              ? 'translate(-50%, 0%)'
              : 'translate(-50%, -100%)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <div className="navbar-close" onClick={handleMenuToggle}>
            &times;
          </div>
          <ul>
            <li>
              <Link
                href="/"
                className={`${
                  activeLink === '/' ? 'selected-menu' : 'unselected-menu'
                }`}
                onClick={() => handleLinkClick('/')}
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/list"
                className={`${
                  activeLink === '/list' ? 'selected-menu' : 'unselected-menu'
                }`}
                onClick={() => handleLinkClick('/list')}
              >
                코디
              </Link>
            </li>
            <li>
              <Link
                href="/thermometer-style"
                className={`${
                  activeLink === '/thermometer-style'
                    ? 'selected-menu'
                    : 'unselected-menu'
                }`}
                onClick={() => handleLinkClick('/thermometer-style')}
              >
                옷차림
              </Link>
            </li>
            <li>
              <Link
                href="/survey"
                className={`${
                  activeLink === '/survey' ? 'selected-menu' : 'unselected-menu'
                }`}
                onClick={() => handleLinkClick('/survey')}
              >
                취향 코디
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {loginModal && (
        <LoginPopup show={loginModal} onClose={handleLoginModal} />
      )}
    </>
  );
};

export default Header;

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../..//icons/LogoText';
import { IconLogin } from '../../../icons/IconLogin';
import { useUserStore } from '@/zustand/store/useUserStore';
import LoginDropdown from '@/components/LoginDropdown/LoginDropdown';
import { createClient } from '@/supabase/client';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setUser, clearUser, user } = useUserStore();
  const supabase = createClient();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

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
  return (
    <header className="w-full bg-white shadow-md py-4 flex justify-between items-center px-4">
      <button title="button" onClick={handleMenuToggle}>
        <Image src="/images/menu.png" alt="메뉴" width={24} height={24} />
      </button>
      <Link href="/">
        <LogoText className="w-24 h-8" />
      </Link>
      <div>
        {user ? (
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
            <Link href="/list" onClick={handleMenuToggle}>
              스타일
            </Link>
          </li>
          <li>
            <Link href="/list" onClick={handleMenuToggle}>
              옷차림
            </Link>
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

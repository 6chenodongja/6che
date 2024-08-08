'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../..//icons/LogoText';
import { IconLogin } from '../../../icons/IconLogin';
import { User } from '@supabase/supabase-js';
import { useUserStore } from '@/zustand/store/useUserStore';
import LoginDropdown from '@/components/LoginDropdown/LoginDropdown';
import { createClient } from '@/supabase/client';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, setUsers] = useState<User | null>(null);
  const { clearUser, setUser, user } = useUserStore();
  const supabase = createClient();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 이 로직이 실행 되는 것인지, event랑, session console로 확인해 보기
  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     if (event === 'SIGNED_IN' && session) {
  //       const userData = {
  //         id: session.user.id,
  //         nickname: session.user.user_metadata.name,
  //         email: session.user.email || '',
  //         provider: session.user.app_metadata.provider || '',
  //       };

  //       setUser(userData);
  //     } else if (event === 'SIGNED_OUT') {
  //       clearUser();
  //     }
  //   });
  // }, []);

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

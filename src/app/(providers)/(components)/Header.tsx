'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../..//icons/LogoText';
import { IconLogin } from '../../../icons/IconLogin';
import { createClient } from '@/supabase/client';
import { User } from '@supabase/supabase-js';
import LogoutButton from '../../../components/LogoutButton/LogoutButton';
import { useUserStore } from '@/zustand/store/useUserStore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, setUsers] = useState<User | null>(null);
  const { clearUser, setUser, user } = useUserStore();
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 로그아웃
  // const handleLogoutButton = () => {
  //   LogoutButton();
  //   clearUser();
  // };

  useEffect(() => {
    const supabase = createClient();
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      // setUser(session?.user. || null);
      console.log(session);
      if (!session) return;

      // 임시방편으로 연결 시켜둔 상태
      // 문제점 : 프로필 이미지는 들어가 있지 않아서 유저 테이블에 있는 정보를 불러와서 거기에 있는 닉네임과 프로필 이미지를 보여주게 수정
      if (event === 'SIGNED_IN') {
        setUser({
          id: session.user.id,
          nickname: session.user.user_metadata.nickname,
          email: session.user.email || '',
          profileImage: '',
        });
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
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
            <div>{user.nickname}</div>
            <button
              onClick={() => {
                // handleLogoutButton();
              }}
            >
              로그아웃
            </button>
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

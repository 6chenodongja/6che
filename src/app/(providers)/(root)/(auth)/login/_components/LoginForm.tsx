'use client';

import { createClient } from '@/supabase/client';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useUserStore } from '@/zustand/store/useUserStore';

function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();
  const router = useRouter();
  const { setIsLoggedIn, setUser, isLoggedIn } = useUserStore();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const res = await axios.post('/api/auth/email/login', {
        email,
        password,
      });
      if (res.data) {
        setUser({
          id: res.data.id,
          nickname: res.data.nickname,
          email: res.data.email,
          provider: '',
          profileImage: res.data.avatar,
        });
        setIsLoggedIn(true);
        window.location.href = '/';
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('아이디 또는 비밀번호는 다시 입력해주세요!');
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'kakao') => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/social/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: provider === 'google' ? 'consent' : 'select_account',
          },
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error('소셜 로그인 중 오류 발생:', error);
      alert('소셜 로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <main className="flex items-center space-x-2 rounded-full  py-1 px-4">
      <form onSubmit={onSubmit} className="mt-[64px] h-[568px]">
        <h1 className="text-[20px] text-center text-[#121212] font-bold leading-[130%] tracking-[-0.4px] mb-5">
          로그인
        </h1>
        {/* 이메일 input */}
        <div className="mb-[6px]">
          <label
            htmlFor="email"
            className="w-[39px] h-[21px] text-[14px] leading-[150%] ml-[2px] "
          >
            아이디
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="w-[288px] h-[48px] border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4"
          />
        </div>
        {/* 비밀번호 input */}
        <div className="mt-2 text-[#4D4D4D]">
          <label className="w-[39px] h-[21px] text-[14px] leading-[150%] ">
            비밀번호
          </label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            className="w-[288px] h-[48px] border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4"
          />
        </div>
        <div className="flex flex-col gap-2 mt-[33px]">
          <div className="flex flex-row w-full">
            <button className="bg-[#121212] hover:bg-blue-400 text-[#fff] rounded-xl px-4 py-3 w-[288px] font-bold">
              로그인
            </button>
          </div>
          <Link href={'/signup'} passHref>
            <button className="bg-white border-1 border-[#808080] text-[#4d4d4d] rounded-xl px-4 py-3 w-[288px] font-medium hover:bg-[#FFF7D4] hover:border-[#ffc22975] focus:bg-[#ffd75e59]">
              이메일로 회원가입
            </button>
          </Link>
        </div>
        <div className="flex justify-end">
          <button className="text-sm mt-2 text-[#4d4d4d] rounded-lg hover:bg-gray-100 p-2">
            {/* 은겸 - 아이디 비밀번호 찾기 이동 기능 추가 */}

            <Link href={'/find-id'} className="w-full h-full flex" passHref>
              아이디/비밀번호 찾기
              <Image
                src="images/Thermometer/arrow_right.svg"
                alt="오호"
                width={18}
                height={18}
              />
            </Link>
          </button>
        </div>

        <div className="flex justify-start items-center w-72 relative gap-3 m-auto">
          <div className="flex-grow h-px bg-[#d9d9d9]" />
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            or
          </p>
          <div className="flex-grow h-px bg-[#d9d9d9]" />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            onClick={() => handleSocialLogin('google')}
            className="bg-white border-1 hover:bg-[#ccc] hover:bg-opacity-70 border-[#121212]/15 text-[#4D4D4D] font-bold w-[288px] h-[52px] rounded-xl"
          >
            구글로 시작하기
          </button>
          <button
            onClick={() => handleSocialLogin('kakao')}
            className="bg-[#FFD65E] hover:bg-[#ccc] hover:bg-opacity-70 text-[#4D4D4D] font-bold w-[288px] h-[52px] rounded-xl"
          >
            카카오로 시작하기
          </button>
        </div>
      </form>
    </main>
  );
}

export default LoginForm;

'use client';

import { createClient } from '@/supabase/client';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { useUserStore } from '@/zustand/store/useUserStore';

function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();
  const router = useRouter();
  const { setUser } = useUserStore();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert('모든 항목을 입력해 주세요.');
      return;
    }
    try {
      const res = await axios.post('/api/auth/login', {
        email,
        password,
      });
      if (res.data) {
        setUser({
          id: res.data.id,
          nickname: res.data.nickname,
          email: res.data.email,
          provider: '',
          profileImage: '',
        });

        router.replace('/');
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
          redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
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
    <main className="flex">
      <form onSubmit={onSubmit} className="h-auto justify-center m-auto">
        <h1 className="text-center text-[20px] font-bold leading-[26px] tracking-[-0.4px] text-[#121212] font-['Noto_Sans_KR']">
          로그인
        </h1>
        {/* 이메일 input */}
        <div className="bg-slate-50 flex flex-col text-[#4D4D4D]">
          <label
            htmlFor="email"
            className="text-[16px] font-bold text-left  mb-1 ml-1 flex"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력해 주세요."
            ref={emailRef}
            className="flex justify-start items-center flex-grow relative gap-2 px-4 py-3 rounded-xl border-[1px] w-[288px] border-[#4D4D4D]"
          />
        </div>
        {/* 비밀번호 input */}
        <div className="mt-2 text-[#4D4D4D]">
          <label className="text-[16px] font-bold text-left text-black-500 mb-1 ml-1 flex">
            비밀번호
          </label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            placeholder="비밀번호를 입력해 주세요."
            className="flex justify-start items-center flex-grow relative gap-2 px-4 py-3 rounded-xl border-[1px] w-[288px] border-[#808080]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row w-full">
            <button className="bg-black text-[#fff] rounded-xl px-4 py-3 w-[288px] font-bold">
              로그인
            </button>
          </div>
          <Link href={'/signup'} passHref>
            <button className="bg-white border-2 border-[#808080] text-[#4d4d4d] rounded-xl px-4 py-3 w-[288px] font-bold">
              이메일로 회원가입
            </button>
          </Link>
        </div>
        <div className="flex-grow-0 flex-shrink-0 text-sm text-right text-[#4d4d4d]">
          <Link href={''} className="">
            아이디/비밀번호 찾기
          </Link>
        </div>
        <div className="flex justify-start items-center w-72 relative gap-3 m-auto">
          <div className="flex-grow h-px bg-[#d9d9d9]" />
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            or
          </p>
          <div className="flex-grow h-px bg-[#d9d9d9]" />
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleSocialLogin('google')}
            className="bg-white border-1 hover:bg-[#ccc] hover:bg-opacity-70 border-[#121212] text-[#4D4D4D] font-bold w-[288px] h-[52px] rounded-xl"
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

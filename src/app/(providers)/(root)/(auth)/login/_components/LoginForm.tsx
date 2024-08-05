'use client';

import { createClient } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

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

      if (res.data && res.data.email) {
        setUser({
          id: res.data.id,
          nick_name: res.data.nick_name,
          email: res.data.email,
          profileImage: '',
        });
        setIsLoggedIn(true);
        router.replace('/');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('로그인 중 오류 발생');
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'kakao') => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
        },
      });
      if (error) throw error;

      if (data) {
        setIsLoggedIn(true);
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(`ERROR ${provider.toUpperCase()}`, error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="container h-auto justify-center">
      <h1 className="mt-[119px] text-[24px] font-bold text-center text-[#121212]">
        로그인
      </h1>
      <div className="bg-slate-50 flex flex-col">
        <label
          htmlFor="email"
          className="text-[16px] font-bold text-left text-[#4d4d4d] mb-1 ml-1 flex"
        >
          이메일
        </label>
        <input
          type="email"
          id="email"
          placeholder="이메일을 입력해 주세요."
          ref={emailRef}
          className="flex justify-start items-center flex-grow relative gap-2 px-4 py-3 rounded-xl border-2 border-[#808080]"
        />
      </div>
      <div className="mt-2">
        <label className="text-[16px] font-bold text-left text-[#4d4d4d] mb-1 ml-1 flex">
          비밀번호
        </label>
        <input
          type="password"
          ref={passwordRef}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          className="flex justify-start items-center flex-grow relative gap-2 px-4 py-3 rounded-xl border-[1px] border-[#808080]"
        />
      </div>
      <div className="flex flex-col gap-2 bg-red-600">
        <div className="flex flex-row w-full mt-16">
          <button className="bg-black text-[#fff] rounded-xl px-4 py-3 w-[288px] font-bold">
            로그인
          </button>
        </div>
        <Link href={'/signup'} passHref>
          <button className="bg-white border-2 border-[#808080] text-[#4d4d4d] rounded-xl px-4 py-3 w-full font-bold">
            회원가입
          </button>
        </Link>
      </div>
      {/* <div className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
        <Link href={''} className="">
          아이디/비밀번호 찾기
        </Link>
      </div> */}
      <div className="flex justify-start items-center w-72 relative gap-3 m-auto">
        <div className="flex-grow h-px bg-[#d9d9d9]" />
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
          or
        </p>
        <div className="flex-grow h-px bg-[#d9d9d9]" />
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => handleSocialLogin('google')}
          className=""
        >
          구글
        </button>
        <button
          type="button"
          onClick={() => handleSocialLogin('kakao')}
          className=""
        >
          카카오톡
        </button>
      </div>
      {/* <div className="">
        <input
          type="checkbox"
          placeholder="체크 박스입니다"
          className="w-[18px] h-[18px] rounded bg-[#ccc]/70"
        />
        <label className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#808080]">
          로그인 유지
        </label>
      </div> */}
    </form>
  );
};

export default LoginForm;

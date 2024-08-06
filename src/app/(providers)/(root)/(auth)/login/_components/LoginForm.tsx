'use client';

import { createClient } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import SocialLogin from './SocialLogin';

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
          nickname: res.data.nickname,
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
      alert('아이디 또는 비밀번호는 다시 입력해주세요!');
    }
  };

  return (
    <>
    <form onSubmit={onSubmit} className="w-full h-full justify-center">
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
      <div className="flex flex-col gap-2">
        <div className="flex flex-row w-full mt-16">
          <button className="bg-black text-[#fff] rounded-xl px-4 py-3 w-full font-bold">
            로그인
          </button>
        </div>
        <Link href={'/signup'} passHref>
          <button className="bg-white border-2 border-[#808080] text-[#4d4d4d] rounded-xl px-4 py-3 w-full font-bold">
            회원가입
          </button>
        </Link>
      </div>
      <div className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
        <Link href={''} className="">
          아이디/비밀번호 찾기
        </Link>
      </div>
      <div className="flex justify-start items-center w-72 relative gap-3">
        <div className="flex-grow h-px bg-[#d9d9d9]" />
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
          or
        </p>
        <div className="flex-grow h-px bg-[#d9d9d9]" />
      </div>
      
      <div className="">
        <input
          type="checkbox"
          placeholder="체크 박스입니다"
          className="w-[18px] h-[18px] rounded bg-[#ccc]/70"
        />
        <label className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#808080]">
          로그인 유지
        </label>
      </div>
      <SocialLogin />
    </form>
    
    </>
  );
};

export default LoginForm;

'use client';

import { createClient } from '@/supabase/client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert('모든 항목을 입력해 주세요.');
      return;
    }
    const res = await axios.post('/api/auth/login', {
      email,
      password,
    });
    console.log(res);

    alert('로그인 성공');

    router.replace('/');
  };

  return (
    <main className="bg-neutral-50 flex flex-row justify-center w-full">
      <div className="bg-semantic-bg w-80 h-[1443px] relative">
        <form
          onSubmit={onSubmit}
          className="bg-neutral-50 flex flex-row justify-center w-full"
        >
          <h1 className="absolute left-4 top-[138px] text-2xl font-medium text-center text-black">
            로그인
          </h1>
          <div className="flex items-center gap-2 pl-0.5 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <label
              htmlFor="email"
              className="font-subtitle-KR-small font-[number:var(--subtitle-KR-small-font-weight)] text-semantic-text text-[length:var(--subtitle-KR-small-font-size)] tracking-[var(--subtitle-KR-small-letter-spacing)] leading-[var(--subtitle-KR-small-line-height)] relative w-fit mt-[-1.00px] whitespace-nowrap [font-style:var(--subtitle-KR-small-font-style)]"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력해 주세요."
              ref={emailRef}
              className="px-4 py-3 grow bg-semantic-text-box rounded-lg border border-solid border-[color:var(--palette-black-500)] relative mt-[-1.00px] font-body-EN-medium font-[number:var(--body-EN-medium-font-weight)] text-[color:var(--palette-black-300)] text-[length:var(--body-EN-medium-font-size)] tracking-[var(--body-EN-medium-letter-spacing)] leading-[var(--body-EN-medium-line-height)] flex-1 [font-style:var(--body-EN-medium-font-style)]"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-72 pb-2.5">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
              비밀번호
            </label>
            <input
              type="password"
              ref={passwordRef}
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
            />
          </div>
          <div className="w-72 h-[46px] absolute left-[15px] top-[425px] rounded-lg bg-[#d9d9d9] text-center">
            <button className="text-lg font-medium text-black">로그인</button>
          </div>
          <div className="flex justify-start items-center absolute left-[50px] top-[493px] gap-2">
            <Link
              href={''}
              className="flex-grow-0 flex-shrink-0 text-base text-left text-black"
            >
              아이디/비밀번호 찾기
            </Link>
            <div className="flex-grow-0 flex-shrink-0 w-px h-[22px] bg-[#d9d9d9]" />
            <Link
              href={'/auth/signup'}
              className="flex-grow-0 flex-shrink-0 text-base text-left text-black"
            >
              회원가입
            </Link>
          </div>
          <div className="w-72 h-12 absolute left-[15px] top-[600px] rounded-3xl bg-[#d9d9d9]" />
          <div className="w-72 h-12 absolute left-[15px] top-[658px] rounded-3xl bg-[#d9d9d9]" />
          <button className="absolute left-[145px] top-[613px] text-base text-left text-black">
            구글
          </button>
          <button className="absolute left-[130px] top-[671px] text-base text-left text-black">
            카카오톡
          </button>
          <div className="w-72 h-px absolute left-[15px] top-[557px] bg-[#d9d9d9]" />
          <div>
            <label className="absolute left-[43px] top-[395px] text-sm text-left text-black">
              자동로그인
            </label>
            <input
              type="checkbox"
              placeholder="체크 박스입니다"
              className="w-5 h-5 absolute left-[15px] top-[395px] bg-[#d9d9d9]"
            />
          </div>
          <p className="absolute left-[130px] top-[569px] text-sm text-left text-black">
            소셜 로그인
          </p>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;

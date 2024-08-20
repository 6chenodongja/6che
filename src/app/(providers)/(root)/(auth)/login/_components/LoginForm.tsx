'use client';

import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useUserStore } from '@/zustand/store/useUserStore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAuthClient } from '@/supabase/client';

function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const supabase = createAuthClient();
  const router = useRouter();
  const { setUser } = useUserStore();

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

        // 로그인 성공 Toast
        toast.success(
          <div className="toast-message">
            <span>로그인을 하였어요!</span>
          </div>,
          {
            autoClose: 2500,
          },
        );

        setTimeout(() => {
          if (!sessionStorage.getItem('redirect')) {
            router.push('/');
          }
        }, 2500);
      } else {
        toast.error('로그인 실패. 다시 시도해주세요.', {
          autoClose: 2500,
        });
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      toast.error('아이디 또는 비밀번호를 확인해주세요.', {
        autoClose: 2500,
      });
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'kakao') => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${location.origin}/api/auth/social/callback`,
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
    <main className="block px-4 items-center justify-center space-x-2 md:py-10 md:flex md:w-full md:h-full">
      <form
        onSubmit={onSubmit}
        className="h-full w-full md:w-[480px] md:h-[742px] md:bg-white md:px-10 md:rounded-3xl md:py-14"
      >
        <h1 className="text-[26px] pb-[20px] md:pb-[24px] text-center text-[#121212] font-bold leading-[26px] tracking-[-0.04px] font-headline-04 md:text-[24px] md:font-headline-03 md:leading-[31.2px]">
          로그인
        </h1>
        {/* 이메일 input */}
        <div className="pb-[6px]">
          <p className="tracking-[-0.02px] py-[6px]">
            <label
              htmlFor="email"
              className="pl-[2px] font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02"
            >
              아이디
            </label>
          </p>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="w-full h-full py-3 px-4 border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        {/* 비밀번호 input */}
        <div className="pb-[6px]">
          <p className="tracking-[-2%] py-[6px]">
            <label
              htmlFor="password"
              className="pl-[2px] font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02 "
            >
              비밀번호
            </label>
          </p>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            className="w-full h-full py-3 px-4 border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 pt-[32px] md:pt-[62px]">
          <div className="flex flex-row w-full">
            <button className="w-full bg-[#121212] hover:bg-[rgba(94,176,255,0.80)] active:bg-[#73AEE7] text-center font-KR text-[#fff]  rounded-xl px-3 py-[14px] font-medium tracking-0.02] text-base">
              로그인
            </button>
          </div>
          <Link href={'/signup'} className="block w-full" passHref>
            <button className="w-full bg-white/50 border border-[#4d4d4d] font-KR text-[16px] font-medium tracking-0.02]  text-[#4d4d4d] rounded-xl px-3 py-[14px] tracking--0.02 text-base hover:border-[rgba(255,214,94,0.80)] hover:bg-[#FFF7D4] active:bg-[#E9E2C2] active:border-[rgba(255,214,94,0.80)]">
              <span className="hidden md:block">회원가입</span>
              <span className="block md:hidden">이메일로 회원가입</span>
            </button>
          </Link>
        </div>
        <div className="flex justify-end items-end pt-2 pb-8 md:pb-7">
          <button className="font-KR text-sm leading-[18.2px] tracking--0.02 text-[#4d4d4d] rounded-lg hover:bg-[#ededed]/60 active:text-[#5EB0FF]/80 p-2 active:bg-black/10">
            <Link href={'/find-id'} className="w-full h-full flex" passHref>
              아이디/비밀번호 찾기
              <Image
                src="images/Thermometer/arrow_right.svg"
                alt=""
                width={18}
                height={18}
                className=""
              />
            </Link>
          </button>
        </div>
        <div className="flex justify-center items-center w-72 md:w-[400px] h-6 gap-3 mb-8 md:mb-7">
          <div className="w-[124px] md:w-[180px] h-px bg-[#d9d9d9]" />
          <p className="text-base font-normal  text-left text-black">or</p>
          <div className="w-[124px] md:w-[180px] h-px bg-[#d9d9d9]" />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center font-medium font-KR">
          <button
            type="button"
            onClick={() => handleSocialLogin('google')}
            className="bg-white border-1 text-center hover:bg-[#ededed]/60 active:text-[#5EB0FF]/80 active:bg-black/10 gap-2 border-[#121212]/15 text-[#4D4D4D] rounded-xl flex h-[49px] items-center justify-center w-full"
          >
            <Image
              src="images/login/Logo_Google.svg"
              alt="google-icon"
              width={22}
              height={22}
            />
            <span className="hidden md:block">구글</span>
            <span className="block md:hidden">구글로 시작하기</span>
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin('kakao')}
            className="bg-[#FFD65E]/80 text-center text-[#4D4D4D] hover:bg-[#ededed]/60 active:text-[#5EB0FF]/80 active:bg-black/10 rounded-xl  flex h-[49px] items-center justify-center w-full gap-2"
          >
            <Image
              src="images/login/Logo_Kakao.svg"
              alt="kakao-icon"
              width={22}
              height={22}
            />
            <span className="hidden md:block">카카오톡</span>
            <span className="block md:hidden">카카오로 시작하기</span>
          </button>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="custom-toast"
        />
      </form>
    </main>
  );
}

export default LoginForm;

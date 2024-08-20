'use client';

import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
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
    <main className="flex items-center space-x-2 py-1 px-4 h-full w-full">
      <form onSubmit={onSubmit} className="h-full w-full">
        <h1 className="text-[20px] text-center text-[#121212] font-bold leading-[130%] tracking-[-0.4px] mt-16 mb-5">
          로그인
        </h1>
        {/* 이메일 input */}
        <div className="py-[6px]">
          <label
            htmlFor="email"
            className="w-full text-[14px] leading-[150%] ml-[2px] "
          >
            아이디
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="w-full border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4 h-[48px]"
          />
        </div>
        {/* 비밀번호 input */}
        <div className="mt-2 text-[#4D4D4D]">
          <label className="text-[14px] leading-[150%] ">비밀번호</label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            className="w-full border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4  h-[48px]"
          />
        </div>
        <div className="flex flex-col gap-2 mt-[33px]">
          <div className="flex flex-row w-full">
            <button className="w-full bg-[#121212] hover:bg-blue-400 text-[#fff] rounded-xl px-3 py-[14px] font-bold">
              로그인
            </button>
          </div>
          <Link href={'/signup'} className="block w-full" passHref>
            <button className="w-full bg-white border-1 border-[#808080] text-[#4d4d4d] rounded-xl px-3 py-[14px] font-medium hover:bg-[#FFF7D4] hover:border-[#ffc22975] focus:bg-[#ffd75e59]">
              이메일로 회원가입
            </button>
          </Link>
        </div>
        <div className="flex justify-end items-end mt-2 mb-8">
          <button className="text-sm text-[#4d4d4d] rounded-lg hover:bg-gray-100 p-2">
            <Link href={'/find-id'} className="w-full h-full flex" passHref>
              아이디/비밀번호 찾기
              <Image
                src="images/Thermometer/arrow_right.svg"
                alt=""
                width={18}
                height={18}
              />
            </Link>
          </button>
        </div>
        <div className="flex justify-start items-center w-72 gap-3 m-auto mb-8">
          <div className="flex-grow h-px bg-[#d9d9d9]" />
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            or
          </p>
          <div className="flex-grow h-px bg-[#d9d9d9]" />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mb-[100px]">
          <button
            onClick={() => handleSocialLogin('google')}
            className="bg-white border-1 text-center hover:bg-[#ccc] hover:bg-opacity-70 gap-2 border-[#121212]/15 text-[#4D4D4D] font-bold rounded-xl flex h-[49px] items-center justify-center w-full"
          >
            <Image
              src="images/login/Logo_Google.svg"
              alt="google-icon"
              width={22}
              height={22}
            />
            구글로 시작하기
          </button>
          <button
            onClick={() => handleSocialLogin('kakao')}
            className="bg-[#FFD65E] text-center hover:bg-[#ccc] hover:bg-opacity-70 text-[#4D4D4D] font-bold rounded-xl  flex h-[49px] items-center justify-center w-full gap-2"
          >
            <Image
              src="images/login/Logo_Kakao.svg"
              alt="kakao-icon"
              width={22}
              height={22}
            />
            카카오로 시작하기
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

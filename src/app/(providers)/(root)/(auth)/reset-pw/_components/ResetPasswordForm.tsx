'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabase/client';
import { ToastComponent, showToast } from '../../../../(components)/Toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] =
    useState('특수문자,대문자 포함 8자 이상');
  const [token, setToken] = useState<{
    access_token: string;
    refresh_token: string;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const hashParams = new URLSearchParams(
      window.location.hash.replace('#', '?'),
    );
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');

    if (accessToken && refreshToken) {
      setToken({ access_token: accessToken, refresh_token: refreshToken });
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } else {
      showToast('유효하지 않은 토큰입니다.', 'error');
      setTimeout(() => router.push('/'), 2000);
    }
  }, [router]);

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const hasMinLength = password.length >= 8;

    if (!hasUpperCase || !hasSpecialChar || !hasMinLength) {
      return !hasUpperCase && !hasSpecialChar && !hasMinLength
        ? '대문자, 특수문자를 포함 8자 이상'
        : !hasUpperCase && !hasSpecialChar
          ? '특수문자, 대문자를 포함시켜야 합니다.'
          : !hasUpperCase
            ? '대문자를 포함해야 합니다.'
            : !hasSpecialChar
              ? '특수문자를 포함해야 합니다.'
              : '비밀번호는 8자 이상이어야 합니다.';
    }
    return '';
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordMessage(validatePassword(e.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      showToast('비밀번호가 일치하지 않습니다.', 'error');
      return;
    }

    if (passwordMessage) {
      showToast(passwordMessage, 'error');
      return;
    }

    if (!token) {
      showToast('유효하지 않은 토큰입니다.', 'error');
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      console.error('비밀번호 업데이트 오류:', error);
      showToast('현재 비밀번호와 신규 비밀번호가 동일합니다.', 'error');
    } else {
      showToast('비밀번호가 재설정 되었습니다.', 'success', '로그인', () =>
        router.push('/login'),
      );
    }
  };

  return (
    <>
      {/* 모바일 화면 (768px 이하) */}
      <div className="md:hidden w-full max-w-[320px] mx-auto flex flex-col items-center min-h-[636px] bg-white px-4">
        <ToastComponent />
        <div className="w-full">
          <h2 className="font-headline-04 font-bold text-xl text-center mt-[97px] mb-[80px]">
            비밀번호 재설정
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-[#4d4d4d] font-subtitle-KR-small font-medium text-sm"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                required
              />
              {passwordMessage && (
                <div className="flex mt-1 text-xs font-normal text-black-700 font-caption">
                  <Image
                    src="/images/pwmessage/info.svg"
                    alt="Info"
                    width={16}
                    height={16}
                    className="mr-[2px]"
                  />
                  <span>{passwordMessage}</span>
                </div>
              )}
            </div>
            <div className="mb-[80px]">
              <label
                htmlFor="confirmPassword"
                className="block text-[#4d4d4d] font-subtitle-KR-small font-medium text-sm"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none mt-[6px]"
                required
              />
            </div>
            <button
              type="submit"
              className="font-button w-full py-2 bg-black text-white rounded-lg hover:bg-blue-500 "
            >
              재설정
            </button>
          </form>
        </div>
      </div>

      {/* 데스크탑 화면 (769px 이상) */}
      <div className="hidden md:flex w-full min-h-screen bg-[#fafafa] justify-center items-center relative">
        <div className="absolute mt-[58px] w-[480px] h-[725px] bg-white rounded-3xl shadow-lg p-10">
          <ToastContainer
            position="top-right" // 위치 설정
            autoClose={3000} // 자동 닫힘 시간 설정 (3초)
            hideProgressBar={true} // 진행 바 숨김
            closeOnClick={true} // 클릭 시 닫힘
            pauseOnHover={true} // 마우스 호버 시 일시 정지
            draggable={true} // 드래그 가능 여부
            theme="light" // 테마 설정
            className="toast-container" // 커스텀 클래스 추가
            style={{
              top: '80px', // 헤더 바로 아래로 위치시키기 위해 적절한 top 값 설정
              right: '20px', // 우측에서의 간격
              position: 'fixed', // 화면에 고정된 위치에 나타나도록 설정
            }}
          />
          <h2 className="text-center font-headline-03 text-[24px] mb-[40px] font-bold">
            비밀번호 재설정
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-[#4d4d4d] font-subtitle-KR-small font-medium text-sm"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                required
              />
              {passwordMessage && (
                <div className="flex mt-1 text-xs font-normal text-black-700 font-caption">
                  <Image
                    src="/images/pwmessage/info.svg"
                    alt="Info"
                    width={16}
                    height={16}
                    className="mr-[2px]"
                  />
                  <span>{passwordMessage}</span>
                </div>
              )}
            </div>
            <div className="mb-[80px]">
              <label
                htmlFor="confirmPassword"
                className="block text-[#4d4d4d] font-subtitle-KR-small font-medium text-sm"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none mt-[6px]"
                required
              />
            </div>
            <button
              type="submit"
              className="font-button w-full py-2 bg-black text-white rounded-lg hover:bg-blue-500 "
            >
              재설정
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordForm;

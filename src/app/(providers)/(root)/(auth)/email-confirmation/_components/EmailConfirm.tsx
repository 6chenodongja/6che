'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const EmailConfirmContent = () => {
  const searchParams = useSearchParams();
  const email = searchParams ? searchParams.get('email') : null;
  const status = searchParams ? searchParams.get('status') : null;

  const messageLine1 =
    status === 'registered'
      ? `${email?.replace(/@custom$/, '')}은`
      : `${email?.replace(/@custom$/, '')}은`;
  const messageLine2 =
    status === 'registered' ? '가입된 계정입니다' : '없는 계정입니다';

  const messageLine2Color =
    status === 'registered'
      ? '#000'
      : 'var(--Red-500, rgba(255, 71, 50, 0.85))';

  return (
    <>
      {/* 모바일 화면 (768px 이하) */}
      <div className="md:hidden w-full max-w-[320px] mx-auto flex flex-col items-center min-h-[636px] bg-[#fafafa] mt-10 px-4 pt-[64px]">
        <div className="w-full">
          <h2 className="text-xl text-center font-bold mb-[126px]">
            아이디 비밀번호 찾기
          </h2>
          <p className="text-center">
            <span className="text-[#4d4d4d] text-[16px] font-body-EN-medium font-normal">
              {messageLine1}
            </span>
            <br />
            <span
              className="text-[#4d4d4d] font-medium text-lg font-subtitle-KR-large mt-[10px]"
              style={{ color: messageLine2Color }}
            >
              {messageLine2}
            </span>
          </p>
          <div className="space-y-2 flex flex-col items-center mt-[135px]">
            <Link href="/login">
              <button className="w-[288px] h-auto px-8 py-3 rounded-lg text-white bg-black font-button font-medium transition-all duration-300 hover:bg-[rgba(94,176,255,0.80)] active:bg-[#73AEE7]">
                로그인하러 가기
              </button>
            </Link>
            <Link href="/find-pw">
              <button className="w-[288px] h-auto px-8 py-3 rounded-lg text-[#4d4d4d] bg-transparent border border-[#4d4d4d] font-button font-medium transition-all duration-300 hover:border-[rgba(255,214,94,0.80)] hover:bg-[#FFF7D4] active:bg-[#E9E2C2] active:border-[rgba(255,214,94,0.80)]">
                비밀번호 찾기
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 데스크탑 화면 (769px 이상) */}
      <div className="hidden md:flex w-full min-h-screen bg-[#fafafa] justify-center items-center relative">
        <div className="absolute mt-[58px] w-[480px] h-[725px] bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-center font-headline-03 text-[24px] mb-[204px] font-bold">
            아이디 비밀번호 찾기
          </h2>
          <p className="text-center">
            <span className="text-[#4d4d4d] text-[18px] font-body-KR-large font-normal">
              {messageLine1}
            </span>
            <br />
            <span
              className="text-[#4d4d4d] font-normal text-[34px] font-headline-02 mt-[10px]"
              style={{ color: messageLine2Color }}
            >
              {messageLine2}
            </span>
          </p>
          <div className="space-y-2 flex flex-col items-center mt-[198px]">
            <Link href="/login">
              <button className="w-[376px] h-[49px] px-8 py-3 rounded-lg text-white  text-[16px] bg-black font-button font-medium transition-all duration-300 hover:bg-[rgba(94,176,255,0.80)] active:bg-[#73AEE7]">
                로그인하러 가기
              </button>
            </Link>
            <Link href="/find-pw">
              <button className="w-[376px] h-[49px] px-8 py-3 rounded-lg text-[#4d4d4d] bg-transparent border border-[#4d4d4d] font-button font-medium text-[16px] transition-all duration-300 hover:border-[rgba(255,214,94,0.80)] hover:bg-[#FFF7D4] active:bg-[#E9E2C2] active:border-[rgba(255,214,94,0.80)]">
                비밀번호 찾기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const EmailConfirm = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmailConfirmContent />
    </Suspense>
  );
};

export default EmailConfirm;

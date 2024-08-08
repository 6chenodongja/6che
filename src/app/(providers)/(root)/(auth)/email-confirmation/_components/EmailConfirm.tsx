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
    status === 'registered'
      ? '이미 가입된 계정입니다.'
      : '존재하지 않는 계정입니다.';

  return (
    <div className="w-full max-w-[320px] mx-auto flex flex-col items-center min-h-[636px] bg-[#fafafa] mt-10 px-4">
      <div className="w-full">
        <h2 className="text-xl text-center font-bold mb-[126px]">
          아이디 비밀번호 찾기
        </h2>
        <p className="mb-[131px] text-center">
          <span className="text-gray-900">{messageLine1}</span>
          <br />
          <span className="text-gray-600">{messageLine2}</span>
        </p>
        <div className="space-y-2 flex flex-col items-center">
          <Link href="/login">
            <button className="w-[288px] h-auto px-8 py-3 rounded-lg text-white bg-black">
              로그인하러 가기
            </button>
          </Link>
          <Link href="/find-pw">
            <button className="w-[288px] h-auto px-8 py-3 rounded-lg text-[#121212] bg-transparent border border-[#121212]">
              비밀번호 찾기
            </button>
          </Link>
        </div>
      </div>
    </div>
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
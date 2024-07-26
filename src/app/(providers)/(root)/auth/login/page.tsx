import Link from 'next/link';
import React, { useState } from 'react';

function LoginPage() {
  // const [name, setName] = useState("");
  return (
    <main className="w-80 h-[1486px] relative overflow-hidden bg-white m-auto">
      <div>
        <h1 className="absolute left-4 top-[138px] text-2xl font-medium text-center text-black">
          로그인
        </h1>
        <form className="flex flex-col justify-start items-start w-72 absolute left-4 top-[207px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            아이디
          </label>
          <input
            type="email"
            className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </form>
        <form className="flex flex-col justify-start items-start w-72 absolute left-4 top-72 pb-2.5">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            비밀번호
          </label>
          <input
            type="password"
            className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </form>
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
        <input
          type="checkbox"
          className="w-5 h-5 absolute left-[15px] top-[395px] bg-[#d9d9d9]"
        />
        <p className="absolute left-[43px] top-[395px] text-sm text-left text-black">
          자동로그인
        </p>
        <p className="absolute left-[130px] top-[569px] text-sm text-left text-black">
          소셜 로그인
        </p>
      </div>
    </main>
  );
}

export default LoginPage;

"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    password: "",
  });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = () => {};

  return (
    <main className="min-w-max min-h-max">
      <div className="text-center justify-center bg-slate-500">
        <h1 className="text-2xl font-medium text-black">로그인</h1>
        <form className="flex flex-col justify-start items-start w-72 pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            이메일
          </label>
          <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
        </form>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-72 pb-2.5">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            비밀번호
          </label>
          <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
        </div>
        <div className="w-72 h-[46px] rounded-lg bg-[#d9d9d9]" />
        <button className="text-lg font-medium text-left text-black">
          로그인
        </button>
        <div className="flex justify-start items-center gap-2">
          <button className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            아이디/비밀번호 찾기
          </button>
          <div className="flex-grow-0 flex-shrink-0 w-px h-[22px] bg-[#d9d9d9]" />
          <button className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            회원가입
          </button>
        </div>
        {/* <div className="w-72 h-12 absolute left-[15px] top-[600px] rounded-3xl bg-[#d9d9d9]" />
        <div className="w-72 h-12 absolute left-[15px] top-[658px] rounded-3xl bg-[#d9d9d9]" />
        <div className="w-72 h-12 absolute left-[15px] top-[716px] rounded-3xl bg-[#d9d9d9]" /> */}
        <div className="w-56 h-11 bg-slate-200 border block m-auto rounded-lg ">
          <button className="text-base text-black">구글</button>
          <button className="text-base text-black">카카오톡</button>
          <button className="text-base text-black">애플</button>
        </div>

        <div className="w-72 h-px bg-[#d9d9d9]">
          <form className="w-5 h-5 bg-[#d9d9d9]">
            <input type="checkbox" />
            <label className="w-full h-full text-sm text-left text-black">
              자동로그인
            </label>
          </form>
        </div>
        <button className="text-sm text-left text-black">소셜 로그인</button>
      </div>
    </main>
  );
}

export default LoginPage;

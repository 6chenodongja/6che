import React, { useState } from "react";

function LoginPage() {
  // const [name, setName] = useState("");
  return (
    <main className="w-80 h-[1486px] relative overflow-hidden bg-white">
      <p className="absolute left-4 top-[138px] text-2xl font-medium text-center text-black">
        로그인
      </p>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[207px] pb-3">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
          아이디
        </p>
        <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
      </div>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-72 pb-2.5">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
          비밀번호
        </p>
        <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
      </div>
      <div className="w-72 h-[46px] absolute left-[15px] top-[425px] rounded-lg bg-[#d9d9d9]" />
      <button className="absolute left-[135px] top-[435px] text-lg font-medium text-left text-black">
        로그인
      </button>
      <div className="flex justify-start items-center absolute left-[50px] top-[493px] gap-2">
        <button className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
          아이디/비밀번호 찾기
        </button>
        <div className="flex-grow-0 flex-shrink-0 w-px h-[22px] bg-[#d9d9d9]" />
        <button className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
          회원가입
        </button>
      </div>
      <div className="w-72 h-12 absolute left-[15px] top-[600px] rounded-3xl bg-[#d9d9d9]" />
      <div className="w-72 h-12 absolute left-[15px] top-[658px] rounded-3xl bg-[#d9d9d9]" />
      <div className="w-72 h-12 absolute left-[15px] top-[716px] rounded-3xl bg-[#d9d9d9]" />
      <button className="absolute left-[145px] top-[613px] text-base text-left text-black">
        구글
      </button>
      <button className="absolute left-[130px] top-[671px] text-base text-left text-black">
        카카오톡
      </button>
      <button className="absolute left-[145px] top-[729px] text-base text-left text-black">
        애플
      </button>
      <div className="w-72 h-px absolute left-[15px] top-[557px] bg-[#d9d9d9]" />
      <div className="w-5 h-5 absolute left-[15px] top-[395px] bg-[#d9d9d9]" />
      <p className="absolute left-[43px] top-[395px] text-sm text-left text-black">
        자동로그인
      </p>
      <button className="absolute left-[130px] top-[569px] text-sm text-left text-black">
        소셜 로그인
      </button>
    </main>
  );
}

export default LoginPage;

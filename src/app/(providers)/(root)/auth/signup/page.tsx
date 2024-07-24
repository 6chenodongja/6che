"use client";

import Link from "next/link";
import React, { useState } from "react";

function SingUpPage() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  // 새로고침 안 하게 하는 로직
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="w-80 h-[1407px] relative overflow-hidden bg-white m-auto">
      <form onSubmit={onSubmit} className="font-">
        <h1 className="absolute left-4 top-36 text-2xl font-bold text-center text-black">
          회원가입
        </h1>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[207px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            이름
          </label>
          <input
            type="text"
            onChange={onChangeName}
            value={name}
            placeholder="이름을 입력 해 주세요."
            className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-72 pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            닉네임
          </label>
          <input
            type="text"
            onChange={onChangeNickname}
            value={nickname}
            placeholder="닉네임을 입력해 주세요"
            className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[369px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            이메일
          </label>
          <input
            type="email"
            onChange={onChangeEmail}
            value={email}
            placeholder="이메일 아이디"
            className="flex-grow h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[450px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            비밀번호
          </label>
          <input
            type="password"
            onChange={onChangePassword}
            value={password}
            placeholder="비밀번호"
            className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[531px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            비밀번호 확인
          </label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            placeholder="비밀번호 확인"
            className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </div>
        <div className="w-72 h-[46px] absolute left-[15px] top-[679px] rounded-lg bg-[#d9d9d9]" />
        <button className="absolute left-[126px] top-[689px] text-lg font-medium text-left text-black ">
          회원가입
        </button>
        {/* 아래 코드는 지울 예정입니다. */}
        <div className="w-72 h-[46px] absolute left-[14px] top-[740px] rounded-lg bg-[#d9d9d9]" />
        <Link
          href={"/auth/login"}
          className="absolute left-[100px] top-[750px] text-lg font-medium text-left text-black "
        >
          로그인하러 가기
        </Link>
      </form>
    </main>
  );
}

export default SingUpPage;

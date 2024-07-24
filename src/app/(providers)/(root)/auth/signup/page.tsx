import Link from "next/link";
import React from "react";

function SingUpPage() {
  return (
    <main className="w-80 h-[1407px] relative overflow-hidden bg-white m-auto">
      <form>
        <h1 className="absolute left-4 top-36 text-2xl font-medium text-center text-black">
          회원가입
        </h1>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[207px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            이름
          </label>
          <input
            type="text"
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
            placeholder="닉네임을 입력해 주세요"
            className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[369px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            이메일
          </label>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <input
              type="email"
              placeholder="이메일을 입력해 주세요"
              className="flex-grow h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[450px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            비밀번호
          </label>
          <input
            type="password"
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

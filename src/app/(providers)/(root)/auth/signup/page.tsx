import React from "react";

function SingUpPage() {
  return (
    <main className="w-80 h-[1407px] relative overflow-hidden bg-white m-auto">
      <div>
        <h1 className="absolute left-4 top-36 text-2xl font-medium text-center text-black">
          회원가입
        </h1>
        <form className="flex flex-col justify-start items-start w-72 absolute left-4 top-[207px] pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            이름
          </label>
          <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
        </form>
        <form className="flex flex-col justify-start items-start w-72 absolute left-4 top-72 pb-3">
          <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            닉네임
          </label>
          <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
        </form>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[369px] pb-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            이메일
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <input
              type="email"
              name="이메일 입력"
              className="flex-grow h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
            />
            <svg
              width={17}
              height={11}
              viewBox="0 0 17 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1L8.5 9L16 1"
                stroke="black"
                stroke-width={2}
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[450px] pb-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            비밀번호
          </p>
          <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
        </div>
        <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[531px] pb-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
            비밀번호 확인
          </p>
          <input className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]" />
        </div>
        <div className="w-72 h-[46px] absolute left-[15px] top-[679px] rounded-lg bg-[#d9d9d9]" />
        <button className="absolute left-[126px] top-[689px] text-lg font-medium text-left text-black ">
          회원가입
        </button>
      </div>
    </main>
  );
}

export default SingUpPage;

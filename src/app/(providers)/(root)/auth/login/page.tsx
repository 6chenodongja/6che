import React, { useState } from "react";

function LoginPage() {
  // const [name, setName] = useState("");
  return (
    <main className="w-80 h-[1486px] relative overflow-hidden bg-white">
      {/* <div className="w-80 h-14 absolute left-0 top-0 overflow-hidden bg-[#a2a2a2]">
        <div className="w-[30px] h-[30px] absolute left-[15px] top-3 bg-[#d9d9d9]" />
        <div className="w-[30px] h-[30px] absolute left-[273px] top-3 bg-[#d9d9d9]" />
        <div className="flex justify-start items-center h-[30px] absolute left-[46px] top-[13px] gap-4 pl-3.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-1 py-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              날씨
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              코디
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              기온 별 옷차림
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              취향 코디
            </p>
          </div>
        </div>
        <svg
          width={30}
          height={30}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30px] h-[30px]"
          preserveAspectRatio="none"
        >
          <rect width={30} height={30} fill="#F7F7F7" />
          <circle cx={13} cy={14} r={7} stroke="black" stroke-width={2} />
          <path d="M18 19L25 26" stroke="black" stroke-width={2} />
        </svg>
      </div> */}
      {/* <div className="flex flex-col justify-start items-start w-80 absolute left-0 top-[880px] px-8 pt-[60px] pb-[100px] bg-[#a8a8a8]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-9 pt-5">
          <div className="flex-grow-0 flex-shrink-0 w-[38px] h-[38px] bg-[#d9d9d9]" />
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-0.5 py-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-base font-medium text-left text-white">
            날씨
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative py-5">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pb-2.5">
            <p className="flex-grow w-40 text-base font-medium text-left text-white">
              코디
            </p>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            코디 올리기
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-0.5 py-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-base font-medium text-left text-white">
            기온 별 옷차림
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative py-5">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pb-2.5">
            <p className="flex-grow w-40 text-base font-medium text-left text-white">
              마이페이지
            </p>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            좋아요한 게시글{" "}
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            내가 쓴 게시글
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            설정
          </p>
        </div>
      </div> */}
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
      {/* <div className="flex justify-center items-center absolute left-[138px] top-[837.5px] gap-2 p-1">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
          기온 별 옷차림
        </p>
      </div>
      <div className="flex justify-center items-center absolute left-[138px] top-[837.5px] gap-2 p-1">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
          기온 별 옷차림
        </p>
      </div>
      <div className="flex justify-center items-center absolute left-[138px] top-[837.5px] gap-2 p-1">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
          기온 별 옷차림
        </p>
      </div>
      <div className="flex justify-center items-center absolute left-[138px] top-[837.5px] gap-2 p-1">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
          기온 별 옷차림
        </p>
      </div> */}
    </main>
  );
}

export default LoginPage;

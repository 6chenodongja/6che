'use client';
import React from 'react';

function MyPage() {
  return (
    <div className="w-80 h-[1591px] relative overflow-hidden bg-white m-auto">
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-14 gap-[17px] py-5 border-t-0 border-r-0 border-b border-l-0 border-black">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
          <div className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] bg-[#d9d9d9]" />
          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-black">
            날씨좋음
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">
            님
          </p>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-72 h-[42px]">
          <div className="w-72 h-[42px] absolute left-[-0.5px] top-[66.5px] opacity-70 rounded-lg border border-black" />
          <p className="w-[78px] h-6 absolute left-[105px] top-[76px] opacity-70 text-base text-left text-black">
            닉네임 수정
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[185px] py-2">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-4">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            좋아요한 게시글
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-4">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            내가 쓴 게시글
          </p>
        </div>
      </div>
      <div className="w-80 h-14 absolute left-0 top-0 overflow-hidden bg-[#a2a2a2]">
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
      </div>
      <div className="flex flex-col justify-start items-start w-80 absolute left-0 top-[985px] px-8 pt-[60px] pb-[100px] bg-[#a8a8a8]">
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
            좋아요한 게시글{' '}
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            내가 쓴 게시글
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            설정
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[514px]">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 py-5 border-t-0 border-r-0 border-b border-l-0 border-black">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
            시스템 설정
          </p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 py-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg font-medium text-left text-black">
            테마
          </p>
          <div className="flex-grow-0 flex-shrink-0 w-72 h-12">
            <div className="w-72 h-12 absolute left-[-0.5px] top-[62.5px] rounded-lg bg-[#d9d9d9]" />
            <p className="absolute left-[218px] top-[73px] text-lg font-medium text-left text-black">
              자동
            </p>
            <p className="absolute left-[120px] top-[73px] text-lg font-medium text-left text-black">
              다크
            </p>
            <p className="absolute left-[22px] top-[73px] text-lg font-medium text-left text-black">
              라이트
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[313px]">
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative py-5 border-t-0 border-r-0 border-b border-l-0 border-black">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
            계정 설정
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            수정
          </p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 py-5">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow w-72 text-lg font-medium text-left text-black">
              아이디
            </p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-72 h-12">
            <div className="w-72 h-12 absolute left-[-0.5px] top-[62.5px] rounded-lg bg-[#d9d9d9]" />
            <p className="absolute left-[18px] top-[75px] text-base text-left text-black">
              abcd123@gmail.com
            </p>
          </div>
        </div>
      </div>
      <p className="absolute left-[93px] top-[796px] text-base text-left text-black">
        회원탈퇴
      </p>
      <p className="absolute left-44 top-[796px] text-base text-left text-black">
        로그아웃
      </p>
    </div>
  );
}

export default MyPage;

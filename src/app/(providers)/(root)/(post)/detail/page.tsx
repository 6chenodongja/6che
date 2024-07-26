"use client";
import React, { useState } from "react";

function PostDetail() {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div className="w-80 h-[1560px] relative overflow-hidden bg-white max-w-sw mx-auto">
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
            <circle cx={13} cy={14} r={7} stroke="black" strokeWidth={2} />
            <path d="M18 19L25 26" stroke="black" strokeWidth={2} />
          </svg>
        </div>
        <div className="w-72 h-[370px] absolute left-[15px] top-[170px] rounded-xl bg-[#d9d9d9]" />
        <div className="w-72 h-[87px] absolute left-[15px] top-[556px] rounded bg-[#d9d9d9]" />
        <input
          placeholder="100글자 이내로 작성해주세요"
          className="absolute left-8 top-[574px] p-2 text-lg text-black border border-gray-300 rounded"
          value={input}
          onChange={handleInput}
        />
        <div className="w-[65px] h-9 absolute left-[15px] top-[659px] bg-[#d9d9d9]" />
        <p className="absolute left-4 top-32 text-lg font-medium text-left text-black">
          닉네임
        </p>
        <div className="w-[65px] h-9 absolute left-[91px] top-[659px] bg-[#d9d9d9]" />
        <div className="w-[65px] h-9 absolute left-[165px] top-[659px] bg-[#d9d9d9]" />
      </div>
    </div>
  );
}

export default PostDetail;

"use client";
import React from "react";

const QuestionPage: React.FC = () => {
  return (
    <div className="w-80 mx-auto flex flex-col items-center justify-between h-screen bg-white p-4 relative">
      <div className="flex flex-col items-left mt-10">
        <h1 className="text-2xl font-bold mb-4">내 코디 찾기</h1>
        <div className="flex flex-row items-start gap-2 w-72 h-1 rounded-md">
          <div className="h-2 flex-1 bg-black rounded-md"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded-md"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded-md"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded-md"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <p className="flex-grow-0 flex-shrink-0 w-[265px] text-xl font-medium text-black ">
        Q 오늘 기분은 어떠신가요?
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-300 w-36 h-36"></div>
        <div className="bg-gray-300 w-36 h-36"></div>
        <div className="bg-gray-300 w-36 h-36"></div>
        <div className="bg-gray-300 w-36 h-36"></div>
      </div>
      <button className="mb-28 px-20 py-2 bg-[#d9d9d9] text-gray-700 rounded-lg font-medium">
        다음
      </button>
    </div>
  );
};

export default QuestionPage;

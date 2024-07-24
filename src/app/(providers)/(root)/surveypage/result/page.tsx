"use client";

import React from 'react';

const ResultPage: React.FC = () => {
    return (
        <div className="w-80 mx-auto flex flex-col items-center justify-start h-screen bg-white p-4 relative gap-4 mt-20">
            <h1 className="text-xl font-medium h-10 text-black">내 코디 찾기</h1>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
                {Array(4).fill(0).map((_, index) => (
                    <div key={index} className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-xl">26°</span>
                    </div>
                ))}
            </div>
            <h2 className="text-lg font-medium text-black">결과</h2>
            <button className="w-full h-12 bg-[#d9d9d9] text-black rounded-lg mt-4">
                게시글 보러가기
            </button>
        </div>
    );
};

export default ResultPage;
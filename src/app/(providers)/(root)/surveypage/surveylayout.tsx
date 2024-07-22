// src/app/(providers)/(root)/surveypage/surveylayout.tsx
import React from 'react';

const SurveyLayout: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-between h-screen bg-white">
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-4xl">Q</span>
            </div>
            <div className="flex flex-col items-center mt-24">
                <h1 className="text-2xl font-bold mb-2">내 코디 찾기</h1>
                <p className="text-center text-gray-600">
                    질문의 답변을 통해<br />내 성향에 맞는 코디를 추천해드려요
                </p>
            </div>
            <button className="mb-16 px-8 py-2 bg-gray-300 text-gray-700 rounded-md">
                시작하기
            </button>
        </div>
    );
};

export default SurveyLayout;

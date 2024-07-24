'use client';

import React, { useState } from 'react';
import QuestionPage from './question';

const SurveyLayout: React.FC = () => {
    const [showQuestionPage, setShowQuestionPage] = useState(false);

    const handleStartClick = () => {
        setShowQuestionPage(true);
    };

    return (
        <div className="w-80 mx-auto relative flex flex-col items-center justify-between h-screen bg-white">
            {showQuestionPage ? (
                <QuestionPage />
            ) : (
                <>
                    <div className="absolute top-20 right-10 w-20 h-20 rounded-full flex items-center justify-center">
                        <span className="text-blue-300 h-12 text-7xl">Q</span>
                    </div>
                    <div className="flex flex-col items-center mt-40">
                        <h1 className="text-3xl h-20 font-bold mb-2 text-black">내 코디 찾기</h1>
                        <p className="text-base text-center text-black">
                            질문의 답변을 통해
                            <br />내 성향에 맞는 코디를 추천해드려요
                        </p>
                    </div>
                    <button
                        onClick={handleStartClick}
                        className="mb-28 px-20 py-2 bg-[#d9d9d9] text-gray-700 rounded-lg font-black"
                    >
                        시작하기
                    </button>
                </>
            )}
        </div>
    );
};

export default SurveyLayout;

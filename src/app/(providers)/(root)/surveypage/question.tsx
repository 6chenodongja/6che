"use client";

import React, { useState } from 'react';
import { questions } from '@/utils/questions';

const QuestionPage: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(Array(questions.length).fill(null));
    const [showResultButton, setShowResultButton] = useState(false);

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowResultButton(false);
        } else {
            setShowResultButton(true);
        }
    };

    const handleBackClick = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setShowResultButton(false);
        }
    };

    const handleOptionClick = (option: string) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestionIndex] = option;
        setSelectedOptions(updatedOptions);
        handleNextClick();
    };

    const handleShowResultClick = () => {
        // 추후 결과 페이지 만들예정
        alert('결과를 확인하세요!');
    };

    return (
        <div className="w-80 mx-auto flex flex-col items-center justify-start h-screen bg-white p-4 relative gap-4 mt-20">
            <div className="flex items-center w-full">
                {currentQuestionIndex > 0 && (
                    <button onClick={handleBackClick} className="text-xl font-medium text-black mr-2">
                        ᐸ
                    </button>
                )}
                <h1 className="text-xl font-medium text-black">내 코디 찾기</h1>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
                <div className="flex justify-start items-start w-full relative overflow-hidden gap-2 rounded">
                    {Array(questions.length)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className={`flex-grow h-2 ${
                                    index <= currentQuestionIndex ? 'bg-[#434343]' : 'bg-[#d9d9d9]'
                                } rounded-md`}
                            ></div>
                        ))}
                </div>
            </div>
            <div className="flex flex-col items-start w-full gap-4">
                <div className="flex justify-start items-center w-full relative gap-0.5">
                    <p className="text-2xl font-medium text-center text-black">Q</p>
                    <p className="text-xl font-medium text-left text-black">
                        {questions[currentQuestionIndex].question}
                    </p>
                </div>
                <div className="flex flex-col w-full gap-4">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button
                            key={index}
                            className={`w-full h-12 border border-black-400 rounded-lg text-black-400 hover:bg-gray-200 ${
                                selectedOptions[currentQuestionIndex] === option ? 'bg-gray-300' : ''
                            }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            {showResultButton && (
                <button className="w-full h-12 bg-[#d9d9d9] text-white rounded-lg mt-4" onClick={handleShowResultClick}>
                    결과 확인
                </button>
            )}
        </div>
    );
};

export default QuestionPage;

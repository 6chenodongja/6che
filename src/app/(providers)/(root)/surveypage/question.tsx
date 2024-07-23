'use client';
import React, { useState } from "react";
import { questions } from "@/utils/questions";

const QuestionPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionClick = () => {
    handleNextClick();
  };

  return (
    <div className="w-80 mx-auto flex flex-col items-center justify-start h-screen bg-white p-4 relative gap-4">
      <div className="flex flex-col items-start mt-10 w-full gap-2">
        <h1 className="text-xl font-medium text-black">내 코디 찾기</h1>
        <div className="flex justify-start items-start w-full relative overflow-hidden gap-2 rounded">
          {Array(questions.length).fill(0).map((_, index) => (
            <div key={index} className={`flex-grow h-2 ${index <= currentQuestionIndex ? 'bg-[#434343]' : 'bg-[#d9d9d9]'} rounded-md`}></div>
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
              className="w-full h-12 border border-black-400 rounded-lg text-black-400 hover:bg-gray-200"
              onClick={handleOptionClick}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        {currentQuestionIndex > 0 && (
          <button onClick={handleBackClick} className="w-1/2 h-[46px] rounded-lg bg-[#d9d9d9] text-lg font-medium flex items-center justify-center mr-2">
            뒤로
          </button>
        )}
        <button onClick={handleNextClick} className="w-1/2 h-[46px] rounded-lg bg-[#d9d9d9] text-lg font-medium flex items-center justify-center">
          다음
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;

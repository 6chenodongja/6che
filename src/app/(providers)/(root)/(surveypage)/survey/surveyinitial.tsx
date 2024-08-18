'use client';

import React, { useState } from 'react';
import QuestionPage from './question';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const SurveyLayout: React.FC = () => {
  const [showQuestionPage, setShowQuestionPage] = useState(false);

  const handleStartClick = () => {
    setShowQuestionPage(true);
  };

  return (
    <div
      className={`survey-container flex flex-col justify-center items-center w-full min-h-screen ${notoSansKR.className}`}
    >
      <div
        className="survey-content bg-#fafafa flex-grow flex flex-col items-center justify-between w-full max-w-lg mx-auto"
        style={{}}
      >
        {showQuestionPage ? (
          <QuestionPage />
        ) : (
          <>
            <div className="survey-imgae flex flex-col items-center mt-[23px]">
              <object
                data="/images/Survey/box.png"                
              />
            </div>
            <p
              className="survey-text text-center text-[#121212]"
              
            >
              <span>질문의 답변을 통해</span>
              <br />
              <span>내 성향에 맞는 코디를 추천해드려요</span>
            </p>

            <div
              className="start-button flex justify-center items-center cursor-pointer hover:bg-[rgba(94,176,255,0.80)] active:bg-[rgba(88,168,243,0.8)]
              "
              onClick={handleStartClick}
             
            >
              <p className="text-center text-white text-[#FFF]">시작하기</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyLayout;

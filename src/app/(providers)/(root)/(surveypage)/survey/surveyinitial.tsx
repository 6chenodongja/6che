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
        style={{

        }}
      >
        {showQuestionPage ? (
          <QuestionPage />
        ) : (
          <>
            <div className="flex flex-col items-center mt-[23px]">
              <object
                data="/images/Survey/box.png"
                style={{ width: '100%', maxWidth: '288px', height: 'auto' }}
                className="mb-5"
              />
            </div>
            <p
              className="survey-text text-center text-[#121212] mt-[-40px]"
              style={{
                fontFamily: 'Noto Sans KR',
                fontWeight: '400',
                lineHeight: '150%', // 27px
                fontStyle: 'normal',
                letterSpacing: '-0.54px',
                color: 'var(--Black, #121212)',
                textAlign: 'center',
              }}
            >
              <span>질문의 답변을 통해</span>
              <br />
              <span>내 성향에 맞는 코디를 추천해드려요</span>
            </p>

            <div
              className="start-button flex justify-center items-center cursor-pointer hover:bg-[rgba(94,176,255,0.80)] active:bg-[rgba(88,168,243,0.8)] mb-40
              "
              onClick={handleStartClick}
              style={{
                width: '100%',
                padding: '10px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                background: 'var(--Black, #121212)',
                marginTop: '150px',
              }}
            >
              <p
                className="text-center text-white text-[#FFF]"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Noto Sans KR',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '130%',
                  letterSpacing: '0.32px',
                }}
              >
                시작하기
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyLayout;

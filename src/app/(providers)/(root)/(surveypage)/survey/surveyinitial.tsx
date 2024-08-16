'use client';

import React, { useState } from 'react';
import QuestionPage from './question';
import { Noto_Sans_KR } from 'next/font/google';

// Noto Sans KR 폰트 설정
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
      className={`survey-container bg-neutral-50 flex flex-col justify-center items-center w-full min-h-screen ${notoSansKR.className}`}
    >
      <div
        className="survey-content flex-grow flex flex-col items-center justify-between w-full max-w-md mx-auto"
        style={{ height: '650px' }}
      >
        {showQuestionPage ? (
          <QuestionPage />
        ) : (
          <>
            <div className="flex flex-col items-center mt-24">
              <div className="relative">
                <div className="absolute top-[-68px] right-[-17px] z-10">
                  <object data="/images/Survey/top.svg" />
                </div>
                <div className="absolute top-[18px] left-[-39px]">
                  <object data="/images/Survey/middle.svg" />
                </div>
                <div
                  className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-[1000px] border-2 border-white backdrop-blur-[5px]"
                  style={{
                    background: 'var(--Yellow-500, rgba(255, 195, 41, 0.80))',
                    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
                  }}
                >
                  <p
                    className="text-[34px] text-left text-[#000000]"
                    style={{
                      fontWeight: '400',
                      lineHeight: '115%',
                      letterSpacing: '-0.68px',
                      opacity: 'var(--sds-size-stroke-border)',
                      fontStyle: 'normal',
                    }}
                  >
                    취향 코디 찾기
                  </p>
                </div>
                <div className="absolute top-[123px] right-[-48px]">
                  <object data="/images/Survey/bottom.svg" />
                </div>
              </div>
              <p
                className="text-base text-center text-[#000000] mt-5"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                <span
                  className="text-base text-center"
                  style={{
                    fontFamily: 'Noto Sans KR',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '150%',
                    fontStyle: 'normal',
                    letterSpacing: '0.32px',
                    color: '#000000',
                  }}
                >
                  질문의 답변을 통해
                </span>
                <br />
                <span
                  className="text-base text-center"
                  style={{
                    fontFamily: 'Noto Sans KR',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '150%',
                    fontStyle: 'normal',
                    letterSpacing: '0.32px',
                    color: '#000000',
                  }}
                >
                  내 성향에 맞는 코디를 추천해드려요
                </span>
              </p>
            </div>
            <div
              className="flex justify-center items-center w-[288px] py-[14px] px-[var(--sds-size-space-300)] gap-[var(--sds-size-space-200)] rounded-lg opacity-[var(--sds-size-stroke-border)] bg-[#000000] hover:bg-[rgba(94,176,255,0.80)] active:bg-[rgba(88,168,243,0.8)] mb-40 cursor-pointer"
              onClick={handleStartClick}
            >
              <p className="text-center text-white"> 시작하기</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyLayout;

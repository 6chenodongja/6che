'use client';

import React, { useState } from 'react';
import QuestionPage from './question';
import Image from 'next/image';
import Header from '../../../../(providers)/(components)/Header';
import Footer from '../../../../(providers)/(components)/Footer';
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
    <div className={`container bg-neutral-50 flex flex-col justify-center items-center w-full min-h-screen ${notoSansKR.className}`}>
      <Header />
      <div className="flex-grow flex flex-col items-center justify-between w-full max-w-md mx-auto" style={{ height: '667px' }}>
        {showQuestionPage ? (
          <QuestionPage />
        ) : (
          <>
            <div className="flex flex-col items-center mt-24">
              <div className="relative">
                <div className="absolute top-[-68px] right-[-17px] z-10">
                  <Image src="/images/Survey/top.svg" alt="상단 옷" width={100} height={68} />
                </div>
                <div className="absolute top-[18px] left-[-39px]">
                  <Image src="/images/Survey/middle.svg" alt="중간 옷" width={100} height={60} />
                </div>
                <div
                  className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-[1000px] border-2 border-white backdrop-blur-[5px]"
                  style={{
                    background: 'var(--Yellow-500, rgba(255, 195, 41, 0.80))',
                    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
                  }}
                >
                  <p className="text-[34px] text-left text-[#121212]" style={{
                    fontWeight: 'normal',
                    lineHeight: '115%',
                    letterSpacing: '-0.68px',
                    opacity: 'var(--sds-size-stroke-border)',
                  }}>
                    취향 코디 찾기
                  </p>
                </div>
                <div className="absolute top-[120px] right-[-23px]">
                  <Image src="/images/Survey/bottom.svg" alt="하단 옷" width={155} height={100} />
                </div>
              </div>
              <p className="text-base text-center text-[#121212] mt-5" style={{ fontFamily: 'Noto Sans KR' }}>
                <span className="text-base text-center text-[#121212]" style={{ fontFamily: 'Noto Sans KR' }}>
                  질문의 답변을 통해
                </span>
                <br />
                <span className="text-base text-center text-[#121212]" style={{ fontFamily: 'Noto Sans KR' }}>
                  내 성향에 맞는 코디를 추천해드려요
                </span>
              </p>
            </div>
            <div
              className="flex justify-center items-center w-[288px] py-[14px] px-[var(--sds-size-space-300)] gap-[var(--sds-size-space-200)] rounded-lg opacity-[var(--sds-size-stroke-border)] bg-[#121212] hover:bg-[rgba(94,176,255,0.80)] active:bg-[rgba(88,168,243,0.8)] mb-40 cursor-pointer"
              onClick={handleStartClick}
            >
              <p className="text-center text-white"
                 style={{
                   fontFamily: 'Noto Sans KR',
                   fontSize: '16px',
                   fontStyle: 'normal',
                   fontWeight: '500',
                   lineHeight: '130%',
                   letterSpacing: '-0.32px',
                 }}
              >
                시작하기
              </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SurveyLayout;

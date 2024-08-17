'use client';

import React, { useState } from 'react';
import { questions, optionTags } from '@/utils/questions';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Modak, Noto_Sans_KR } from 'next/font/google';
import { useTagStore } from '@/zustand/store/useTagStore';
import LoadingScreen from '../../../(components)/LoadingScreen';

const modak = Modak({ weight: '400', subsets: ['latin'] });
const notoSansKr = Noto_Sans_KR({ weight: '500', subsets: ['latin'] });

interface TagCount {
  [key: string]: number;
}

const QuestionPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    Array(questions.length).fill(null),
  );
  const [tags, setTags] = useState<string[]>([]);
  const [showResultButton, setShowResultButton] = useState(false);
  const [selectedFourthQuestionOptions, setSelectedFourthQuestionOptions] =
    useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setTagsInStore = useTagStore((state) => state.setTags);

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

    if (currentQuestionIndex === 3) {
      let updatedFourthQuestionOptions = [...selectedFourthQuestionOptions];

      if (updatedFourthQuestionOptions.includes(option)) {
        updatedFourthQuestionOptions = updatedFourthQuestionOptions.filter(
          (opt) => opt !== option,
        );
      } else if (updatedFourthQuestionOptions.length < 2) {
        updatedFourthQuestionOptions.push(option);
      }

      setSelectedFourthQuestionOptions(updatedFourthQuestionOptions);
      updatedOptions[currentQuestionIndex] =
        updatedFourthQuestionOptions.join(', ');
    } else {
      updatedOptions[currentQuestionIndex] = option;
      if (currentQuestionIndex === 5) {
        setShowResultButton(true);
      }
      handleNextClick();
    }

    setSelectedOptions(updatedOptions);

    const optionTagArray = optionTags[option] || [];
    setTags((prevTags) => {
      const newTags = [...new Set([...prevTags, ...optionTagArray])];
      return newTags;
    });
  };

  const getOptionImage = (option: string) => {
    switch (option) {
      case '봄':
        return '/images/Survey/spring.svg';
      case '여름':
        return '/images/Survey/summer.svg';
      case '가을':
        return '/images/Survey/autumn.svg';
      case '겨울':
        return '/images/Survey/winter.svg';
      default:
        return '';
    }
  };

  const handleShowResultClick = () => {
    const tagCount: TagCount = tags.reduce((acc: TagCount, tag: string) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});

    const sortedTags = Object.entries(tagCount)
      .sort(([, a], [, b]) => b - a)
      .map(([tag]) => tag);

    const gender =
      sortedTags.find((tag) => ['남성', '여성', '선택 안함'].includes(tag)) ||
      '선택 안함';
    const style =
      sortedTags.find((tag) =>
        [
          '미니멀',
          '아메카지',
          '시티보이',
          '캐주얼',
          '비즈니스캐주얼',
          '스포츠',
          '빈티지',
        ].includes(tag),
      ) || '캐주얼';
    const seasons = sortedTags
      .filter((tag) => ['봄', '여름', '가을', '겨울'].includes(tag))
      .slice(0, 2);
    const locations = sortedTags
      .filter((tag) =>
        [
          '데이트',
          '캠퍼스',
          '카페',
          '출근',
          '결혼식',
          '바다',
          '여행',
          '데일리',
          '소개팅',
        ].includes(tag),
      )
      .slice(0, 2);

    setTagsInStore({ gender, style, seasons, locations });

    setLoading(true);
    setTimeout(() => {
      router.push(`/survey/result`);
    }, 2000); // 2초 후에 이동
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="question-container bg-#fafafa flex-grow flex flex-col justify-between w-full max-w-md mx-auto">
          <div className=" w-80 mx-auto flex flex-col items-center justify-start p-4 relative gap-4">
            <div className="question-navigation">
              <button
                onClick={handleBackClick}
                className={`text-xl font-medium text-black question-back-button `}
              >
                <Image
                  src={'/images/icons/arrow_left.svg'}
                  alt="뒤로가기"
                  width={8}
                  height={14}
                />
              </button>
              <p className="question-number">
                {currentQuestionIndex + 1}/{questions.length}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center items">
              <div className=" w-[74px] h-[39px] rounded-[1000px] bg-[#ffc329]/80 flex justify-center">
                <p
                  className={`mt-1 text-3xl text-left text-[#121212] ${modak.className}`}
                  style={{
                    color: 'var(--Black, #121212)',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    letterSpacing: '-1.8px',
                  }}
                >
                  Q {currentQuestionIndex + 1}
                </p>
              </div>
              {currentQuestionIndex === 0 && (
                <p
                  className={`text-1 text-2xl text-left text-[#121212] ${notoSansKr.className}`}
                >
                  <span className="text-2xl font-bold text-left text-[#121212]">
                    현재 무슨 계절
                  </span>
                  <span className="text-2xl text-left text-[#121212]">
                    인가요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 1 && (
                <p
                  className={`text-2 text-2xl text-left text-[#121212] ${notoSansKr.className}`}
                >
                  <span className="text-2xl font-bold text-left text-[#121212]">
                    현재 기온
                  </span>
                  <span className="text-2xl text-left text-[#121212]">
                    은 몇 도인가요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 2 && (
                <p
                  className={`text-3 text-2xl text-left text-[#121212] ${notoSansKr.className}`}
                >
                  <span className="text-2xl font-bold text-left text-[#121212]">
                    어떤 사람
                  </span>
                  <span className="text-2xl text-left text-[#121212]">
                    을 만나나요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 3 && (
                <p
                  className={`text-4 text-2xl text-center text-[#121212] ${notoSansKr.className}`}
                >
                  <span className=" text-2xl text-center text-[#121212]">
                    오늘{' '}
                  </span>
                  <span className=" text-2xl font-bold text-center text-[#121212]">
                    어떤 활동
                  </span>
                  <span className="text-2xl text-center text-[#121212]">
                    을 하나요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 4 && (
                <p
                  className={`text-5 text-2xl text-center text-[#121212] ${notoSansKr.className}`}
                >
                  <span className="w-full text-2xl font-bold text-center text-[#121212]">
                    어떤 스타일
                  </span>
                  <span className="w-full text-2xl text-center text-[#121212]">
                    의 옷을{' '}
                  </span>
                  <br />
                  <span className="w-full text-2xl text-center text-[#121212]">
                    입고 싶나요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 5 && (
                <p
                  className={`text-6 text-2xl text-center text-[#121212] ${notoSansKr.className}`}
                >
                  <span className="w-72 text-2xl font-bold text-center text-[#121212]">
                    성별
                  </span>
                  <span className="w-72 text-2xl text-center text-[#121212]">
                    이 어떻게 되시나요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 3 && (
                <p
                  className={`stext-4 text-sm two-text font-medium text-center text-[#666] ${notoSansKr.className}`}
                >
                  최대 2개
                </p>
              )}
            </div>

            {/* Option Rendering Based on Question Index */}
            <div className=" flex flex-col items-start w-full gap-4">
              {currentQuestionIndex === 0 ? (
                <div className="grid card-div grid-cols-2 gap-[8px] mb-4">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`relative  w-36 h-36 flex items-center justify-center cursor-pointer overflow-hidden rounded-lg p-2`}
                        onClick={() => handleOptionClick(option)}
                        style={{
                          borderRadius: '20px',
                          border:
                            selectedOptions[currentQuestionIndex] === option
                              ? '1px solid var(--Yellow-500, #FFC329)'
                              : '1px solid rgba(204, 204, 204, 0.70)',
                          opacity: '1',
                          background: 'rgba(255, 255, 255, 0.50)',
                          backdropFilter: 'blur(5px)',
                        }}
                      >
                        <Image
                          src={getOptionImage(option)}
                          alt={option}
                          width={108}
                          height={88}
                          quality={50}
                          className="w-[108px] h-[88px] mt-4"
                        />
                        <p
                          className={`absolute ${notoSansKr.className}`}
                          style={{
                            color:
                              selectedOptions[currentQuestionIndex] === option
                                ? '#FFC329'
                                : '#4D4D4D',
                            fontSize: '16px',
                            fontWeight:
                              selectedOptions[currentQuestionIndex] === option
                                ? 'bold'
                                : '500',
                            lineHeight: '130%',
                            letterSpacing: '-0.32px',
                            top: '14px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                          }}
                        >
                          {option}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              ) : currentQuestionIndex === 1 ? (
                <div className="grid grid-cols-2 w-full gap-[8px] mb-4 card-div2 items2">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center cursor-pointer overflow-hidden rounded-lg p-4`}
                        onClick={() => handleOptionClick(option)}
                        style={{
                          borderRadius: '20px',
                          border:
                            selectedOptions[currentQuestionIndex] === option
                              ? '1px solid var(--Yellow-500, #FFC329)'
                              : '1px solid rgba(204, 204, 204, 0.70)',
                          opacity: '1',
                          background: 'rgba(255, 255, 255, 0.50)',
                          backdropFilter: 'blur(5px)',
                        }}
                      >
                        <span
                          className={`text-base font-medium ${
                            selectedOptions[currentQuestionIndex] === option
                              ? 'text-[#ffc329] font-bold'
                              : 'text-[#4d4d4d]'
                          }`}
                        >
                          {option}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              ) : currentQuestionIndex === 4 ? (
                <div className="flex flex-col w-full gap-2 card-div5 div5-down items5 div-down">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center w-[288px] h-[49px] p-[14px] cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => handleOptionClick(option)}
                        style={{
                          borderRadius: '20px',
                          border:
                            selectedOptions[currentQuestionIndex] === option
                              ? '1px solid var(--Yellow-500, #FFC329)'
                              : '1px solid rgba(204, 204, 204, 0.70)',
                          opacity: '1',
                          background: 'rgba(255, 255, 255, 0.50)',
                          backdropFilter: 'blur(5px)',
                        }}
                      >
                        <span
                          className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left ${
                            selectedOptions[currentQuestionIndex] === option
                              ? 'text-[#ffc329] font-bold'
                              : 'text-[#4d4d4d]'
                          }`}
                        >
                          {option}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              ) : currentQuestionIndex === 5 ? (
                <div
                  className={`flex flex-col items-center gap-0 card-div6 items6 div-up`}
                >
                  <div className="flex gap-2">
                    {questions[currentQuestionIndex].options
                      .slice(0, 2)
                      .map((option, index) => (
                        <div
                          key={index}
                          className={`flex justify-center items-center w-[140px] h-[140px] relative overflow-hidden gap-2 p-3 rounded-lg cursor-pointer`}
                          onClick={() => handleOptionClick(option)}
                          style={{
                            borderRadius: '20px',
                            border:
                              selectedOptions[currentQuestionIndex] === option
                                ? '1px solid var(--Yellow-500, #FFC329)'
                                : '1px solid rgba(204, 204, 204, 0.70)',
                            opacity: '1',
                            background: 'rgba(255, 255, 255, 0.50)',
                            backdropFilter: 'blur(5px)',
                          }}
                        >
                          <span
                            className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left ${
                              selectedOptions[currentQuestionIndex] === option
                                ? 'text-[#ffc329] font-bold'
                                : 'text-[#4d4d4d]'
                            }`}
                          >
                            {option}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div
                    className="flex justify-center"
                    style={{ marginTop: '10px' }}
                  >
                    <div
                      className={`flex justify-center items-center w-72 relative overflow-hidden gap-2 p-3 rounded-lg cursor-pointer`}
                      onClick={() => handleOptionClick('선택 안함')}
                      style={{
                        borderRadius: '20px',
                        border:
                          selectedOptions[currentQuestionIndex] === '선택 안함'
                            ? '1px solid var(--Yellow-500, #FFC329)'
                            : '1px solid rgba(204, 204, 204, 0.70)',
                        opacity: '1',
                        background: 'rgba(255, 255, 255, 0.50)',
                        backdropFilter: 'blur(5px)',
                      }}
                    >
                      <span
                        className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left ${
                          selectedOptions[currentQuestionIndex] === '선택 안함'
                            ? 'text-[#ffc329] font-bold'
                            : 'text-[#4d4d4d]'
                        }`}
                      >
                        선택 안함
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`flex ${
                    currentQuestionIndex === 3
                      ? 'flex-wrap justify-between card-div4 items4'
                      : 'flex-col card-div3 items3'
                  } w-full gap-2 `}
                >
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center ${
                          currentQuestionIndex === 3
                            ? 'w-[140px] h-[45px] rounded-[20px] '
                            : 'w-72 h-[45px]'
                        } relative overflow-hidden gap-2 p-3 rounded-lg cursor-pointer`}
                        onClick={() => handleOptionClick(option)}
                        style={{
                          borderRadius: '20px',
                          border:
                            (currentQuestionIndex === 3 &&
                              selectedFourthQuestionOptions.includes(option)) ||
                            selectedOptions[currentQuestionIndex] === option
                              ? '1px solid var(--Yellow-500, #FFC329)'
                              : '1px solid rgba(204, 204, 204, 0.70)',
                          opacity: '1',
                          background: 'rgba(255, 255, 255, 0.50)',
                          backdropFilter: 'blur(5px)',
                        }}
                      >
                        <span
                          className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left ${
                            (currentQuestionIndex === 3 &&
                              selectedFourthQuestionOptions.includes(option)) ||
                            selectedOptions[currentQuestionIndex] === option
                              ? 'text-[#ffc329] font-bold'
                              : 'text-[#4d4d4d]'
                          }`}
                        >
                          {option}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
            {currentQuestionIndex === 5 && (
              <button
                onClick={handleShowResultClick}
                className="start-button result-btn w-72 h-[49px] text-white rounded-lg"
                style={{
                  display: 'flex',
                  width: '400px',
                  padding: '10px 40px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 'var(--sds-size-space-200)',
                  borderRadius: '10px',
                  background: selectedOptions[currentQuestionIndex]
                    ? 'var(--Black, #121212)'
                    : 'var(--Black-100, rgba(230, 230, 230, 0.60))',
                  color: 'var(--White, #FFF)',
                  fontFamily: '"Noto Sans KR"',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '130%',
                  letterSpacing: '-0.32px',
                  cursor: selectedOptions[currentQuestionIndex]
                    ? 'pointer'
                    : 'not-allowed',
                }}
                disabled={!selectedOptions[currentQuestionIndex]}
              >
                결과보기
              </button>
            )}
            {currentQuestionIndex === 3 && (
              <button
                onClick={handleNextClick}
                className="start-button next-btn next-button w-72 h-[49px] text-white rounded-lg "
                style={{
                  bottom: '50px',
                  display: 'flex',
                  width: '400px', // 너비를 100%로 설정하여 전체 화면을 차지하게 설정
                  padding: '10px 40px', // 상하 여백을 20px로 설정하고, 좌우 여백도 40px로 증가
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 'var(--sds-size-space-200)',
                  borderRadius: '10px',
                  background:
                    selectedFourthQuestionOptions.length > 0
                      ? 'var(--Black, #121212)'
                      : 'var(--Black-100, rgba(230, 230, 230, 0.60))',
                  color: 'var(--White, #FFF)',
                  fontFamily: '"Noto Sans KR"',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '130%',
                  letterSpacing: '-0.32px',
                  cursor:
                    selectedFourthQuestionOptions.length > 0
                      ? 'pointer'
                      : 'not-allowed',
                }}
                disabled={selectedFourthQuestionOptions.length === 0}
              >
                다음
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionPage;

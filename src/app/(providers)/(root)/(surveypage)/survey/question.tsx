'use client';

import React, { useState } from 'react';
import { questions, optionTags } from '@/utils/questions';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Modak, Noto_Sans_KR } from 'next/font/google';
import { useTagStore } from '@/zustand/store/useTagStore';
import LoadingScreen from '../../../(components)/LoadingScreen'; // 로딩 화면 컴포넌트 import

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
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
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
        return "/images/Survey/spring.svg";
      case '여름':
        return "/images/Survey/summer.svg";
      case '가을':
        return "/images/Survey/autumn.svg";
      case '겨울':
        return "/images/Survey/winter.svg";
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

    // 로딩 시작
    setLoading(true);
    setTimeout(() => {
      router.push(`/survey/result`);
    }, 2000); // 2초 후에 이동
  };

  return (
    <>
      {loading ? (
        <LoadingScreen /> // 로딩 중일 때 로딩 화면 표시
      ) : (
        <div className="flex-grow flex flex-col items-center justify-between w-full max-w-md mx-auto">
          <div className="w-80 mx-auto flex flex-col items-center justify-start p-4 relative gap-4" style={{ height: '667px' }}>
            <div
              className="flex flex-col items-start absolute top-0 left-4"
              style={{ marginTop: '20px' }}
            >
              <button
                onClick={handleBackClick}
                className={`text-xl font-medium text-black ${currentQuestionIndex === 0 ? 'invisible' : 'visible'}`}
              >
                <Image src={"/images/icons/arrow_left.svg"} alt="뒤로가기" width={8} height={8} />
              </button>
              <p
                className="text-lg text-left text-[#666]"
                style={{ marginTop: '10px' }}
              >
                {currentQuestionIndex + 1}/{questions.length}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-[74px] h-10 rounded-[1000px] bg-[#ffc329]/80 flex items-center justify-center"
                style={{ marginTop: '70px' }}
              >
                <p
                  className={`text-3xl text-left text-[#121212] ${modak.className}`}
                >
                  Q {currentQuestionIndex + 1}
                </p>
              </div>
              {currentQuestionIndex === 0 && (
                <p
                  className={`text-2xl text-left text-[#121212] ${notoSansKr.className}`}
                  style={{ marginTop: '24px' }}
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
                  className={`text-2xl text-left text-[#121212] ${notoSansKr.className}`}
                  style={{ marginTop: '24px' }}
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
                  className={`text-2xl text-left text-[#121212] ${notoSansKr.className}`}
                  style={{ marginTop: '24px' }}
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
                  className={`text-2xl text-center text-[#121212] ${notoSansKr.className}`}
                  style={{ marginTop: '24px' }}
                >
                  <span className="w-[266px] text-2xl text-center text-[#121212]">
                    오늘{' '}
                  </span>
                  <span className="w-[266px] text-2xl font-bold text-center text-[#121212]">
                    어떤 활동
                  </span>
                  <span className="w-[266px] text-2xl text-center text-[#121212]">
                    을 하나요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 4 && (
                <p
                  className={`text-2xl text-center text-[#121212] ${notoSansKr.className}`}
                  style={{ marginTop: '24px' }}
                >
                  <span className="w-72 text-2xl font-bold text-center text-[#121212]">
                    어떤 스타일
                  </span>
                  <span className="w-72 text-2xl text-center text-[#121212]">
                    의 옷을{' '}
                  </span>
                  <br />
                  <span className="w-72 text-2xl text-center text-[#121212]">
                    입고 싶나요?
                  </span>
                </p>
              )}
              {currentQuestionIndex === 5 && (
                <p
                  className={`text-2xl text-center text-[#121212] ${notoSansKr.className}`}
                  style={{ marginTop: '24px' }}
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
                  className={`text-sm font-medium text-center text-[#666] ${notoSansKr.className}`}
                  style={{ marginTop: '5px' }}
                >
                  최대 2개
                </p>
              )}
            </div>
            <div
              className="flex flex-col items-start w-full gap-4"
              style={{ marginTop: '60px' }}
            >
              {currentQuestionIndex === 0 ? (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <div
                      key={index}
                      className={`relative w-36 h-36 flex items-center justify-center cursor-pointer overflow-hidden border-[1px] border-[#4D4D4D] rounded-lg`}
                      onClick={() => handleOptionClick(option)}
                      style={{ padding: 0, margin: 0 }}
                    >
                      <Image
                        src={getOptionImage(option)}
                        alt={option}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <p
                        className={`absolute ${notoSansKr.className}`}
                        style={{
                          color: '#4D4D4D',
                          fontSize: '16px',
                          fontWeight: 500,
                          lineHeight: '130%',
                          letterSpacing: '-0.32px',
                          top: '14px',
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      >
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              ) : currentQuestionIndex === 5 ? (
                <div className={`flex flex-col items-center gap-0`}>
                  <div className="flex gap-2">
                    {questions[currentQuestionIndex].options
                      .slice(0, 2)
                      .map((option, index) => (
                        <div
                          key={index}
                          className={`flex justify-center items-center w-[140px] h-[140px] relative overflow-hidden gap-2 p-3 rounded-lg cursor-pointer ${
                            selectedOptions[currentQuestionIndex] === option
                              ? 'bg-[#fff7d4] border border-[#ffc329]/80'
                              : 'bg-white/50 border border-[#808080] backdrop-blur-[10px]'
                          }`}
                          onClick={() => handleOptionClick(option)}
                        >
                          <span
                            className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left ${
                              selectedOptions[currentQuestionIndex] === option
                                ? 'text-[#ffc329]'
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
                      className={`flex justify-center items-center w-72 relative overflow-hidden gap-2 p-3 rounded-lg cursor-pointer ${
                        selectedOptions[currentQuestionIndex] === '선택 안함'
                          ? 'bg-[#fff7d4] border border-[#ffc329]/80'
                          : 'bg-white/50 border border-[#808080] backdrop-blur-[10px] '
                      }`}
                      onClick={() => handleOptionClick('선택 안함')}
                    >
                      <span
                        className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left ${
                          selectedOptions[currentQuestionIndex] === '선택 안함'
                            ? 'text-[#ffc329]'
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
                      ? 'flex-wrap justify-between'
                      : 'flex-col'
                  } w-full gap-2`}
                >
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center ${
                          currentQuestionIndex === 3
                            ? 'w-[140px] h-[45px] rounded-[20px]'
                            : 'w-72 h-[45px]'
                        } relative overflow-hidden gap-2 p-3 rounded-lg cursor-pointer ${
                          (currentQuestionIndex === 3 &&
                            selectedFourthQuestionOptions.includes(option)) ||
                          selectedOptions[currentQuestionIndex] === option
                            ? 'bg-[#fff7d4] border border-[#ffc329]/80'
                            : 'bg-white/50 border border-[#808080] backdrop-blur-[10px] '
                        }`}
                        onClick={() => handleOptionClick(option)}
                      >
                        <span
                          className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left ${
                            (currentQuestionIndex === 3 &&
                              selectedFourthQuestionOptions.includes(option)) ||
                            selectedOptions[currentQuestionIndex] === option
                              ? 'text-[#ffc329]'
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
            {showResultButton && (
              <button
                onClick={handleShowResultClick}
                className="w-72 h-[46px] bg-[#121212] text-white rounded-lg mt-4 hover:bg-[rgba(94,176,255,0.80)]"
              >
                결과 보기
              </button>
            )}
            {currentQuestionIndex === 3 &&
              selectedFourthQuestionOptions.length > 0 && (
                <button
                  onClick={handleNextClick}
                  className="w-72 h-[46px] bg-[#5EB0FFCC] text-white rounded-lg mt-4"
                >
                  다음 질문
                </button>
              )}{' '}
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionPage;

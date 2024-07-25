'use client';

import React, { useState } from 'react';
import { questions, optionTags } from '@/utils/questions';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import springImage from '@/assets/spring.jpg';
import summerImage from '@/assets/summer.jpg';
import autumnImage from '@/assets/autumn.jpg';
import winterImage from '@/assets/winter.jpg';

interface TagCount {
    [key: string]: number;
}

const QuestionPage: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(Array(questions.length).fill(null));
    const [tags, setTags] = useState<string[]>([]);
    const [showResultButton, setShowResultButton] = useState(false);
    const router = useRouter();

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

        const optionTagArray = optionTags[option];
        setTags((prevTags) => [...prevTags, ...optionTagArray]);

        handleNextClick();
    };

    const getOptionImage = (option: string) => {
        switch (option) {
            case '봄':
                return springImage;
            case '여름':
                return summerImage;
            case '가을':
                return autumnImage;
            case '겨울':
                return winterImage;
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

        const gender = sortedTags.find(tag => ['남성', '여성', '선택 안함'].includes(tag)) || '선택 안함';
        const style = sortedTags.find(tag => ['미니멀', '아메카지', '시티보이', '캐주얼', '비즈니스캐주얼', '스포츠', '빈티지'].includes(tag)) || '캐주얼';
        const seasons = sortedTags.filter(tag => ['봄', '여름', '가을', '겨울'].includes(tag)).slice(0, 2);
        const locations = sortedTags.filter(tag => ['데이트', '캠퍼스', '카페', '출근', '결혼식', '바다', '여행', '데일리'].includes(tag)).slice(0, 2);

        router.push(`/surveypage/result?gender=${gender}&style=${style}&seasons=${seasons.join(',')}&locations=${locations.join(',')}`);
    };

    return (
        <div className="w-80 mx-auto flex flex-col items-center justify-start h-screen bg-white p-4 relative gap-4 mt-20">
            <div className="flex items-center h-20 w-full">
                {currentQuestionIndex > 0 && (
                    <button onClick={handleBackClick} className="absolute top-0 left-4 text-xl font-medium text-black">
                        ᐸ
                    </button>
                )}
                <h1 className="text-xl font-medium h-10 text-black">내 코디 찾기</h1>
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
                <div className="flex justify-start items-center w-full h-20 relative gap-0.5">
                    <p className="text-2xl font-medium text-center text-black">Q&nbsp;</p>
                    <p className="text-xl font-medium text-left text-black">
                        {questions[currentQuestionIndex].question}
                    </p>
                </div>
                {currentQuestionIndex === 0 ? (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <div
                                key={index}
                                className={`relative w-36 h-36 border border-black-400 rounded-lg flex items-center justify-center cursor-pointer ${
                                    selectedOptions[currentQuestionIndex] === option ? 'bg-gray-300' : ''
                                }`}
                                onClick={() => handleOptionClick(option)}
                            >
                                <Image src={getOptionImage(option)} alt={option} layout="fill" objectFit="cover" className="rounded-lg" />
                            </div>
                        ))}
                    </div>
                ) : (
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
                )}
            </div>
            {showResultButton && (
                <button onClick={handleShowResultClick} className="w-72 h-[46px] bg-[#d9d9d9] text-white rounded-lg mt-4">
                    결과 확인
                </button>
            )}
        </div>
    );
};

export default QuestionPage;

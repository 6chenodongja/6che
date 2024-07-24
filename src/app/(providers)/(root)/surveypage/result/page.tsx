'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const ResultPage: React.FC = () => {
    const [likes, setLikes] = useState(Array(4).fill(false));

    const handleLikeClick = (index: number) => {
        const newLikes = [...likes];
        newLikes[index] = !newLikes[index];
        setLikes(newLikes);
    };

    return (
        <div className="w-80 mx-auto flex flex-col items-center justify-start h-screen bg-white p-4 relative gap-4 mt-20">
            <h1 className="text-xl font-medium text-left text-black w-full">내 코디 찾기</h1>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
                {Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="w-[140px] h-[190px] bg-gray-200 rounded-lg flex items-center justify-center relative"
                        >
                            <span className="w-18 h-19 flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                                이미지
                            </span>
                            <button
                                className="absolute bottom-2 right-2 text-xl"
                                onClick={() => handleLikeClick(index)}
                            >
                                {likes[index] ? '❤️' : '🤍'}
                            </button>
                        </div>
                    ))}
            </div>
            <h2 className="h-20 text-lg font-medium text-center text-black w-full">결과</h2>
            <h3 className="h- text-sm text-left text-black">더 많은 코디를 보고싶다면</h3>
            <Link href="/list">
                <button className="w-72 h-[46px] rounded-lg bg-[#d9d9d9]">게시글 보러가기</button>
            </Link>
        </div>
    );
};

export default ResultPage;

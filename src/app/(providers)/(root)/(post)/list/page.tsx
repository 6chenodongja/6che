'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function PostList() {
    const [liked, setLiked] = useState([false, false]);

    const handleLike = (index: number) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);
    };

    return (
        <div className="max-w-sm mx-auto h-[500px] m-10">
            <div>
                <div className="text-[30px]">코디</div>
                <p>날씨에 맞는 스타일링</p>
            </div>
            <div className="mt-20 flex justify-between">
                <Link href={'/detail'} className="border border-black p-2 rounded-lg">
                    코디 등록 +
                </Link>
                <select className="mr-2">
                    <option value="latest">최신 순</option>
                    <option>날짜 순</option>
                </select>
                <select>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
            </div>
            <div className="grid grid-cols-2 border-black border mt-4 gap-4">
                {[0, 1].map((index) => (
                    <div key={index}>
                        <div className="relative">
                            <Image
                                src="https://image.msscdn.net/thumbnails/display/images/usersnap/2023/06/30/3575ff1c3df54af79d891388df58743e.jpg?w=780"
                                alt="alt"
                                width={200}
                                height={100}
                            />
                            <div className="absolute top-0 left-0 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg">
                                ☀️ 맑음
                            </div>
                            <div
                                className={`absolute bottom-0 right-0 bg-white bg-opacity-50 p-1 m-1 text-sm rounded-lg cursor-pointer ${
                                    liked[index] ? 'text-red-500' : ''
                                }`}
                                onClick={() => handleLike(index)}
                            >
                                {liked[index] ? '❤️' : '🤍'}
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="font-bold">닉네임</div>
                            <div className="text-sm">
                                <div>이 옷 너무 안좋아요! 환불해주세요!</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;

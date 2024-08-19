'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function MyNotStyleHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt[60px] min-w-[320px] max-w-[768px] md:min-w-[768px] md:max-w-[1920px]">
      <div className="block md:hidden my-style-page-header px-[4px] py-[16px] w-[288px] mx-auto mt-[16px] rounded-lg shadow-md bg-white relative">
        <header className="relative myPage-Liked-style flex px-2 items-center self-stretch pt-1 w-full justify-between font-bold">
          <Link href={'/postLike'}>내 코디</Link>
          <svg
            onClick={toggleDropdown}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            style={{
              cursor: 'pointer',
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.85198 8.51849C5.20996 8.1605 5.79036 8.1605 6.14834 8.51849L11.0002 13.3703L15.852 8.51849C16.21 8.1605 16.7904 8.1605 17.1483 8.51849C17.5063 8.87647 17.5063 9.45687 17.1483 9.81485L11.6483 15.3148C11.2904 15.6728 10.71 15.6728 10.352 15.3148L4.85198 9.81485C4.494 9.45687 4.494 8.87647 4.85198 8.51849Z"
              fill="#4D4D4D"
            />
          </svg>
        </header>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute overflow-hidden left-0 bg-white shadow-lg rounded-b-lg w-full"
          >
            <div className="myPage-style flex px-3 py-4 items-center self-stretch gap-2">
              <Link href={'/myStyle'}>좋아요한 코디</Link>
            </div>
          </motion.div>
        )}
      </div>
      <div className="hidden md:flex">
        <div className="md:w-[220px] md:h-[170px] md:px-[8xp] md:py-[16px] md:flex md:flex-col ml-[200px] md:rounded-[12px] md:opacity-50 md:gap-[4px] md:mt-[20px] md:justify-around md:shadow-[0_2px_10px_0_rgba(0,0,0,0.05)] md:bg-[#FFF]">
          <Link href={'/mypage'}>
            <p className="flex px-[16px] items-center font-KR text-[14px] font-normal leading-[18.2px] -tracking-[0.28]">
              마이페이지
            </p>
          </Link>
          <Link href={'/postLike'}>
            <p className="flex px-[16px] items-center font-semibold">
              좋아요한 코디
            </p>
          </Link>
          <p className="flex px-[16px] items-center text-[16px] flex-row justify-between text-[#298CFF] font-KR font-bold">
            내 코디
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.51849 4.85149C8.87647 4.49351 9.45687 4.49351 9.81485 4.85149L15.3148 10.3515C15.6728 10.7095 15.6728 11.2899 15.3148 11.6479L9.81485 17.1479C9.45687 17.5058 8.87647 17.5058 8.51849 17.1479C8.1605 16.7899 8.1605 16.2095 8.51849 15.8515L13.3703 10.9997L8.51849 6.14786C8.1605 5.78988 8.1605 5.20947 8.51849 4.85149Z"
                fill="#298CFF"
                fill-opacity="0.8"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyNotStyleHeader;

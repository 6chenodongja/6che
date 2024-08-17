'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function MyLikeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="block md:hidden my-style-page-header px-[4px] py-[16px] w-[288px] mt-[16px] mx-auto rounded-lg shadow-md bg-white relative">
        <header
          className="flex myPage-Liked-style px-2 items-center self-stretch pt-1 w-full justify-between font-bold"
          style={{
            cursor: 'pointer',
          }}
        >
          <Link href={'/postLike'}>좋아요한 코디</Link>
          <svg
            onClick={toggleDropdown}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.85174 8.51849C5.20972 8.1605 5.79012 8.1605 6.1481 8.51849L10.9999 13.3703L15.8517 8.51849C16.2097 8.1605 16.7901 8.1605 17.1481 8.51849C17.5061 8.87647 17.5061 9.45687 17.1481 9.81485L11.6481 15.3148C11.2901 15.6728 10.7097 15.6728 10.3517 15.3148L4.85174 9.81485C4.49376 9.45687 4.49376 8.87647 4.85174 8.51849Z"
              fill="#121212"
            />
          </svg>
        </header>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden absolute left-0 w-full bg-white shadow-lg rounded-b-lg z-10"
          >
            <button
              className="myPage-style flex px-3 py-4 items-center self-stretch gap-2"
              style={{
                cursor: 'pointer',
              }}
            >
              <Link href={'/myStyle'}>내 코디</Link>
            </button>
          </motion.div>
        )}
      </div>

      {/* 해상도 768이상 디자인 */}
      <div className="hidden md:flex">
        <div
          className="md:w-[220px] md:h-[170px] md:px-[8xp] md:py-[16px] md:flex md:flex-col ml-[150px] md:rounded-[12px] md:opacity-50 md:gap-[4px] md:mt-[20px] md:justify-around"
          style={{
            boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Link href={'/mypage'}>
            <p className="flex px-[16px] items-center self-stretch font-KR text-[14px] font-normal leading-[18.2px] -tracking-[0.28]">
              마이페이지
            </p>
          </Link>
          <p className="flex px-[16px] items-center self-stretch flex-row justify-between">
            좋아요한 코디
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
                fill="#121212"
                fill-opacity="0.8"
              />
            </svg>
          </p>
          <Link href={'/myStyle'}>
            <p className="flex px-[16px] items-center self-stretch text-[16px] font-semibold">
              내 코디
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyLikeHeader;

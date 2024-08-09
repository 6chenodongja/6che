'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function MyStyleHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="my-style-page-header px-[4px] py-[16px] w-[288px] mx-auto mt-[16px] rounded-lg shadow-md bg-white">
        <header className="myPage-Liked-style flex px-2 items-center self-stretch pt-1 w-full justify-between font-bold">
          좋아요한 코디
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
              d="M10.3519 6.68499C10.7098 6.32701 11.2902 6.32701 11.6482 6.68499L17.1482 12.185C17.5062 12.543 17.5062 13.1234 17.1482 13.4814C16.7902 13.8393 16.2098 13.8393 15.8519 13.4814L11 8.62953L6.14822 13.4814C5.79024 13.8393 5.20984 13.8393 4.85186 13.4814C4.49388 13.1234 4.49388 12.543 4.85186 12.185L10.3519 6.68499Z"
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
            className="overflow-hidden absolute left-0 w-full bg-white shadow-lg rounded-b-lg"
          >
            <div className="myPage-style flex px-2 py-4 items-center self-stretch gap-2">
              내 코디
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default MyStyleHeader;

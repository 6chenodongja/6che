'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function MyStyleHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-style-page-header relative px-[4px] py-[16px] w-[288px] mx-auto mt-[-44px] rounded-lg shadow-md bg-white">
      <header
        className="myPage-Liked-style flex px-2 items-center self-stretch pt-1 w-full justify-between font-bold"
        style={{
          cursor: 'pointer',
        }}
      >
        <Link href={'/myStyle'}>내 코디</Link>
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
          className="overflow-hidden absolute left-0  bg-white shadow-lg rounded-b-lg z-10 w-full"
        >
          <button
            className="myPage-style flex px-3 py-4 items-center self-stretch gap-2"
            style={{
              cursor: 'pointer',
            }}
          >
            <Link href={'/postLike'}>좋아요 한 코디</Link>
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default MyStyleHeader;

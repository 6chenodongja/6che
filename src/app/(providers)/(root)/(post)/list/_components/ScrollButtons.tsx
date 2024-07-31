import Image from 'next/image';
import React from 'react';

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-1 right-[580px] flex">
      <button
        className="p-2 rounded-full hover:animate-up bg-white"
        onClick={scrollToTop}
      >
        <Image width={20} height={20} src="/back.png" alt="스크롤 업" />
      </button>
    </div>
  );
};

export default ScrollButtons;

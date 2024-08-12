import React from 'react';

function MyPageHeader() {
  return (
    <div>
      <div className="myPage-header h-[72px] mx-auto mt-[16px] flex flex-col items-start gap-[4px]">
        <header className="myPage-Liked-style flex px-2 items-center self-stretch pt-1 w-full justify-between font-bold">
          좋아요한 스타일
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
              d="M10.3519 6.68499C10.7098 6.32701 11.2902 6.32701 11.6482 6.68499L17.1482 12.185C17.5062 12.543 17.5062 13.1234 17.1482 13.4814C16.7902 13.8393 16.2098 13.8393 15.8519 13.4814L11 8.62953L6.14822 13.4814C5.79024 13.8393 5.20984 13.8393 4.85186 13.4814C4.49388 13.1234 4.49388 12.543 4.85186 12.185L10.3519 6.68499Z"
              fill="#121212"
            />
          </svg>
        </header>
        <div className="myPage-style flex p-2 items-center self-stretch gap-2">
          나의 스타일
        </div>
      </div>
    </div>
  );
}

export default MyPageHeader;

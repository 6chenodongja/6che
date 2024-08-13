'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../../icons/LogoText';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-4 flex flex-col items-start mt-0">
      <nav className="flex flex-col items-start space-y-2 mb-4">
        <LogoText className="w-24 h-8 mb-4" />
        <Link
          href="/"
          className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
        >
          날씨
        </Link>
        <Link
          href="/list"
          className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
        >
          스타일
        </Link>
        <Link
          href="/thermometer-style"
          className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
        >
          기온 별 옷차림
        </Link>
        <Link
          href="/survey"
          className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
        >
          취향 코디
        </Link>
        <Link
          href="/mypage"
          className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
        >
          마이페이지
        </Link>
        <Link
          href="/mypage"
          className="text-[#4d4d4d] text-xs font-normal leading-none font-['Noto Sans KR']"
        >
          좋아요한 게시글
        </Link>
        <Link
          href="/mypage"
          className="text-[#4d4d4d] text-xs font-normal leading-none font-['Noto Sans KR']"
        >
          내가 쓴 게시글
        </Link>
      </nav>
      <hr className="w-full border-t border-[#e6e6e6] mb-4" />{' '}
      <div className="flex flex-col items-start text-gray-500">
        <div
          className="flex items-center mb-2 cursor-pointer"
          onClick={() =>
            window.open(
              'https://github.com/6chenodongja/6che/tree/main',
              '_blank',
            )
          }
        >
          <Image
            src="/images/github.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="text-base font-medium text-[#4d4d4d] leading-tight font-['Noto Sans KR']">
            6체노동자
          </span>
        </div>
        <p className="text-left flex flex-wrap">
          <span className="text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            개발:
          </span>
          <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            주현우
          </span>
          <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            전은겸
          </span>
          <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            김성구
          </span>
          <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            석재영
          </span>
          <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            한소영.
          </span>
          <br />
          <span className="text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            디자인:
          </span>
          <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
            김윤하
          </span>
        </p>
        <p className="text-left mt-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
          © 2024. 김윤하 all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

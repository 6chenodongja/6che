'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../../icons/LogoText';

const Footer = () => {
  const linkStyle = {
    color: 'var(--text, #4D4D4D)',
    fontFamily: '"Noto Sans KR"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '150%',
    letterSpacing: '-0.28px',
  };

  const smallLinkStyle = {
    color: 'var(--text, #4D4D4D)',
    fontFamily: '"Noto Sans KR"',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '130%',
    letterSpacing: '-0.24px',
    opacity: '0.7',
  };

  const lastlinkStyle = {
    color: 'var(--text, #4D4D4D)',
    fontFamily: '"Noto Sans KR"',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '109%',
    letterSpacing: '-0.24px',
    opacity: '0.7',
  };

  return (
    <footer className="w-full bg-white py-4 flex flex-col items-start mt-0 md:flex-row md:items-center md:justify-between md:px-16">
      {/* 로고와 "홈" 사이 간격을 20px로 조정 */}
      <nav className="flex flex-col items-start space-y mb-4 pl-5 md:flex-row md:space-y-0 md:space-x-10">
        <LogoText className="w-24 h-10 mb-[10px] ml-[-7px] mt-10 md:mt-0" />

        {/* 홈부터 마이페이지까지 간격을 10px로 조정 */}
        <Link
          href="/"
          className="mb-[10px] md:mb-0"
          style={{ ...linkStyle, marginLeft: '-5px' }}
        >
          홈
        </Link>
        <Link
          href="/"
          className="mb-[10px] md:mb-0"
          style={{ ...linkStyle, marginLeft: '-5px' }}
        >
          코디
        </Link>
        <Link
          href="/thermometer-style"
          className="mb-[10px] md:mb-0"
          style={{ ...linkStyle, marginLeft: '-5px' }}
        >
          기온 별 옷차림
        </Link>
        <Link
          href="/survey"
          className="mb-[10px] md:mb-0"
          style={{ ...linkStyle, marginLeft: '-5px' }}
        >
          취향 코디
        </Link>
        <Link
          href="/mypage"
          className="mb-[8px] md:mb-0"
          style={{ ...linkStyle, marginLeft: '-5px' }}
        >
          마이페이지
        </Link>

        {/* "마이페이지"와 "좋아요한 코디" 간격을 8px로 조정 */}
        <Link
          href="/mypage"
          className="mb-[5px] md:mb-0"
          style={{ ...smallLinkStyle, marginLeft: '-5px' }}
        >
          좋아요한 코디
        </Link>

        {/* "좋아요한 코디"와 "내 코디" 간격을 6px로 조정 */}
        <Link
          href="/mypage"
          style={{ ...smallLinkStyle, marginLeft: '-5px' }}
        >
          내 코디
        </Link>
      </nav>
      <hr className="w-72 h-[2px] flex-shrink-0 self-stretch mx-auto my-2 border-0 bg-[rgba(230,230,230,0.60)] md:hidden" />

      <div className="flex flex-col items-start text-gray-500 ml-5 md:ml-0 md:flex-row md:items-center md:space-x-10">
        <div
          className="flex items-center mb-2 cursor-pointer md:mb-0"
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
            className="mr-2 ml-[-8px] mt-4 md:mt-0"
          />
          <span
            className="text-base font-normal mt-4 leading-[100%] text-[#4d4d4d] font-['Noto Sans KR'] md:mt-0"
            style={{
              fontSize: '16px',
              letterSpacing: '-0.32px',
              fontWeight: '600',
              marginLeft: '-5px',
            }}
          >
            6체노동자
          </span>
        </div>
        <div className="text-left flex flex-wrap md:flex-row md:space-x-4">
          <div className="flex items-center mb-2 md:mb-0">
            <span
              className="text-xs font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '130%',
                letterSpacing: '-0.24px',
                opacity: '0.7',
                marginLeft: '-5px',
              }}
            >
              개발:
            </span>
            <span
              className="ml-2 text-sm font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{ ...lastlinkStyle, marginLeft: '5px' }}
            >
              주현우
            </span>
            <span
              className="ml-2 text-sm font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{ ...lastlinkStyle, marginLeft: '5px' }}
            >
              전은겸
            </span>
            <span
              className="ml-2 text-sm font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{ ...lastlinkStyle, marginLeft: '5px' }}
            >
              김성구
            </span>
            <span
              className="ml-2 text-sm font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{ ...lastlinkStyle, marginLeft: '5px' }}
            >
              석재영
            </span>
            <span
              className="ml-2 text-sm font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{ ...lastlinkStyle, marginLeft: '5px' }}
            >
              한소영
            </span>
          </div>

          <div className="flex items-center md:ml-10">
            <span
              className="text-xs font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '130%',
                letterSpacing: '-0.24px',
                opacity: '0.7',
                marginLeft: '-5px',
              }}
            >
              디자인:
            </span>
            <span
              className="ml-2 text-sm font-normal text-[#4d4d4d] font-['Noto Sans KR']"
              style={{ ...lastlinkStyle, marginLeft: '4px' }}
            >
              김윤하
            </span>
          </div>
        </div>
        <p
          className="text-left mt-8 mb-20 text-sm font-normal text-[#4d4d4d] font-['Noto Sans KR'] md:mt-0 md:mb-0"
          style={{ ...lastlinkStyle, marginLeft: '-5px' }}
        >
          © 2024. 김윤하 all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

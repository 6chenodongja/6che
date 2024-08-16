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
    <footer className="w-full bg-white py-4 mt-0 md:py-8">
      {/* Container for the content, centered within the footer */}
      <div className="flex flex-col items-start md:items-start md:px-[320px] px-8 md:py-[40px]">
        {/* 첫 번째 섹션: 로고와 네비게이션 */}
        <div className="flex flex-col items-start w-full mb-4 md:flex-row md:items-start md:mb-8">
          <LogoText className="w-24 h-10 mb-[10px] mt-10 md:mt-[-5px] md:mb-1" />

          <nav className="ml-0 md:ml-[40px] pl-0">
            <ul className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-[20px]">
              <li>
                <Link href="/" style={linkStyle}>
                  홈
                </Link>
              </li>
              <li>
                <Link href="/" style={linkStyle}>
                  코디
                </Link>
              </li>
              <li>
                <Link href="/thermometer-style" style={linkStyle}>
                  기온 별 옷차림
                </Link>
              </li>
              <li>
                <Link href="/survey" style={linkStyle}>
                  취향 코디
                </Link>
              </li>
              <li className="flex flex-col items-start">
                <Link href="/mypage" className="mb-[8px]" style={linkStyle}>
                  마이페이지
                </Link>
                <ul className="flex flex-col items-start space-y-[5px]">
                  <li>
                    <Link href="/mypage" style={smallLinkStyle}>
                      좋아요한 코디
                    </Link>
                  </li>
                  <li>
                    <Link href="/mypage" style={smallLinkStyle}>
                      내 코디
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="w-full h-[2px] my-4 bg-[rgba(230,230,230,0.60)] md:my-4" />

        {/* 두 번째 섹션: 6체노동자 정보 */}
        <div className="flex flex-col items-start w-full text-gray-500">
          <div className="flex items-center mb-2 md:mb-0">
            <Image
              src="/images/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="mr-2"
            />
            <span
              className="text-base font-semibold"
              style={{ fontSize: '16px', letterSpacing: '-0.32px' }}
            >
              6체노동자
            </span>
          </div>

          <ul className="text-xs mt-4 flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <li className="flex items-start">
              <span
                className="font-normal opacity-70"
                style={{ letterSpacing: '-0.24px' }}
              >
                개발:
              </span>
              <span className="ml-2" style={lastlinkStyle}>
                주현우
              </span>
              <span className="ml-2" style={lastlinkStyle}>
                전은겸
              </span>
              <span className="ml-2" style={lastlinkStyle}>
                김성구
              </span>
              <span className="ml-2" style={lastlinkStyle}>
                석재영
              </span>
              <span className="ml-2" style={lastlinkStyle}>
                한소영
              </span>
            </li>
            <li className="flex items-start">
              <span
                className="font-normal opacity-70"
                style={{ letterSpacing: '-0.24px' }}
              >
                디자인:
              </span>
              <span className="ml-2" style={lastlinkStyle}>
                김윤하
              </span>
            </li>
          </ul>
        </div>

        <p
          className="text-left mt-5 text-sm font-normal text-[#4d4d4d] md:text-center md:mt-5"
          style={lastlinkStyle}
        >
          © 2024. 김윤하 all rights reserved.
        </p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;

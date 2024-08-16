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
    <footer className="w-full bg-#FFF py-4 mt-0 md:py-8">
      <div className="flex flex-col items-start md:items-start md:py-[40px] md:px-[320px]">
        {/* 첫 번째 섹션: 로고와 네비게이션 */}
        <div className="flex flex-col items-start w-full mb-4 pl-5 md:flex-row md:items-start md:mb-8">
          <LogoText className="w-24 h-10 mb-[10px] ml-[-7px] mt-10 md:mt-[-7.5px] md:mb-1 md:ml-[-25px]" />

          <nav className="ml-0 md:ml-[48px] pl-0">
            <ul className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-[18px]">
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
                    <Link
                      href="/mypage"
                      style={smallLinkStyle}
                      className="mb-[32px]"
                    >
                      내 코디
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="w-full h-[2px] mt-0 mb-[32px] bg-[rgba(230,230,230,0.60)]" />

        {/* 두 번째 섹션: 6체노동자 정보 */}
        <div className="flex flex-col items-start w-full text-gray-500 pl-5 md:pl-0 md:items-start mt-[1px]">
          <div className="flex items-center mb-[8px] md:mb-[8px]">
            <Image
              src="/images/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="mr-[4px] md:mr-2"
            />
            <span
              className="text-base font-semibold"
              style={{ fontSize: '16px', letterSpacing: '-0.32px' }}
            >
              6체노동자
            </span>
          </div>

          <ul className="text-xs mt-[8px] flex flex-col md:flex-row md:space-y-0 md:space-x-2">
            <li className="flex items-start">
              <span
                className="font-normal opacity-70"
                style={{ letterSpacing: '-0.24px' }}
              >
                개발:
              </span>
              <span className="ml-[4px]" style={lastlinkStyle}>
                주현우
              </span>
              <span className="ml-[6px]" style={lastlinkStyle}>
                전은겸
              </span>
              <span className="ml-[6px]" style={lastlinkStyle}>
                김성구
              </span>
              <span className="ml-[6px]" style={lastlinkStyle}>
                석재영
              </span>
              <span className="ml-[6px]" style={lastlinkStyle}>
                한소영
              </span>
            </li>
          </ul>

          <ul className="text-xs mt-[8px] flex flex-col space-y-1">
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
          <p
            className="text-left mt-3 text-sm font-normal text-[#4d4d4d] md:text-center md:mt-3"
            style={{ ...lastlinkStyle, marginTop: '28px' }}
          >
            © 2024. 김윤하 all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../../icons/LogoText';
import { useUserStore } from '@/zustand/store/useUserStore';
import LoginModalProps from '@/components/Modal/LoginModal';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const { user } = useUserStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isDetailPage = pathname?.startsWith('/detail');
  const [isDetailMobile, setIsDetailMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDetailMobile(window.innerWidth <= 768); // DetailPage 768이하에서만 푸터 안보이게 하기
    };

    handleResize(); // 초기 호출
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isDetailPage && isDetailMobile) {
    return <></>;
  }

  const handleMypageClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!user) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleConfirm = () => {
    closeModal();
    router.push('/login'); // 로그인 페이지로 이동
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* 첫 번째 섹션: 로고와 네비게이션 */}
        <div className="develop-div develop2-div">
          <LogoText className="logo" />

          <nav className="menu-div">
            <ul className="menu2-div flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-[18px]">
              <li>
                <Link href="/" className="footer-link footer-text-style">
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="footer-link footer-text-style text-item"
                >
                  코디
                </Link>
              </li>
              <li>
                <Link
                  href="/thermometer-style"
                  className="footer-link footer-text-style text2-item "
                >
                  기온 별 옷차림
                </Link>
              </li>
              <li>
                <Link
                  href="/survey"
                  className="footer-link footer-text-style text3-item"
                >
                  취향 코디
                </Link>
              </li>
              <li className="footer-text-style flex flex-col items-start text4-item">
                <Link
                  href="/mypage"
                  className="footer-link mybtn"
                  onClick={handleMypageClick}
                >
                  마이페이지
                </Link>
                <ul className="flex flex-col items-start space-y-[4px] footer-text-style2 mybtn">
                  <li>
                    <Link
                      href="/postLike"
                      className="footer-link footer-text2 footer-text-style2 mybtn"
                      onClick={handleMypageClick}
                    >
                      좋아요한 코디
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/myStyle"
                      className="footer-link footer-text2 mb-[32px]"
                      onClick={handleMypageClick}
                    >
                      내 코디
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="hr-class" />

        {/* 두 번째 섹션: 6체노동자 정보 */}
        <div className="design-div">
          <div className="footer-gitcontent">
            <Image
              src="/images/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="footer-icon"
            />
            <span className="footer-gitname">6체노동자</span>
          </div>

          <ul className="dev-div">
            <li className="develop-div ">
              <span className="develop ">개발:</span>
              <span className="ml-[4px] footer-text-last">주현우</span>
              <span className="ml-[6px] footer-text-last">전은겸</span>
              <span className="ml-[6px] footer-text-last">김성구</span>
              <span className="ml-[6px] footer-text-last">석재영</span>
              <span className="ml-[6px] footer-text-last">한소영</span>
            </li>
          </ul>

          <ul className="design2-div">
            <li className="flex items-start">
              <span className="design">디자인:</span>
              <span className="design-name">김윤하</span>
            </li>
          </ul>
          <p className="footer-designdiv">
            © 2024. 김윤하 all rights reserved.
          </p>
        </div>
      </div>

      {/* 로그인 모달 추가 */}
      {isModalOpen && (
        <LoginModalProps
          isOpen={isModalOpen}
          onConfirm={handleConfirm} // 로그인 버튼 클릭 시 동작
          onClose={closeModal} // 모달 닫기
        />
      )}
    </footer>
  );
};

export default Footer;

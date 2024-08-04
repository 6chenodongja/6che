import Header from 'app/(providers)/(components)/Header';
import Link from 'next/link';
import React, { useState } from 'react';

function MyPage() {
  //const [nickName, setNickName] = useState('');
  return (
    <div className="container h-[1381px] relative overflow-hidden bg-neutral-50 m-auto">
      <Header />
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[68px] gap-3 drop-shadow-xl">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 pb-1.5">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[108px] relative gap-2">
              {/* 프로필 선택 */}
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_d_4204_2698)">
                  <rect
                    x={4}
                    y={4}
                    width={32}
                    height={32}
                    rx={4}
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <rect
                    x={6}
                    y={6}
                    width={28}
                    height={28}
                    rx={4}
                    fill="white"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M20.5147 20.0002C18.2974 20.0002 16.5 18.7345 16.5 17.1732C16.5 15.6974 18.106 14.4857 20.1546 14.3575C20.5618 12.9182 22.3657 11.8335 24.5294 11.8335C26.993 11.8335 28.9902 13.2398 28.9902 14.9745C28.9902 15.0009 28.9897 15.0272 28.9888 15.0534C30.5286 15.332 31.6666 16.3161 31.6666 17.4873C31.6666 18.8751 30.0689 20.0002 28.098 20.0002H20.5147Z"
                    fill="#B3B3B3"
                  />
                  <g filter="url(#filter1_bd_4204_2698)">
                    <path
                      d="M23.7745 28.1668C26.8445 28.1668 29.3333 26.1779 29.3333 23.7245C29.3333 21.4054 27.1095 19.5013 24.273 19.2998C23.7093 17.0381 21.2116 15.3335 18.2157 15.3335C14.8045 15.3335 12.0392 17.5434 12.0392 20.2694C12.0392 20.3109 12.0398 20.3522 12.0411 20.3934C9.90897 20.8312 8.33331 22.3776 8.33331 24.2181C8.33331 26.3989 10.5456 28.1668 13.2745 28.1668H23.7745Z"
                      fill="#CCCCCC"
                      fill-opacity="0.7"
                      shape-rendering="crispEdges"
                    />
                  </g>
                </g>
              </svg>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#121212]">
                  닉네임
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#121212]">
                  님
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 px-3 py-1.5 rounded-lg bg-[#121212]">
              <Link href={'/profile'} passHref>
                <button className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
                  수정
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
            <Link
              href={'/postLike'}
              className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 py-2.5 rounded-lg"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                좋아요한 게시글
              </p>
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.19526 4.52876C7.45561 4.26841 7.87772 4.26841 8.13807 4.52876L12.1381 8.52876C12.3984 8.78911 12.3984 9.21122 12.1381 9.47157L8.13807 13.4716C7.87772 13.7319 7.45561 13.7319 7.19526 13.4716C6.93491 13.2112 6.93491 12.7891 7.19526 12.5288L10.7239 9.00016L7.19526 5.47157C6.93491 5.21122 6.93491 4.78911 7.19526 4.52876Z"
                  fill="#4D4D4D"
                />
              </svg>
            </Link>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 py-2.5 rounded-lg">
              <Link href={'/myStyle'}>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                  내 스타일
                </p>
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.19526 4.52876C7.45561 4.26841 7.87772 4.26841 8.13807 4.52876L12.1381 8.52876C12.3984 8.78911 12.3984 9.21122 12.1381 9.47157L8.13807 13.4716C7.87772 13.7319 7.45561 13.7319 7.19526 13.4716C6.93491 13.2112 6.93491 12.7891 7.19526 12.5288L10.7239 9.00016L7.19526 5.47157C6.93491 5.21122 6.93491 4.78911 7.19526 4.52876Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* 계정 넣는 곳 */}
        {/* <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative pl-1">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#121212]">
              계정
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-3 rounded-lg bg-neutral-50">
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
                <div className="flex flex-col justify-center items-center h-[22px] absolute left-px top-px">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] absolute left-0 top-0"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.7119 11.2064C19.7119 10.5631 19.6545 9.94401 19.5466 9.3501H10.9999V12.8601H15.8843C15.6736 13.9945 15.0343 14.9564 14.0733 15.5997V17.8766H17.0056C18.7217 16.2965 19.7119 13.9703 19.7119 11.2064Z"
                      fill="#3D82F0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.0002 20.0754C13.4504 20.0754 15.5044 19.2626 17.0058 17.8772L14.0736 15.5994C13.2608 16.1439 12.2212 16.4655 11.0002 16.4655C8.63662 16.4655 6.63609 14.8693 5.92219 12.7246H2.89014V15.076C4.38348 18.0416 7.45284 20.0754 11.0002 20.0754Z"
                      fill="#31A752"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.92196 12.7243C5.74046 12.1797 5.63761 11.5979 5.63761 11C5.63761 10.4021 5.74046 9.82025 5.92196 9.27575V6.92432H2.8899C2.27583 8.14944 1.92493 9.5359 1.92493 11C1.92493 12.4641 2.27583 13.8506 2.8899 15.0757L5.92196 12.7243Z"
                      fill="#F9BA00"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.0002 5.53464C12.3322 5.53464 13.5291 5.99242 14.4688 6.89186L17.0723 4.28935C15.5003 2.82424 13.4464 1.9248 11.0002 1.9248C7.45284 1.9248 4.38348 3.95861 2.89014 6.92513L5.92219 9.27556C6.63609 7.13083 8.63662 5.53464 11.0002 5.53464Z"
                      fill="#E64234"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start flex-grow overflow-hidden">
                    <div className="flex flex-col justify-center items-center flex-grow">
                      <div className="flex flex-col justify-center items-center flex-grow w-0 h-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#4d4d4d]">
                abc123@gmail.com
              </p>
            </div>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 py-2 rounded-lg">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                비밀번호 변경
              </p>
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.19526 4.52876C7.45561 4.26841 7.87772 4.26841 8.13807 4.52876L12.1381 8.52876C12.3984 8.78911 12.3984 9.21122 12.1381 9.47157L8.13807 13.4716C7.87772 13.7319 7.45561 13.7319 7.19526 13.4716C6.93491 13.2112 6.93491 12.7891 7.19526 12.5288L10.7239 9.00016L7.19526 5.47157C6.93491 5.21122 6.93491 4.78911 7.19526 4.52876Z"
                  fill="#121212"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 py-2 rounded-lg">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                로그아웃
              </p>
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.19526 4.52876C7.45561 4.26841 7.87772 4.26841 8.13807 4.52876L12.1381 8.52876C12.3984 8.78911 12.3984 9.21122 12.1381 9.47157L8.13807 13.4716C7.87772 13.7319 7.45561 13.7319 7.19526 13.4716C6.93491 13.2112 6.93491 12.7891 7.19526 12.5288L10.7239 9.00016L7.19526 5.47157C6.93491 5.21122 6.93491 4.78911 7.19526 4.52876Z"
                  fill="#121212"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 py-2 rounded-lg">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                회원탈퇴
              </p>
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.19526 4.52876C7.45561 4.26841 7.87772 4.26841 8.13807 4.52876L12.1381 8.52876C12.3984 8.78911 12.3984 9.21122 12.1381 9.47157L8.13807 13.4716C7.87772 13.7319 7.45561 13.7319 7.19526 13.4716C6.93491 13.2112 6.93491 12.7891 7.19526 12.5288L10.7239 9.00016L7.19526 5.47157C6.93491 5.21122 6.93491 4.78911 7.19526 4.52876Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </div>
        </div> */}
        {/* 라이트/다크 넣는 곳 */}
        {/* <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative pl-0.5">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#121212]">
              시스템 모드
            </p>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] overflow-hidden gap-0.5 p-1 rounded-md bg-white/70 backdrop-blur-[10px]">
            <div
              className="flex justify-center items-center self-stretch flex-grow relative overflow-hidden gap-0.5 rounded-md bg-white"
              style={{ boxShadow: '0px 2px 5px 0 rgba(0,0,0,0.12)' }}
            >
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_f_4204_5520)">
                  <circle
                    cx={14}
                    cy={14}
                    r={7}
                    fill="#FFC329"
                    fill-opacity="0.8"
                  />
                </g>
                <circle
                  cx={14}
                  cy={14}
                  r={7}
                  fill="#FFC329"
                  fill-opacity="0.8"
                />
                <defs>
                  <filter
                    id="filter0_f_4204_5520"
                    x={4}
                    y={4}
                    width={20}
                    height={20}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.5"
                      result="effect1_foregroundBlur_4204_5520"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-2">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#121212]">
                  라이트
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center self-stretch flex-grow relative opacity-80 overflow-hidden gap-1 rounded-md">
              <svg
                width={29}
                height={28}
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_f_4204_5528)">
                  <circle cx="19.45" cy="12.05" r="4.05" fill="#FFC329" />
                </g>
                <circle
                  cx="19.45"
                  cy="12.05"
                  r="4.05"
                  fill="#FFC329"
                  fill-opacity="0.8"
                />
                <circle
                  cx="19.45"
                  cy="12.05"
                  r="4.25"
                  stroke="white"
                  stroke-opacity="0.3"
                  stroke-width="0.4"
                />
                <g filter="url(#filter1_bd_4204_5528)">
                  <path
                    d="M18.7353 20.5999C21.3668 20.5999 23.5 18.7867 23.5 16.5499C23.5 14.4356 21.5939 12.6996 19.1626 12.516C18.6794 10.454 16.5385 8.8999 13.9706 8.8999C11.0467 8.8999 8.67647 10.9146 8.67647 13.3999C8.67647 13.4377 8.67702 13.4754 8.67811 13.513C6.85057 13.9121 5.5 15.3219 5.5 16.9999C5.5 18.9881 7.39621 20.5999 9.73529 20.5999H18.7353Z"
                    fill="#CCCCCC"
                    fill-opacity="0.7"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_4204_5528"
                    x="14.4"
                    y={7}
                    width="10.1"
                    height="10.1001"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="0.5"
                      result="effect1_foregroundBlur_4204_5528"
                    />
                  </filter>
                  <filter
                    id="filter1_bd_4204_5528"
                    x="3.5"
                    y="6.8999"
                    width={22}
                    height="15.7002"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4204_5528"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.5" dy="-0.5" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_4204_5528"
                      result="effect2_dropShadow_4204_5528"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_4204_5528"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-2">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#121212]">
                  다크
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MyPage;

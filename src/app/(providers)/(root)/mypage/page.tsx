import React from 'react';

function MyPage() {
  return (
    <div className="w-80 h-[1381px] relative overflow-hidden bg-neutral-50 m-auto">
      <div className="flex flex-col justify-start items-start w-80 absolute left-0 top-[786px] gap-3 px-6 pt-[60px] pb-20 bg-white">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-9 pt-5">
          <svg
            width={99}
            height={28}
            viewBox="0 0 99 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[94px] h-5"
            preserveAspectRatio="xMidYMid meet"
          >
            <g filter="url(#filter0_bd_4204_3631)">
              <path
                d="M94.0003 6.95033V22.2654C93.5356 22.6607 92.9143 22.9918 92.1364 23.2587C91.3585 23.5256 90.4139 23.659 89.3026 23.659C88.1913 23.659 87.2467 23.4168 86.4688 22.9325C85.5899 22.4087 85.1505 21.6674 85.1505 20.7087V5.39362C85.6152 4.99827 86.2365 4.66716 87.0144 4.4003C87.7923 4.13343 88.7318 4 89.833 4C90.9342 4 91.8888 4.23721 92.6971 4.71164C93.5659 5.25525 94.0003 6.00148 94.0003 6.95033Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter1_bd_4204_3631)">
              <path
                d="M78.2898 13.2958C78.2898 12.3074 78.2443 11.6303 78.1534 11.2646C78.0625 10.8891 77.8958 10.7013 77.6533 10.7013C77.5018 10.7013 77.3654 10.7507 77.2441 10.8495C77.2644 11.0274 77.2947 11.2646 77.3351 11.5612C77.3755 11.8577 77.3957 12.4902 77.3957 13.4589V14.4225C77.3957 15.0946 77.3805 15.5839 77.3502 15.8903C77.3199 16.1967 77.2947 16.4586 77.2745 16.6761C77.2644 16.7947 77.2543 16.9133 77.2441 17.0319C77.3654 17.1307 77.5018 17.1801 77.6533 17.1801C77.8958 17.1801 78.0625 16.9973 78.1534 16.6316C78.2443 16.256 78.2898 15.574 78.2898 14.5856V13.2958ZM72.6374 23.5404C71.516 23.5404 70.6472 23.2488 70.0309 22.6657C69.4248 22.0825 69.1217 21.2029 69.1217 20.0267V6.68347C69.1217 5.9323 69.8895 5.29973 71.4251 4.78577C72.9708 4.26192 74.6933 4 76.5925 4C79.9365 4 82.548 4.79071 84.4271 6.37213C86.4476 8.07215 87.4578 10.6074 87.4578 13.9778C87.4578 17.0121 86.4779 19.3645 84.518 21.0348C82.5682 22.7052 79.886 23.5404 76.4713 23.5404H72.6374Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter2_b_4204_3631)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.1082 23.6016C63.1747 23.6016 65.0951 22.9894 66.6903 21.9403C67.5717 22.3761 68.5681 22.6216 69.6232 22.6216C73.2194 22.6216 76.1347 19.7694 76.1347 16.251C76.1347 12.9589 73.5822 10.25 70.3077 9.91528C68.7701 6.43525 65.2298 4 61.1082 4C56.5427 4 52.6906 6.98796 51.4833 11.0741C48.9459 11.7629 47.0834 14.0392 47.0834 16.7411C47.0834 19.9888 49.7745 22.6216 53.094 22.6216C54.0239 22.6216 54.9045 22.415 55.6905 22.0461C57.2524 23.0305 59.1121 23.6016 61.1082 23.6016Z"
                fill="#5EB0FF"
                fill-opacity="0.8"
              />
            </g>
            <g filter="url(#filter3_bd_4204_3631)">
              <path
                d="M44.0316 17.699C44.1326 17.699 44.2235 17.6743 44.3043 17.6249V16.2758C44.9913 15.8211 45.9511 15.4505 47.1836 15.1638C48.4262 14.8772 49.6334 14.7339 50.8053 14.7339C51.3408 15.2676 51.7853 16.0682 52.1389 17.1357C52.5026 18.1932 52.6945 19.152 52.7147 20.0119C52.5127 20.4072 52.1692 20.8322 51.6843 21.2869C51.2094 21.7415 50.6336 22.1616 49.9567 22.5471C48.2797 23.5157 46.3552 24 44.1831 24C41.0715 24 38.6217 23.1154 36.8335 21.3462C34.9847 19.5572 34.0604 17.0813 34.0604 13.9185C34.0604 10.7457 35.0706 8.255 37.0911 6.44626C37.9802 5.63578 39.0157 5.02792 40.1977 4.62268C41.3797 4.20756 42.6223 4 43.9255 4C46.4713 4 48.5575 4.60292 50.184 5.80875C51.8105 7.01458 52.6238 8.5021 52.6238 10.2713C52.6238 11.6056 52.2045 12.594 51.366 13.2365C50.5275 13.869 49.391 14.1853 47.9564 14.1853C47.1684 14.1853 46.3754 13.9975 45.5773 13.6219C44.7792 13.2365 44.3043 12.8757 44.1528 12.5397C44.1528 11.7292 44.168 11.0917 44.1983 10.6271C44.1781 10.6172 44.1427 10.6123 44.0922 10.6123H43.9861C43.8346 10.6123 43.7133 10.6568 43.6224 10.7457C43.5416 10.8248 43.4658 10.9978 43.3951 11.2646C43.3345 11.5315 43.3042 12.258 43.3042 13.444C43.3042 16.2807 43.5467 17.699 44.0316 17.699Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter4_bd_4204_3631)">
              <path
                d="M18.0319 20.6642V5.80875C18.0319 5.29479 18.4512 4.86978 19.2897 4.53373C20.1383 4.18779 21.1334 4.01483 22.275 4.01483C22.9216 4.01483 23.5277 4.0939 24.0934 4.25204C24.6693 4.4003 25.1088 4.59303 25.4118 4.83024C25.826 5.34421 26.2049 5.86805 26.5484 6.40178C26.8919 6.93551 27.6647 8.18087 28.8669 10.1379C28.978 10.1379 29.0791 10.1033 29.17 10.0341C29.2609 9.96491 29.3064 9.86113 29.3064 9.72276C29.3064 9.5745 29.1801 9.29281 28.9275 8.87769L27.2909 6.12009V5.30467C27.8061 4.88955 28.4325 4.56832 29.17 4.34099C29.9075 4.11366 30.6702 4 31.4582 4C32.7412 4 33.7767 4.22733 34.5647 4.68199C35.4841 5.2256 35.9437 6.07561 35.9437 7.23202V21.2721C35.9437 22.1221 35.5295 22.7398 34.7011 23.1253C33.9939 23.4712 33.0494 23.6442 31.8674 23.6442C31.2107 23.6442 30.5692 23.575 29.9428 23.4366C29.3266 23.2982 28.8416 23.1203 28.4881 22.9029C27.7708 22.0035 27.0585 20.9953 26.3514 19.8784L24.8057 17.358C24.5127 17.3976 24.3662 17.5508 24.3662 17.8176C24.3662 17.9857 24.5127 18.3069 24.8057 18.7813L26.6999 21.7761V22.5619C25.528 23.3032 24.2046 23.6738 22.7296 23.6738C21.2647 23.6738 20.113 23.4119 19.2745 22.8881C18.4461 22.3642 18.0319 21.6229 18.0319 20.6642Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter5_b_4204_3631)">
              <path
                d="M20.0353 13.8008C20.0353 19.2137 15.5503 23.6016 10.0177 23.6016C4.48506 23.6016 0 19.2137 0 13.8008C0 8.38798 4.48506 4 10.0177 4C15.5503 4 20.0353 8.38798 20.0353 13.8008Z"
                fill="#FFD65E"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_4204_3631"
                x="82.1505"
                y={0}
                width="16.8499"
                height="27.6592"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4204_3631"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx={1} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4204_3631"
                  result="effect2_dropShadow_4204_3631"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4204_3631"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_bd_4204_3631"
                x="66.1217"
                y={0}
                width="26.3361"
                height="27.5405"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4204_3631"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx={1} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4204_3631"
                  result="effect2_dropShadow_4204_3631"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4204_3631"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_4204_3631"
                x="46.0834"
                y={3}
                width="31.0512"
                height="21.6016"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4204_3631"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4204_3631"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_bd_4204_3631"
                x="31.0604"
                y={0}
                width="26.6544"
                height={28}
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4204_3631"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx={1} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4204_3631"
                  result="effect2_dropShadow_4204_3631"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4204_3631"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_bd_4204_3631"
                x="15.0319"
                y={0}
                width="25.9118"
                height="27.6738"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4204_3631"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx={1} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4204_3631"
                  result="effect2_dropShadow_4204_3631"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4204_3631"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_b_4204_3631"
                x={-1}
                y={3}
                width="22.0353"
                height="21.6016"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4204_3631"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4204_3631"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-2.5 py-4">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-sm font-medium text-left text-[#4d4d4d]">
            날씨
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow w-40 text-sm font-medium text-left text-[#4d4d4d]">
              스타일
            </p>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-sm font-medium text-left text-[#4d4d4d]">
            기온 별 옷차림
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-sm font-medium text-left text-[#4d4d4d]">
            취향 코디
          </p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-1.5">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pb-0.5">
              <p className="flex-grow w-40 text-sm font-medium text-left text-[#4d4d4d]">
                마이페이지
              </p>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-xs text-left text-[#4d4d4d]">
              좋아요한 게시글{' '}
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-xs text-left text-[#4d4d4d]">
              내가 쓴 게시글
            </p>
            <p className="flex-grow-0 flex-shrink-0 w-40 opacity-70 text-xs text-left text-[#4d4d4d]">
              설정
            </p>
          </div>
        </div>
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-0.5 bg-[#e6e6e6]/60" />
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 py-4">
          <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M12 3C10.8181 3 9.64778 3.23857 8.55585 3.70209C7.46392 4.16561 6.47177 4.84501 5.63604 5.70148C3.94821 7.43121 3 9.77723 3 12.2234C3 16.3002 5.583 19.759 9.156 20.9857C9.606 21.0595 9.75 20.7736 9.75 20.5245V18.9658C7.257 19.5192 6.726 17.7298 6.726 17.7298C6.312 16.6599 5.727 16.374 5.727 16.374C4.908 15.8021 5.79 15.8206 5.79 15.8206C6.69 15.8851 7.167 16.7706 7.167 16.7706C7.95 18.1726 9.273 17.7575 9.786 17.5361C9.867 16.9366 10.101 16.5308 10.353 16.3002C8.355 16.0696 6.258 15.2764 6.258 11.7623C6.258 10.7385 6.6 9.91758 7.185 9.26272C7.095 9.03213 6.78 8.07289 7.275 6.82773C7.275 6.82773 8.031 6.5787 9.75 7.76852C10.461 7.5656 11.235 7.46415 12 7.46415C12.765 7.46415 13.539 7.5656 14.25 7.76852C15.969 6.5787 16.725 6.82773 16.725 6.82773C17.22 8.07289 16.905 9.03213 16.815 9.26272C17.4 9.91758 17.742 10.7385 17.742 11.7623C17.742 15.2856 15.636 16.0604 13.629 16.291C13.953 16.5769 14.25 17.1395 14.25 17.9973V20.5245C14.25 20.7736 14.394 21.0687 14.853 20.9857C18.426 19.7498 21 16.3002 21 12.2234C21 11.0122 20.7672 9.81282 20.3149 8.69378C19.8626 7.57474 19.1997 6.55796 18.364 5.70148C17.5282 4.84501 16.5361 4.16561 15.4442 3.70209C14.3522 3.23857 13.1819 3 12 3Z"
                fill="#4D4D4D"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#4d4d4d]">
              6체노동자
            </p>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 opacity-70 text-xs text-left text-[#4d4d4d]">
                개발 :
              </p>
              <p className="flex-grow-0 flex-shrink-0 opacity-70 text-sm text-left text-[#4d4d4d]">
                주현우
              </p>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-px h-4 rounded-[3px] bg-[#ccc]/70" />
            <p className="flex-grow-0 flex-shrink-0 opacity-70 text-sm text-left text-[#4d4d4d]">
              전은겸
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-px h-4 rounded-[3px] bg-[#ccc]/70" />
            <p className="flex-grow-0 flex-shrink-0 opacity-70 text-sm text-left text-[#4d4d4d]">
              김성구
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-px h-4 rounded-[3px] bg-[#ccc]/70" />
            <p className="flex-grow-0 flex-shrink-0 opacity-70 text-sm text-left text-[#4d4d4d]">
              석재영
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-px h-4 rounded-[3px] bg-[#ccc]/70" />
            <p className="flex-grow-0 flex-shrink-0 opacity-70 text-sm text-left text-[#4d4d4d]">
              한소영
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
            <p className="flex-grow-0 flex-shrink-0 opacity-70 text-xs text-left text-[#4d4d4d]">
              디자인 :
            </p>
            <p className="flex-grow-0 flex-shrink-0 opacity-70 text-sm text-left text-[#4d4d4d]">
              김윤하
            </p>
          </div>
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#808080]">
          © 2024. 김윤하 all rights reserved.
        </p>
      </div>
      <div
        className="flex flex-col justify-start items-start w-72 absolute left-4 top-[68px] gap-3"
        style={{ filter: 'drop-shadow(0px 2px 10px rgba(0,0,0,0.05))' }}
      >
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 pb-1.5">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[108px] relative gap-2">
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
                <defs>
                  <filter
                    id="filter0_d_4204_2698"
                    x={0}
                    y={0}
                    width={40}
                    height={40}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4204_2698"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4204_2698"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_bd_4204_2698"
                    x="6.33331"
                    y="13.3335"
                    width={25}
                    height="16.8335"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4204_2698"
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
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_4204_2698"
                      result="effect2_dropShadow_4204_2698"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_4204_2698"
                      result="shape"
                    />
                  </filter>
                </defs>
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
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
                수정
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 py-2.5 rounded-lg">
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
            </div>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 py-2.5 rounded-lg">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
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
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
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
        </div>
      </div>
      <div
        className="w-80 h-14 absolute left-0 top-0 overflow-hidden bg-white/80 backdrop-blur-[10px]"
        style={{ boxShadow: '0px 2px 5px 0 rgba(0,0,0,0.05)' }}
      >
        <svg
          width={90}
          height={30}
          viewBox="0 0 90 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[90px] h-[30px] absolute left-[115px] top-[13px]"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_bd_4204_4950)">
            <path
              d="M84.9057 9.12512V21.8877C84.5111 22.2171 83.9836 22.493 83.3231 22.7154C82.6626 22.9378 81.8606 23.049 80.9171 23.049C79.9735 23.049 79.1715 22.8472 78.511 22.4436C77.7648 22.0071 77.3917 21.3893 77.3917 20.5904V7.82786C77.7862 7.4984 78.3138 7.22247 78.9742 7.00008C79.6347 6.7777 80.4324 6.6665 81.3674 6.6665C82.3024 6.6665 83.1129 6.86418 83.7992 7.25954C84.5368 7.71255 84.9057 8.33441 84.9057 9.12512Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter1_bd_4204_4950)">
            <path
              d="M71.567 14.413C71.567 13.5893 71.5284 13.0251 71.4512 12.7204C71.374 12.4074 71.2324 12.2509 71.0266 12.2509C70.8979 12.2509 70.7821 12.2921 70.6792 12.3744C70.6963 12.5227 70.7221 12.7204 70.7564 12.9675C70.7907 13.2146 70.8079 13.7417 70.8079 14.5489V15.352C70.8079 15.912 70.795 16.3197 70.7693 16.5751C70.7435 16.8304 70.7221 17.0487 70.7049 17.2299C70.6963 17.3287 70.6878 17.4276 70.6792 17.5264C70.7821 17.6088 70.8979 17.65 71.0266 17.65C71.2324 17.65 71.374 17.4976 71.4512 17.1928C71.5284 16.8798 71.567 16.3115 71.567 15.4879V14.413ZM66.7678 22.9502C65.8157 22.9502 65.078 22.7072 64.5548 22.2212C64.0401 21.7353 63.7828 21.0022 63.7828 20.0221V8.90273C63.7828 8.27675 64.4347 7.74961 65.7385 7.32131C67.0509 6.88477 68.5133 6.6665 70.1259 6.6665C72.9651 6.6665 75.1824 7.32543 76.7779 8.64328C78.4934 10.06 79.3512 12.1726 79.3512 14.9813C79.3512 17.5099 78.5191 19.4702 76.8551 20.8622C75.1996 22.2542 72.9222 22.9502 70.023 22.9502H66.7678Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter2_b_4204_4950)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.9783 23.0012C58.7329 23.0012 60.3635 22.491 61.7178 21.6167C62.4662 21.9799 63.3122 22.1845 64.208 22.1845C67.2614 22.1845 69.7366 19.8077 69.7366 16.8757C69.7366 14.1322 67.5694 11.8748 64.7892 11.5959C63.4837 8.69588 60.4778 6.6665 56.9783 6.6665C53.102 6.6665 49.8313 9.15647 48.8062 12.5616C46.6518 13.1356 45.0705 15.0325 45.0705 17.2841C45.0705 19.9905 47.3553 22.1845 50.1738 22.1845C50.9634 22.1845 51.711 22.0123 52.3783 21.7049C53.7045 22.5252 55.2835 23.0012 56.9783 23.0012Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M61.9361 21.1669L61.683 21.0441L61.4466 21.1967C60.1716 22.0197 58.635 22.5012 56.9783 22.5012C55.3781 22.5012 53.8899 22.052 52.6414 21.2797L52.413 21.1385L52.1692 21.2508C51.5666 21.5284 50.8902 21.6845 50.1738 21.6845C47.6122 21.6845 45.5705 19.6954 45.5705 17.2841C45.5705 15.2769 46.9818 13.5652 48.935 13.0447L49.2046 12.9729L49.285 12.7057C50.2448 9.51725 53.3169 7.1665 56.9783 7.1665C60.2828 7.1665 63.1092 9.08212 64.3333 11.8012L64.4519 12.0646L64.7393 12.0934C67.2831 12.3486 69.2366 14.4078 69.2366 16.8757C69.2366 19.5126 67.0046 21.6845 64.208 21.6845C63.3889 21.6845 62.6174 21.4975 61.9361 21.1669Z"
              stroke="url(#paint0_linear_4204_4950)"
              stroke-opacity="0.7"
            />
          </g>
          <g filter="url(#filter3_bd_4204_4950)">
            <path
              d="M42.4794 18.0824C42.5652 18.0824 42.6424 18.0618 42.711 18.0206V16.8963C43.2943 16.5174 44.1092 16.2086 45.1557 15.9697C46.2107 15.7308 47.2357 15.6114 48.2307 15.6114C48.6853 16.0562 49.0628 16.7233 49.363 17.6129C49.6718 18.4942 49.8348 19.2931 49.8519 20.0097C49.6804 20.3392 49.3887 20.6934 48.977 21.0722C48.5738 21.4511 48.0849 21.8012 47.5102 22.1224C46.0863 22.9296 44.4523 23.3332 42.6081 23.3332C39.9662 23.3332 37.8861 22.596 36.3679 21.1217C34.7982 19.6308 34.0133 17.5676 34.0133 14.9319C34.0133 12.288 34.8711 10.2123 36.5866 8.70505C37.3414 8.02965 38.2206 7.52311 39.2242 7.18541C40.2278 6.83947 41.2829 6.6665 42.3894 6.6665C44.5509 6.6665 46.3222 7.16893 47.7032 8.17379C49.0842 9.17865 49.7747 10.4183 49.7747 11.8926C49.7747 13.0045 49.4187 13.8282 48.7068 14.3636C47.9948 14.8907 47.0299 15.1543 45.8118 15.1543C45.1428 15.1543 44.4694 14.9978 43.7918 14.6848C43.1142 14.3636 42.711 14.0629 42.5824 13.7829C42.5824 13.1075 42.5952 12.5762 42.621 12.1891C42.6038 12.1809 42.5738 12.1768 42.5309 12.1768H42.4408C42.3122 12.1768 42.2092 12.2138 42.132 12.288C42.0634 12.3538 41.9991 12.498 41.939 12.7204C41.8876 12.9428 41.8618 13.5481 41.8618 14.5365C41.8618 16.9004 42.0677 18.0824 42.4794 18.0824Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter4_bd_4204_4950)">
            <path
              d="M20.4044 20.5533V8.17379C20.4044 7.74549 20.7603 7.39132 21.4723 7.11128C22.1928 6.823 23.0377 6.67886 24.007 6.67886C24.5559 6.67886 25.0706 6.74475 25.5509 6.87654C26.0399 7.00008 26.413 7.1607 26.6703 7.35837C27.022 7.78668 27.3437 8.22321 27.6353 8.66799C27.9269 9.11276 28.5831 10.1506 29.6039 11.7814C29.6982 11.7814 29.784 11.7526 29.8612 11.6949C29.9384 11.6373 29.977 11.5508 29.977 11.4355C29.977 11.3119 29.8698 11.0772 29.6553 10.7312L28.2658 8.43324V7.75373C28.7032 7.40779 29.235 7.14011 29.8612 6.95067C30.4874 6.76122 31.135 6.6665 31.804 6.6665C32.8934 6.6665 33.7726 6.85594 34.4417 7.23483C35.2222 7.68784 35.6125 8.39618 35.6125 9.35986V21.0599C35.6125 21.7682 35.2608 22.283 34.5575 22.6042C33.957 22.8925 33.155 23.0367 32.1514 23.0367C31.5939 23.0367 31.0492 22.979 30.5174 22.8637C29.9942 22.7484 29.5824 22.6001 29.2822 22.4189C28.6732 21.6694 28.0685 20.8293 27.468 19.8985L26.1557 17.7982C25.9069 17.8312 25.7825 17.9588 25.7825 18.1812C25.7825 18.3212 25.9069 18.5889 26.1557 18.9843L27.764 21.4799V22.1348C26.769 22.7525 25.6453 23.0614 24.393 23.0614C23.1492 23.0614 22.1714 22.8431 21.4594 22.4066C20.756 21.97 20.4044 21.3523 20.4044 20.5533Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter5_b_4204_4950)">
            <path
              d="M22.1055 14.8339C22.1055 19.3446 18.2974 23.0012 13.5999 23.0012C8.90243 23.0012 5.09436 19.3446 5.09436 14.8339C5.09436 10.3232 8.90243 6.6665 13.5999 6.6665C18.2974 6.6665 22.1055 10.3232 22.1055 14.8339Z"
              fill="#FFD65E"
              fill-opacity="0.8"
            />
            <path
              d="M21.6055 14.8339C21.6055 19.0495 18.0406 22.5012 13.5999 22.5012C9.15926 22.5012 5.59436 19.0495 5.59436 14.8339C5.59436 10.6182 9.15926 7.1665 13.5999 7.1665C18.0406 7.1665 21.6055 10.6182 21.6055 14.8339Z"
              stroke="url(#paint1_linear_4204_4950)"
              stroke-opacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_4204_4950"
              x="74.3917"
              y="2.6665"
              width="15.514"
              height="24.3823"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4204_4950"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx={1} />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_4204_4950"
                result="effect2_dropShadow_4204_4950"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4204_4950"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_bd_4204_4950"
              x="60.7828"
              y="2.6665"
              width="23.5684"
              height="24.2837"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4204_4950"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx={1} />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_4204_4950"
                result="effect2_dropShadow_4204_4950"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4204_4950"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_b_4204_4950"
              x="44.0705"
              y="5.6665"
              width="26.6661"
              height="18.3345"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4204_4950"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4204_4950"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_bd_4204_4950"
              x="31.0133"
              y="2.6665"
              width="23.8386"
              height="24.6665"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4204_4950"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx={1} />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_4204_4950"
                result="effect2_dropShadow_4204_4950"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4204_4950"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_bd_4204_4950"
              x="17.4044"
              y="2.6665"
              width="23.2081"
              height="24.395"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4204_4950"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx={1} />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_4204_4950"
                result="effect2_dropShadow_4204_4950"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4204_4950"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_b_4204_4950"
              x="4.09436"
              y="5.6665"
              width="19.0111"
              height="18.3345"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4204_4950"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4204_4950"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4204_4950"
              x1="67.5"
              y1="10.4165"
              x2="53.9363"
              y2="23.3696"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset={1} stop-color="white" stop-opacity={0} />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4204_4950"
              x1="19.5283"
              y1="9.1665"
              x2="7.94695"
              y2="26.8663"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset={1} stop-color="white" stop-opacity={0} />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex justify-center items-center absolute left-2.5 top-2 overflow-hidden gap-2 p-2 rounded-[1000px]">
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 7.00016C3.5 6.35583 4.02233 5.8335 4.66667 5.8335H23.3333C23.9777 5.8335 24.5 6.35583 24.5 7.00016C24.5 7.6445 23.9777 8.16683 23.3333 8.16683H4.66667C4.02233 8.16683 3.5 7.6445 3.5 7.00016ZM3.5 14.0002C3.5 13.3558 4.02233 12.8335 4.66667 12.8335H23.3333C23.9777 12.8335 24.5 13.3558 24.5 14.0002C24.5 14.6445 23.9777 15.1668 23.3333 15.1668H4.66667C4.02233 15.1668 3.5 14.6445 3.5 14.0002ZM4.66667 19.8335C4.02233 19.8335 3.5 20.3558 3.5 21.0002C3.5 21.6445 4.02233 22.1668 4.66667 22.1668H23.3333C23.9777 22.1668 24.5 21.6445 24.5 21.0002C24.5 20.3558 23.9777 19.8335 23.3333 19.8335H4.66667Z"
              fill="#121212"
            />
          </svg>
        </div>
        <div className="flex justify-end items-center w-20 absolute left-[230px] top-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-2"
            style={{
              filter:
                'drop-shadow(0px 2px 10px rgba(18,18,18,0.15)) drop-shadow(0px 0px 4px rgba(0,0,0,0.08))',
            }}
          >
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                width={34}
                height={34}
                rx={4}
                fill="white"
                fill-opacity="0.6"
              />
              <g filter="url(#filter0_f_4204_4968)">
                <circle
                  cx={17}
                  cy="17.0002"
                  r="9.91667"
                  fill="#FFC329"
                  fill-opacity="0.8"
                />
              </g>
              <circle
                cx={17}
                cy="17.0002"
                r="9.91667"
                fill="#FFC329"
                fill-opacity="0.8"
              />
              <defs>
                <filter
                  id="filter0_f_4204_4968"
                  x="4.08331"
                  y="4.0835"
                  width="25.8333"
                  height="25.8335"
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
                    result="effect1_foregroundBlur_4204_4968"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;

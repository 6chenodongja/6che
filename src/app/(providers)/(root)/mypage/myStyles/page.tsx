import exp from 'constants';

function myStyles() {
  return (
    <div className="w-80 h-[1508px] relative overflow-hidden bg-neutral-50">
      <div className="flex flex-col justify-start items-start w-80 absolute left-0 top-[913px] gap-3 px-6 pt-[60px] pb-20 bg-white">
        {/* <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-9 pt-5">
          <svg
            width={99}
            height={28}
            viewBox="0 0 99 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[94px] h-5"
            preserveAspectRatio="xMidYMid meet"
          >
            <g filter="url(#filter0_bd_4268_583)">
              <path
                d="M94.0002 6.95033V22.2654C93.5355 22.6607 92.9142 22.9918 92.1363 23.2587C91.3584 23.5256 90.4138 23.659 89.3025 23.659C88.1913 23.659 87.2467 23.4168 86.4688 22.9325C85.5899 22.4087 85.1504 21.6674 85.1504 20.7087V5.39362C85.6151 4.99827 86.2364 4.66716 87.0143 4.4003C87.7922 4.13343 88.7317 4 89.8329 4C90.9341 4 91.8888 4.23721 92.697 4.71164C93.5658 5.25525 94.0002 6.00148 94.0002 6.95033Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter1_bd_4268_583)">
              <path
                d="M78.2896 13.2958C78.2896 12.3074 78.2442 11.6303 78.1533 11.2646C78.0623 10.8891 77.8956 10.7013 77.6532 10.7013C77.5016 10.7013 77.3653 10.7507 77.244 10.8495C77.2642 11.0274 77.2945 11.2646 77.335 11.5612C77.3754 11.8577 77.3956 12.4902 77.3956 13.4589V14.4225C77.3956 15.0946 77.3804 15.5839 77.3501 15.8903C77.3198 16.1967 77.2945 16.4586 77.2743 16.6761C77.2642 16.7947 77.2541 16.9133 77.244 17.0319C77.3653 17.1307 77.5016 17.1801 77.6532 17.1801C77.8956 17.1801 78.0623 16.9973 78.1533 16.6316C78.2442 16.256 78.2896 15.574 78.2896 14.5856V13.2958ZM72.6373 23.5404C71.5159 23.5404 70.6471 23.2488 70.0308 22.6657C69.4247 22.0825 69.1216 21.2029 69.1216 20.0267V6.68347C69.1216 5.9323 69.8894 5.29973 71.425 4.78577C72.9707 4.26192 74.6931 4 76.5924 4C79.9364 4 82.5479 4.79071 84.4269 6.37213C86.4474 8.07215 87.4577 10.6074 87.4577 13.9778C87.4577 17.0121 86.4778 19.3645 84.5179 21.0348C82.5681 22.7052 79.8858 23.5404 76.4712 23.5404H72.6373Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter2_b_4268_583)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.1082 23.6016C63.1748 23.6016 65.0952 22.9894 66.6903 21.9403C67.5717 22.3761 68.5682 22.6216 69.6232 22.6216C73.2194 22.6216 76.1347 19.7694 76.1347 16.251C76.1347 12.9589 73.5822 10.25 70.3078 9.91528C68.7701 6.43525 65.2299 4 61.1082 4C56.5428 4 52.6906 6.98796 51.4834 11.0741C48.946 11.7629 47.0835 14.0392 47.0835 16.7411C47.0835 19.9888 49.7745 22.6216 53.0941 22.6216C54.024 22.6216 54.9046 22.415 55.6905 22.0461C57.2524 23.0305 59.1122 23.6016 61.1082 23.6016Z"
                fill="#5EB0FF"
                fill-opacity="0.8"
              />
            </g>
            <g filter="url(#filter3_bd_4268_583)">
              <path
                d="M44.0315 17.699C44.1325 17.699 44.2235 17.6743 44.3043 17.6249V16.2758C44.9913 15.8211 45.951 15.4505 47.1835 15.1638C48.4261 14.8772 49.6334 14.7339 50.8053 14.7339C51.3407 15.2676 51.7852 16.0682 52.1388 17.1357C52.5025 18.1932 52.6944 19.152 52.7147 20.0119C52.5126 20.4072 52.1691 20.8322 51.6842 21.2869C51.2094 21.7415 50.6335 22.1616 49.9567 22.5471C48.2796 23.5157 46.3551 24 44.1831 24C41.0715 24 38.6216 23.1154 36.8335 21.3462C34.9847 19.5572 34.0603 17.0813 34.0603 13.9185C34.0603 10.7457 35.0706 8.255 37.0911 6.44626C37.9801 5.63578 39.0156 5.02792 40.1976 4.62268C41.3796 4.20756 42.6222 4 43.9254 4C46.4713 4 48.5575 4.60292 50.184 5.80875C51.8105 7.01458 52.6237 8.5021 52.6237 10.2713C52.6237 11.6056 52.2045 12.594 51.366 13.2365C50.5275 13.869 49.3909 14.1853 47.9564 14.1853C47.1684 14.1853 46.3753 13.9975 45.5772 13.6219C44.7791 13.2365 44.3043 12.8757 44.1527 12.5397C44.1527 11.7292 44.1679 11.0917 44.1982 10.6271C44.178 10.6172 44.1426 10.6123 44.0921 10.6123H43.9861C43.8345 10.6123 43.7133 10.6568 43.6224 10.7457C43.5415 10.8248 43.4658 10.9978 43.3951 11.2646C43.3344 11.5315 43.3041 12.258 43.3041 13.444C43.3041 16.2807 43.5466 17.699 44.0315 17.699Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter4_bd_4268_583)">
              <path
                d="M18.032 20.6642V5.80875C18.032 5.29479 18.4512 4.86978 19.2897 4.53373C20.1384 4.18779 21.1335 4.01483 22.2751 4.01483C22.9216 4.01483 23.5278 4.0939 24.0935 4.25204C24.6694 4.4003 25.1088 4.59303 25.4119 4.83024C25.8261 5.34421 26.2049 5.86805 26.5484 6.40178C26.8919 6.93551 27.6648 8.18087 28.867 10.1379C28.9781 10.1379 29.0791 10.1033 29.17 10.0341C29.261 9.96491 29.3064 9.86113 29.3064 9.72276C29.3064 9.5745 29.1801 9.29281 28.9276 8.87769L27.291 6.12009V5.30467C27.8062 4.88955 28.4326 4.56832 29.17 4.34099C29.9075 4.11366 30.6703 4 31.4583 4C32.7413 4 33.7768 4.22733 34.5648 4.68199C35.4841 5.2256 35.9438 6.07561 35.9438 7.23202V21.2721C35.9438 22.1221 35.5296 22.7398 34.7012 23.1253C33.994 23.4712 33.0494 23.6442 31.8674 23.6442C31.2108 23.6442 30.5692 23.575 29.9429 23.4366C29.3266 23.2982 28.8417 23.1203 28.4881 22.9029C27.7708 22.0035 27.0586 20.9953 26.3514 19.8784L24.8057 17.358C24.5128 17.3976 24.3663 17.5508 24.3663 17.8176C24.3663 17.9857 24.5128 18.3069 24.8057 18.7813L26.7 21.7761V22.5619C25.5281 23.3032 24.2046 23.6738 22.7297 23.6738C21.2648 23.6738 20.1131 23.4119 19.2746 22.8881C18.4462 22.3642 18.032 21.6229 18.032 20.6642Z"
                fill="#121212"
              />
            </g>
            <g filter="url(#filter5_b_4268_583)">
              <path
                d="M20.0353 13.8008C20.0353 19.2137 15.5503 23.6016 10.0177 23.6016C4.48506 23.6016 0 19.2137 0 13.8008C0 8.38798 4.48506 4 10.0177 4C15.5503 4 20.0353 8.38798 20.0353 13.8008Z"
                fill="#FFD65E"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_4268_583"
                x="82.1504"
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
                  result="effect1_backgroundBlur_4268_583"
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
                  in2="effect1_backgroundBlur_4268_583"
                  result="effect2_dropShadow_4268_583"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4268_583"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_bd_4268_583"
                x="66.1216"
                y={0}
                width="26.3362"
                height="27.5405"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4268_583"
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
                  in2="effect1_backgroundBlur_4268_583"
                  result="effect2_dropShadow_4268_583"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4268_583"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_4268_583"
                x="46.0835"
                y={3}
                width="31.0513"
                height="21.6016"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4268_583"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4268_583"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_bd_4268_583"
                x="31.0603"
                y={0}
                width="26.6543"
                height={28}
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4268_583"
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
                  in2="effect1_backgroundBlur_4268_583"
                  result="effect2_dropShadow_4268_583"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4268_583"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_bd_4268_583"
                x="15.032"
                y={0}
                width="25.9119"
                height="27.6738"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4268_583"
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
                  in2="effect1_backgroundBlur_4268_583"
                  result="effect2_dropShadow_4268_583"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4268_583"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_b_4268_583"
                x={-1}
                y={3}
                width="22.0354"
                height="21.6016"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4268_583"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4268_583"
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
        </div> */}
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
      <div className="flex justify-start items-start w-72 absolute left-4 top-[178px] gap-2">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-[140px] h-[200px] relative overflow-hidden rounded-lg bg-[url('image.png')] bg-cover bg-no-repeat bg-center">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 absolute left-[104px] top-[166px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_b_4268_5348)">
                <g filter="url(#filter1_bd_4268_5348)">
                  <path
                    d="M11.0449 21.8071C10.8637 21.7073 10.6191 21.5688 10.3316 21.3964C9.76866 21.0588 8.98349 20.5567 8.16667 19.9269C7.38362 19.3231 6.37347 18.4517 5.50743 17.3388C4.70629 16.3092 3.5 14.3977 3.5 11.8307C3.5 8.51853 6.11167 5.8335 9.33333 5.8335C11.2415 5.8335 12.9357 6.77547 14 8.23179C15.0643 6.77547 16.7585 5.8335 18.6667 5.8335C21.8883 5.8335 24.5 8.51853 24.5 11.8307C24.5 14.3977 23.2937 16.3092 22.4926 17.3388C21.6265 18.4517 20.6164 19.3231 19.8333 19.9269C19.0165 20.5567 18.2313 21.0588 17.6684 21.3964C17.3809 21.5688 17.1363 21.7073 16.9551 21.8071L15.8357 22.3853C14.6842 22.9801 13.3158 22.9801 12.1643 22.3853L11.0449 21.8071Z"
                    fill="white"
                    fill-opacity="0.5"
                    shape-rendering="crispEdges"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_4268_5348"
                  x={-20}
                  y={-20}
                  width={68}
                  height={68}
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_5348"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4268_5348"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_bd_4268_5348"
                  x="-0.5"
                  y="1.8335"
                  width={29}
                  height="24.998"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_5348"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_4268_5348"
                    result="effect2_dropShadow_4268_5348"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_4268_5348"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex justify-start items-center absolute left-2.5 top-2.5 gap-0.5 px-1 py-px rounded bg-white/50 border border-white/60">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_b_4268_5351)">
                  <rect width={18} height={18} rx={2} fill="white" />
                  <rect
                    x={1}
                    y={1}
                    width={16}
                    height={16}
                    rx={4}
                    fill="white"
                    fill-opacity="0.6"
                  />
                  <g filter="url(#filter1_f_4268_5351)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#filter2_d_4268_5351)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter3_bd_4268_5351)">
                    <path
                      d="M11.8235 13.2668C13.5778 13.2668 15 12.058 15 10.5668C15 9.15724 13.7293 7.99996 12.1084 7.87751C11.7863 6.50283 10.359 5.4668 8.64706 5.4668C6.69782 5.4668 5.11765 6.80994 5.11765 8.4668C5.11765 8.492 5.11801 8.51712 5.11874 8.54217C3.90038 8.80827 3 9.74816 3 10.8668C3 12.1923 4.26414 13.2668 5.82353 13.2668H11.8235Z"
                      fill="#CCCCCC"
                      fill-opacity="0.7"
                      shape-rendering="crispEdges"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_b_4268_5351"
                    x={-20}
                    y={-20}
                    width={58}
                    height={58}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_5351"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_4268_5351"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_f_4268_5351"
                    x="9.19995"
                    y="2.6665"
                    width="6.80005"
                    height="6.7998"
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
                      result="effect1_foregroundBlur_4268_5351"
                    />
                  </filter>
                  <filter
                    id="filter2_d_4268_5351"
                    x="9.69995"
                    y="3.1665"
                    width="6.80005"
                    height="6.7998"
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
                    <feOffset dx="0.5" dy="0.5" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4268_5351"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4268_5351"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd_4268_5351"
                    x={1}
                    y="3.4668"
                    width={16}
                    height="11.7998"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_5351"
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
                      in2="effect1_backgroundBlur_4268_5351"
                      result="effect2_dropShadow_4268_5351"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_4268_5351"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                26°
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[33px] h-[33px] absolute left-[103px] top-1 overflow-hidden gap-1.5 px-1 py-2 rounded">
            <div
              className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
              style={{ filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.15))' }}
            >
              <div className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] rounded bg-[#ccc]/70" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-[140px] h-[200px] relative overflow-hidden rounded-lg bg-[url('image.png')] bg-cover bg-no-repeat bg-center">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 absolute left-[104px] top-[166px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_b_4268_526)">
                <g filter="url(#filter1_bd_4268_526)">
                  <path
                    d="M11.0449 21.8071C10.8637 21.7073 10.6191 21.5688 10.3316 21.3964C9.76866 21.0588 8.98349 20.5567 8.16667 19.9269C7.38362 19.3231 6.37347 18.4517 5.50743 17.3388C4.70629 16.3092 3.5 14.3977 3.5 11.8307C3.5 8.51853 6.11167 5.8335 9.33333 5.8335C11.2415 5.8335 12.9357 6.77547 14 8.23179C15.0643 6.77547 16.7585 5.8335 18.6667 5.8335C21.8883 5.8335 24.5 8.51853 24.5 11.8307C24.5 14.3977 23.2937 16.3092 22.4926 17.3388C21.6265 18.4517 20.6164 19.3231 19.8333 19.9269C19.0165 20.5567 18.2313 21.0588 17.6684 21.3964C17.3809 21.5688 17.1363 21.7073 16.9551 21.8071L15.8357 22.3853C14.6842 22.9801 13.3158 22.9801 12.1643 22.3853L11.0449 21.8071Z"
                    fill="white"
                    fill-opacity="0.5"
                    shape-rendering="crispEdges"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_4268_526"
                  x={-20}
                  y={-20}
                  width={68}
                  height={68}
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_526"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4268_526"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_bd_4268_526"
                  x="-0.5"
                  y="1.8335"
                  width={29}
                  height="24.998"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_526"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_4268_526"
                    result="effect2_dropShadow_4268_526"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_4268_526"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex justify-start items-center absolute left-2.5 top-2.5 gap-0.5 px-1 py-px rounded bg-white/50 border border-white/60">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_b_4268_529)">
                  <rect width={18} height={18} rx={2} fill="white" />
                  <rect
                    x={1}
                    y={1}
                    width={16}
                    height={16}
                    rx={4}
                    fill="white"
                    fill-opacity="0.6"
                  />
                  <g filter="url(#filter1_f_4268_529)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#filter2_d_4268_529)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter3_bd_4268_529)">
                    <path
                      d="M11.8235 13.2668C13.5778 13.2668 15 12.058 15 10.5668C15 9.15724 13.7293 7.99996 12.1084 7.87751C11.7863 6.50283 10.359 5.4668 8.64706 5.4668C6.69782 5.4668 5.11765 6.80994 5.11765 8.4668C5.11765 8.492 5.11801 8.51712 5.11874 8.54217C3.90038 8.80827 3 9.74816 3 10.8668C3 12.1923 4.26414 13.2668 5.82353 13.2668H11.8235Z"
                      fill="#CCCCCC"
                      fill-opacity="0.7"
                      shape-rendering="crispEdges"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_b_4268_529"
                    x={-20}
                    y={-20}
                    width={58}
                    height={58}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_529"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_4268_529"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_f_4268_529"
                    x="9.19995"
                    y="2.6665"
                    width="6.80005"
                    height="6.7998"
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
                      result="effect1_foregroundBlur_4268_529"
                    />
                  </filter>
                  <filter
                    id="filter2_d_4268_529"
                    x="9.69995"
                    y="3.1665"
                    width="6.80005"
                    height="6.7998"
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
                    <feOffset dx="0.5" dy="0.5" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4268_529"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4268_529"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd_4268_529"
                    x={1}
                    y="3.4668"
                    width={16}
                    height="11.7998"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_529"
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
                      in2="effect1_backgroundBlur_4268_529"
                      result="effect2_dropShadow_4268_529"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_4268_529"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                26°
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[33px] h-[33px] absolute left-[103px] top-1 overflow-hidden gap-1.5 px-1 py-2 rounded">
            <div
              className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
              style={{ filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.15))' }}
            >
              <div className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] rounded bg-[#ccc]/70" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-[140px] h-[200px] relative overflow-hidden rounded-lg bg-[url('image.png')] bg-cover bg-no-repeat bg-center">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 absolute left-[104px] top-[166px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_b_4268_4955)">
                <g filter="url(#filter1_bd_4268_4955)">
                  <path
                    d="M11.0449 21.8071C10.8637 21.7073 10.6191 21.5688 10.3316 21.3964C9.76866 21.0588 8.98349 20.5567 8.16667 19.9269C7.38362 19.3231 6.37347 18.4517 5.50743 17.3388C4.70629 16.3092 3.5 14.3977 3.5 11.8307C3.5 8.51853 6.11167 5.8335 9.33333 5.8335C11.2415 5.8335 12.9357 6.77547 14 8.23179C15.0643 6.77547 16.7585 5.8335 18.6667 5.8335C21.8883 5.8335 24.5 8.51853 24.5 11.8307C24.5 14.3977 23.2937 16.3092 22.4926 17.3388C21.6265 18.4517 20.6164 19.3231 19.8333 19.9269C19.0165 20.5567 18.2313 21.0588 17.6684 21.3964C17.3809 21.5688 17.1363 21.7073 16.9551 21.8071L15.8357 22.3853C14.6842 22.9801 13.3158 22.9801 12.1643 22.3853L11.0449 21.8071Z"
                    fill="white"
                    fill-opacity="0.5"
                    shape-rendering="crispEdges"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_4268_4955"
                  x={-20}
                  y={-20}
                  width={68}
                  height={68}
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_4955"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4268_4955"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_bd_4268_4955"
                  x="-0.5"
                  y="1.8335"
                  width={29}
                  height="24.998"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_4955"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_4268_4955"
                    result="effect2_dropShadow_4268_4955"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_4268_4955"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex justify-start items-center absolute left-2.5 top-2.5 gap-0.5 px-1 py-px rounded bg-white/50 border border-white/60">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_b_4268_4958)">
                  <rect width={18} height={18} rx={2} fill="white" />
                  <rect
                    x={1}
                    y={1}
                    width={16}
                    height={16}
                    rx={4}
                    fill="white"
                    fill-opacity="0.6"
                  />
                  <g filter="url(#filter1_f_4268_4958)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#filter2_d_4268_4958)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter3_bd_4268_4958)">
                    <path
                      d="M11.8235 13.2668C13.5778 13.2668 15 12.058 15 10.5668C15 9.15724 13.7293 7.99996 12.1084 7.87751C11.7863 6.50283 10.359 5.4668 8.64706 5.4668C6.69782 5.4668 5.11765 6.80994 5.11765 8.4668C5.11765 8.492 5.11801 8.51712 5.11874 8.54217C3.90038 8.80827 3 9.74816 3 10.8668C3 12.1923 4.26414 13.2668 5.82353 13.2668H11.8235Z"
                      fill="#CCCCCC"
                      fill-opacity="0.7"
                      shape-rendering="crispEdges"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_b_4268_4958"
                    x={-20}
                    y={-20}
                    width={58}
                    height={58}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_4958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_4268_4958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_f_4268_4958"
                    x="9.19995"
                    y="2.6665"
                    width="6.80005"
                    height="6.7998"
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
                      result="effect1_foregroundBlur_4268_4958"
                    />
                  </filter>
                  <filter
                    id="filter2_d_4268_4958"
                    x="9.69995"
                    y="3.1665"
                    width="6.80005"
                    height="6.7998"
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
                    <feOffset dx="0.5" dy="0.5" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4268_4958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4268_4958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd_4268_4958"
                    x={1}
                    y="3.4668"
                    width={16}
                    height="11.7998"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_4958"
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
                      in2="effect1_backgroundBlur_4268_4958"
                      result="effect2_dropShadow_4268_4958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_4268_4958"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                26°
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[33px] h-[33px] absolute left-[103px] top-1 overflow-hidden gap-1.5 px-1 py-2 rounded">
            <div
              className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
              style={{ filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.15))' }}
            >
              <div className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] rounded bg-[#ccc]/70" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-[140px] h-[200px] relative overflow-hidden rounded-lg bg-[url('image.png')] bg-cover bg-no-repeat bg-center">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 absolute left-[104px] top-[166px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_b_4268_4286)">
                <g filter="url(#filter1_bd_4268_4286)">
                  <path
                    d="M11.0449 21.8071C10.8637 21.7073 10.6191 21.5688 10.3316 21.3964C9.76866 21.0588 8.98349 20.5567 8.16667 19.9269C7.38362 19.3231 6.37347 18.4517 5.50743 17.3388C4.70629 16.3092 3.5 14.3977 3.5 11.8307C3.5 8.51853 6.11167 5.8335 9.33333 5.8335C11.2415 5.8335 12.9357 6.77547 14 8.23179C15.0643 6.77547 16.7585 5.8335 18.6667 5.8335C21.8883 5.8335 24.5 8.51853 24.5 11.8307C24.5 14.3977 23.2937 16.3092 22.4926 17.3388C21.6265 18.4517 20.6164 19.3231 19.8333 19.9269C19.0165 20.5567 18.2313 21.0588 17.6684 21.3964C17.3809 21.5688 17.1363 21.7073 16.9551 21.8071L15.8357 22.3853C14.6842 22.9801 13.3158 22.9801 12.1643 22.3853L11.0449 21.8071Z"
                    fill="white"
                    fill-opacity="0.5"
                    shape-rendering="crispEdges"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_4268_4286"
                  x={-20}
                  y={-20}
                  width={68}
                  height={68}
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_4286"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4268_4286"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_bd_4268_4286"
                  x="-0.5"
                  y="1.8335"
                  width={29}
                  height="24.998"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_4286"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_4268_4286"
                    result="effect2_dropShadow_4268_4286"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_4268_4286"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex justify-start items-center absolute left-2.5 top-2.5 gap-0.5 px-1 py-px rounded bg-white/50 border border-white/60">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_b_4268_4289)">
                  <rect width={18} height={18} rx={2} fill="white" />
                  <rect
                    x={1}
                    y={1}
                    width={16}
                    height={16}
                    rx={4}
                    fill="white"
                    fill-opacity="0.6"
                  />
                  <g filter="url(#filter1_f_4268_4289)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#filter2_d_4268_4289)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter3_bd_4268_4289)">
                    <path
                      d="M11.8235 13.2668C13.5778 13.2668 15 12.058 15 10.5668C15 9.15724 13.7293 7.99996 12.1084 7.87751C11.7863 6.50283 10.359 5.4668 8.64706 5.4668C6.69782 5.4668 5.11765 6.80994 5.11765 8.4668C5.11765 8.492 5.11801 8.51712 5.11874 8.54217C3.90038 8.80827 3 9.74816 3 10.8668C3 12.1923 4.26414 13.2668 5.82353 13.2668H11.8235Z"
                      fill="#CCCCCC"
                      fill-opacity="0.7"
                      shape-rendering="crispEdges"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_b_4268_4289"
                    x={-20}
                    y={-20}
                    width={58}
                    height={58}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_4289"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_4268_4289"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_f_4268_4289"
                    x="9.19995"
                    y="2.6665"
                    width="6.80005"
                    height="6.7998"
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
                      result="effect1_foregroundBlur_4268_4289"
                    />
                  </filter>
                  <filter
                    id="filter2_d_4268_4289"
                    x="9.69995"
                    y="3.1665"
                    width="6.80005"
                    height="6.7998"
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
                    <feOffset dx="0.5" dy="0.5" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4268_4289"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4268_4289"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd_4268_4289"
                    x={1}
                    y="3.4668"
                    width={16}
                    height="11.7998"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_4289"
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
                      in2="effect1_backgroundBlur_4268_4289"
                      result="effect2_dropShadow_4268_4289"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_4268_4289"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                26°
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[33px] h-[33px] absolute left-[103px] top-1 overflow-hidden gap-1.5 px-1 py-2 rounded">
            <div
              className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
              style={{ filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.15))' }}
            >
              <div className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] rounded bg-[#ccc]/70" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-[140px] h-[200px] relative overflow-hidden rounded-lg bg-[url('image.png')] bg-cover bg-no-repeat bg-center">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 absolute left-[104px] top-[166px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_b_4268_3372)">
                <g filter="url(#filter1_bd_4268_3372)">
                  <path
                    d="M11.0449 21.8071C10.8637 21.7073 10.6191 21.5688 10.3316 21.3964C9.76866 21.0588 8.98349 20.5567 8.16667 19.9269C7.38362 19.3231 6.37347 18.4517 5.50743 17.3388C4.70629 16.3092 3.5 14.3977 3.5 11.8307C3.5 8.51853 6.11167 5.8335 9.33333 5.8335C11.2415 5.8335 12.9357 6.77547 14 8.23179C15.0643 6.77547 16.7585 5.8335 18.6667 5.8335C21.8883 5.8335 24.5 8.51853 24.5 11.8307C24.5 14.3977 23.2937 16.3092 22.4926 17.3388C21.6265 18.4517 20.6164 19.3231 19.8333 19.9269C19.0165 20.5567 18.2313 21.0588 17.6684 21.3964C17.3809 21.5688 17.1363 21.7073 16.9551 21.8071L15.8357 22.3853C14.6842 22.9801 13.3158 22.9801 12.1643 22.3853L11.0449 21.8071Z"
                    fill="white"
                    fill-opacity="0.5"
                    shape-rendering="crispEdges"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_4268_3372"
                  x={-20}
                  y={-20}
                  width={68}
                  height={68}
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_3372"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4268_3372"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_bd_4268_3372"
                  x="-0.5"
                  y="1.8335"
                  width={29}
                  height="24.998"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4268_3372"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_4268_3372"
                    result="effect2_dropShadow_4268_3372"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_4268_3372"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex justify-start items-center absolute left-2.5 top-2.5 gap-0.5 px-1 py-px rounded bg-white/50 border border-white/60">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_b_4268_3375)">
                  <rect width={18} height={18} rx={2} fill="white" />
                  <rect
                    x={1}
                    y={1}
                    width={16}
                    height={16}
                    rx={4}
                    fill="white"
                    fill-opacity="0.6"
                  />
                  <g filter="url(#filter1_f_4268_3375)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#filter2_d_4268_3375)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9841 6.95559C15.0627 6.77235 14.8324 6.62716 14.6523 6.71288C14.3889 6.83832 14.0941 6.90853 13.7828 6.90853C12.6644 6.90853 11.7577 6.00183 11.7577 4.88335C11.7577 4.57223 11.8279 4.27749 11.9532 4.0141C12.0389 3.83406 11.8937 3.60373 11.7105 3.68235C10.8222 4.0635 10.2 4.94608 10.2 5.97398C10.2 7.35056 11.3159 8.4665 12.6924 8.4665C13.7204 8.4665 14.6031 7.84412 14.9841 6.95559Z"
                      fill="#FFC329"
                      fill-opacity="0.8"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter3_bd_4268_3375)">
                    <path
                      d="M11.8235 13.2668C13.5778 13.2668 15 12.058 15 10.5668C15 9.15724 13.7293 7.99996 12.1084 7.87751C11.7863 6.50283 10.359 5.4668 8.64706 5.4668C6.69782 5.4668 5.11765 6.80994 5.11765 8.4668C5.11765 8.492 5.11801 8.51712 5.11874 8.54217C3.90038 8.80827 3 9.74816 3 10.8668C3 12.1923 4.26414 13.2668 5.82353 13.2668H11.8235Z"
                      fill="#CCCCCC"
                      fill-opacity="0.7"
                      shape-rendering="crispEdges"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_b_4268_3375"
                    x={-20}
                    y={-20}
                    width={58}
                    height={58}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_3375"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_4268_3375"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_f_4268_3375"
                    x="9.19995"
                    y="2.6665"
                    width="6.80005"
                    height="6.7998"
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
                      result="effect1_foregroundBlur_4268_3375"
                    />
                  </filter>
                  <filter
                    id="filter2_d_4268_3375"
                    x="9.69995"
                    y="3.1665"
                    width="6.80005"
                    height="6.7998"
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
                    <feOffset dx="0.5" dy="0.5" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4268_3375"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4268_3375"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd_4268_3375"
                    x={1}
                    y="3.4668"
                    width={16}
                    height="11.7998"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4268_3375"
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
                      in2="effect1_backgroundBlur_4268_3375"
                      result="effect2_dropShadow_4268_3375"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_4268_3375"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                26°
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[33px] h-[33px] absolute left-[103px] top-1 overflow-hidden gap-1.5 px-1 py-2 rounded">
            <div
              className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
              style={{ filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.15))' }}
            >
              <div className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] rounded bg-[#ccc]/70" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-[50px] absolute left-0 top-32">
        <div className="flex justify-start items-center h-[33px] absolute left-3.5 top-2 overflow-hidden gap-1.5 px-1 py-2 rounded">
          <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative">
            <div className="w-[18px] h-[18px] absolute left-[-1px] top-[-1px] rounded bg-[#ccc]/70" />
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#808080]">
            모두 선택
          </p>
        </div>
        <div className="flex justify-start items-center absolute left-[244px] top-[9px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
            >
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5833 4.66667C16.5833 4.16041 16.1729 3.75 15.6667 3.75C15.1604 3.75 14.75 4.16041 14.75 4.66667V11.0833C14.75 11.5896 15.1604 12 15.6667 12C16.1729 12 16.5833 11.5896 16.5833 11.0833V4.66667ZM9.25 19.3333C9.25 19.8396 8.83959 20.25 8.33333 20.25C7.82707 20.25 7.41667 19.8396 7.41667 19.3333V12.9167C7.41667 12.4104 7.82707 12 8.33333 12C8.83959 12 9.25 12.4104 9.25 12.9167V19.3333ZM15.6667 13.6042C15.0338 13.6042 14.5208 14.1172 14.5208 14.75C14.5208 15.3828 15.0338 15.8958 15.6667 15.8958C16.2995 15.8958 16.8125 15.3828 16.8125 14.75C16.8125 14.1172 16.2995 13.6042 15.6667 13.6042ZM13.1458 14.75C13.1458 13.3578 14.2744 12.2292 15.6667 12.2292C17.0589 12.2292 18.1875 13.3578 18.1875 14.75C18.1875 16.1422 17.0589 17.2708 15.6667 17.2708C14.2744 17.2708 13.1458 16.1422 13.1458 14.75ZM7.1875 9.25C7.1875 9.88283 7.70051 10.3958 8.33333 10.3958C8.96616 10.3958 9.47917 9.88283 9.47917 9.25C9.47917 8.61717 8.96616 8.10417 8.33333 8.10417C7.70051 8.10417 7.1875 8.61717 7.1875 9.25ZM8.33333 11.7708C6.94112 11.7708 5.8125 10.6422 5.8125 9.25C5.8125 7.85778 6.94112 6.72917 8.33333 6.72917C9.72555 6.72917 10.8542 7.85778 10.8542 9.25C10.8542 10.6422 9.72555 11.7708 8.33333 11.7708ZM15.6667 17.5C16.1729 17.5 16.5833 17.9104 16.5833 18.4167V19.3333C16.5833 19.8396 16.1729 20.25 15.6667 20.25C15.1604 20.25 14.75 19.8396 14.75 19.3333V18.4167C14.75 17.9104 15.1604 17.5 15.6667 17.5ZM9.25 5.58333C9.25 6.08959 8.83959 6.5 8.33333 6.5C7.82707 6.5 7.41667 6.08959 7.41667 5.58333V4.66667C7.41667 4.16041 7.82707 3.75 8.33333 3.75C8.83959 3.75 9.25 4.16041 9.25 4.66667V5.58333Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
            >
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.58333 10.1667C5.58333 7.63536 7.63536 5.58333 10.1667 5.58333C12.698 5.58333 14.75 7.63536 14.75 10.1667C14.75 12.698 12.698 14.75 10.1667 14.75C7.63536 14.75 5.58333 12.698 5.58333 10.1667ZM10.1667 3.75C6.62284 3.75 3.75 6.62284 3.75 10.1667C3.75 13.7105 6.62284 16.5833 10.1667 16.5833C13.7105 16.5833 16.5833 13.7105 16.5833 10.1667C16.5833 6.62284 13.7105 3.75 10.1667 3.75ZM16.3148 15.0185C15.9569 14.6605 15.3765 14.6605 15.0185 15.0185C14.6605 15.3765 14.6605 15.9569 15.0185 16.3148L18.6852 19.9815C19.0431 20.3395 19.6235 20.3395 19.9815 19.9815C20.3395 19.6235 20.3395 19.0431 19.9815 18.6852L16.3148 15.0185Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between items-center w-72 absolute left-4 top-[72px] px-4 py-1 rounded-2xl bg-white border-t-0 border-r-0 border-b border-l-0 border-white/60"
        style={{
          boxShadow:
            '0px 0px 2px 0 rgba(0,0,0,0.05), 4px 4px 8px 0 rgba(0,0,0,0.05)',
        }}
      >
        <p className="flex-grow w-[216px] text-base font-medium text-left text-[#4d4d4d]">
          내 스타일
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-10 h-10">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-[1000px]"
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
          >
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.85174 9.51849C6.20972 9.1605 6.79012 9.1605 7.1481 9.51849L11.9999 14.3703L16.8517 9.51849C17.2097 9.1605 17.7901 9.1605 18.1481 9.51849C18.5061 9.87647 18.5061 10.4569 18.1481 10.8148L12.6481 16.3148C12.2901 16.6728 11.7097 16.6728 11.3517 16.3148L5.85174 10.8148C5.49376 10.4569 5.49376 9.87647 5.85174 9.51849Z"
                fill="#4D4D4D"
              />
            </svg>
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
          <g filter="url(#filter0_bd_4268_987)">
            <path
              d="M84.9056 9.12512V21.8877C84.511 22.2171 83.9835 22.493 83.323 22.7154C82.6626 22.9378 81.8605 23.049 80.917 23.049C79.9735 23.049 79.1715 22.8472 78.511 22.4436C77.7647 22.0071 77.3916 21.3893 77.3916 20.5904V7.82786C77.7862 7.4984 78.3137 7.22247 78.9742 7.00008C79.6347 6.7777 80.4324 6.6665 81.3673 6.6665C82.3023 6.6665 83.1129 6.86418 83.7991 7.25954C84.5368 7.71255 84.9056 8.33441 84.9056 9.12512Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter1_bd_4268_987)">
            <path
              d="M71.5669 14.413C71.5669 13.5893 71.5283 13.0251 71.4511 12.7204C71.3739 12.4074 71.2324 12.2509 71.0265 12.2509C70.8979 12.2509 70.7821 12.2921 70.6791 12.3744C70.6963 12.5227 70.722 12.7204 70.7563 12.9675C70.7906 13.2146 70.8078 13.7417 70.8078 14.5489V15.352C70.8078 15.912 70.7949 16.3197 70.7692 16.5751C70.7435 16.8304 70.722 17.0487 70.7049 17.2299C70.6963 17.3287 70.6877 17.4276 70.6791 17.5264C70.7821 17.6088 70.8979 17.65 71.0265 17.65C71.2324 17.65 71.3739 17.4976 71.4511 17.1928C71.5283 16.8798 71.5669 16.3115 71.5669 15.4879V14.413ZM66.7677 22.9502C65.8156 22.9502 65.0779 22.7072 64.5547 22.2212C64.04 21.7353 63.7827 21.0022 63.7827 20.0221V8.90273C63.7827 8.27675 64.4346 7.74961 65.7384 7.32131C67.0508 6.88477 68.5133 6.6665 70.1259 6.6665C72.9651 6.6665 75.1824 7.32543 76.7778 8.64328C78.4934 10.06 79.3511 12.1726 79.3511 14.9813C79.3511 17.5099 78.5191 19.4702 76.855 20.8622C75.1995 22.2542 72.9222 22.9502 70.0229 22.9502H66.7677Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter2_b_4268_987)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.9781 23.0012C58.7327 23.0012 60.3633 22.491 61.7176 21.6167C62.466 21.9799 63.312 22.1845 64.2078 22.1845C67.2612 22.1845 69.7365 19.8077 69.7365 16.8757C69.7365 14.1322 67.5692 11.8748 64.7891 11.5959C63.4835 8.69588 60.4776 6.6665 56.9781 6.6665C53.1018 6.6665 49.8311 9.15647 48.806 12.5616C46.6517 13.1356 45.0703 15.0325 45.0703 17.2841C45.0703 19.9905 47.3552 22.1845 50.1737 22.1845C50.9632 22.1845 51.7109 22.0123 52.3782 21.7049C53.7043 22.5252 55.2833 23.0012 56.9781 23.0012Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M61.9359 21.1669L61.6828 21.0441L61.4464 21.1967C60.1715 22.0197 58.6348 22.5012 56.9781 22.5012C55.3779 22.5012 53.8897 22.052 52.6412 21.2797L52.4128 21.1385L52.169 21.2508C51.5664 21.5284 50.89 21.6845 50.1737 21.6845C47.612 21.6845 45.5703 19.6954 45.5703 17.2841C45.5703 15.2769 46.9816 13.5652 48.9348 13.0447L49.2044 12.9729L49.2848 12.7057C50.2446 9.51725 53.3167 7.1665 56.9781 7.1665C60.2826 7.1665 63.109 9.08212 64.3331 11.8012L64.4517 12.0646L64.7391 12.0934C67.2829 12.3486 69.2365 14.4078 69.2365 16.8757C69.2365 19.5126 67.0044 21.6845 64.2078 21.6845C63.3887 21.6845 62.6172 21.4975 61.9359 21.1669Z"
              stroke="url(#paint0_linear_4268_987)"
              stroke-opacity="0.7"
            />
          </g>
          <g filter="url(#filter3_bd_4268_987)">
            <path
              d="M42.4793 18.0824C42.5651 18.0824 42.6423 18.0618 42.7109 18.0206V16.8963C43.2942 16.5174 44.1091 16.2086 45.1555 15.9697C46.2106 15.7308 47.2356 15.6114 48.2306 15.6114C48.6852 16.0562 49.0626 16.7233 49.3629 17.6129C49.6717 18.4942 49.8346 19.2931 49.8518 20.0097C49.6802 20.3392 49.3886 20.6934 48.9769 21.0722C48.5737 21.4511 48.0848 21.8012 47.5101 22.1224C46.0862 22.9296 44.4522 23.3332 42.608 23.3332C39.9661 23.3332 37.886 22.596 36.3677 21.1217C34.798 19.6308 34.0132 17.5676 34.0132 14.9319C34.0132 12.288 34.8709 10.2123 36.5865 8.70505C37.3413 8.02965 38.2205 7.52311 39.2241 7.18541C40.2277 6.83947 41.2827 6.6665 42.3892 6.6665C44.5508 6.6665 46.3221 7.16893 47.7031 8.17379C49.0841 9.17865 49.7746 10.4183 49.7746 11.8926C49.7746 13.0045 49.4186 13.8282 48.7067 14.3636C47.9947 14.8907 47.0297 15.1543 45.8117 15.1543C45.1427 15.1543 44.4693 14.9978 43.7917 14.6848C43.1141 14.3636 42.7109 14.0629 42.5822 13.7829C42.5822 13.1075 42.5951 12.5762 42.6208 12.1891C42.6037 12.1809 42.5737 12.1768 42.5308 12.1768H42.4407C42.312 12.1768 42.2091 12.2138 42.1319 12.288C42.0633 12.3538 41.999 12.498 41.9389 12.7204C41.8875 12.9428 41.8617 13.5481 41.8617 14.5365C41.8617 16.9004 42.0676 18.0824 42.4793 18.0824Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter4_bd_4268_987)">
            <path
              d="M20.4043 20.5533V8.17379C20.4043 7.74549 20.7603 7.39132 21.4722 7.11128C22.1927 6.823 23.0376 6.67886 24.0069 6.67886C24.5559 6.67886 25.0705 6.74475 25.5509 6.87654C26.0398 7.00008 26.4129 7.1607 26.6703 7.35837C27.0219 7.78668 27.3436 8.22321 27.6352 8.66799C27.9269 9.11276 28.5831 10.1506 29.6038 11.7814C29.6982 11.7814 29.7839 11.7526 29.8611 11.6949C29.9383 11.6373 29.9769 11.5508 29.9769 11.4355C29.9769 11.3119 29.8697 11.0772 29.6553 10.7312L28.2657 8.43324V7.75373C28.7032 7.40779 29.235 7.14011 29.8611 6.95067C30.4873 6.76122 31.1349 6.6665 31.804 6.6665C32.8933 6.6665 33.7725 6.85594 34.4416 7.23483C35.2222 7.68784 35.6124 8.39618 35.6124 9.35986V21.0599C35.6124 21.7682 35.2608 22.283 34.5574 22.6042C33.957 22.8925 33.1549 23.0367 32.1514 23.0367C31.5938 23.0367 31.0491 22.979 30.5173 22.8637C29.9941 22.7484 29.5824 22.6001 29.2821 22.4189C28.6731 21.6694 28.0684 20.8293 27.468 19.8985L26.1556 17.7982C25.9068 17.8312 25.7825 17.9588 25.7825 18.1812C25.7825 18.3212 25.9068 18.5889 26.1556 18.9843L27.7639 21.4799V22.1348C26.7689 22.7525 25.6452 23.0614 24.3929 23.0614C23.1491 23.0614 22.1713 22.8431 21.4593 22.4066C20.756 21.97 20.4043 21.3523 20.4043 20.5533Z"
              fill="#121212"
            />
          </g>
          <g filter="url(#filter5_b_4268_987)">
            <path
              d="M22.1054 14.8339C22.1054 19.3446 18.2973 23.0012 13.5998 23.0012C8.90231 23.0012 5.09424 19.3446 5.09424 14.8339C5.09424 10.3232 8.90231 6.6665 13.5998 6.6665C18.2973 6.6665 22.1054 10.3232 22.1054 14.8339Z"
              fill="#FFD65E"
              fill-opacity="0.8"
            />
            <path
              d="M21.6054 14.8339C21.6054 19.0495 18.0405 22.5012 13.5998 22.5012C9.15914 22.5012 5.59424 19.0495 5.59424 14.8339C5.59424 10.6182 9.15914 7.1665 13.5998 7.1665C18.0405 7.1665 21.6054 10.6182 21.6054 14.8339Z"
              stroke="url(#paint1_linear_4268_987)"
              stroke-opacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_4268_987"
              x="74.3916"
              y="2.6665"
              width="15.5139"
              height="24.3823"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4268_987"
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
                in2="effect1_backgroundBlur_4268_987"
                result="effect2_dropShadow_4268_987"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4268_987"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_bd_4268_987"
              x="60.7827"
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
                result="effect1_backgroundBlur_4268_987"
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
                in2="effect1_backgroundBlur_4268_987"
                result="effect2_dropShadow_4268_987"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4268_987"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_b_4268_987"
              x="44.0703"
              y="5.6665"
              width="26.6663"
              height="18.3345"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4268_987"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4268_987"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_bd_4268_987"
              x="31.0132"
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
                result="effect1_backgroundBlur_4268_987"
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
                in2="effect1_backgroundBlur_4268_987"
                result="effect2_dropShadow_4268_987"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4268_987"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_bd_4268_987"
              x="17.4043"
              y="2.6665"
              width="23.2083"
              height="24.395"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4268_987"
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
                in2="effect1_backgroundBlur_4268_987"
                result="effect2_dropShadow_4268_987"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4268_987"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_b_4268_987"
              x="4.09424"
              y="5.6665"
              width="19.0112"
              height="18.3345"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4268_987"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4268_987"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4268_987"
              x1="67.4998"
              y1="10.4165"
              x2="53.9362"
              y2="23.3696"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset={1} stop-color="white" stop-opacity={0} />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4268_987"
              x1="19.5282"
              y1="9.1665"
              x2="7.94683"
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
              <g filter="url(#filter0_f_4268_1005)">
                <circle
                  cx="16.9999"
                  cy="17.0002"
                  r="9.91667"
                  fill="#FFC329"
                  fill-opacity="0.8"
                />
              </g>
              <circle
                cx="16.9999"
                cy="17.0002"
                r="9.91667"
                fill="#FFC329"
                fill-opacity="0.8"
              />
              <defs>
                <filter
                  id="filter0_f_4268_1005"
                  x="4.08325"
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
                    result="effect1_foregroundBlur_4268_1005"
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

export default myStyles;

import Image from 'next/image';
import { useState } from 'react';

function Profile() {
  // const [nickname, setNickname] = useState('');

  // const onChangeNickName = (e:) => {
  //   setNickname(e.target.value);
  // };
  return (
    <div className="w-80 h-[633px] relative overflow-hidden bg-neutral-50 m-auto">
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[82px] gap-1.5 py-1.5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            닉네임
          </p>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex justify-start items-center flex-grow relative overflow-hidden gap-2 px-4 py-3 rounded-lg bg-white/50 border border-[#808080]">
            <p className="flex-grow w-[196px] text-base text-left text-[#b3b3b3]">
              최대 8글자
            </p>
          </div>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-14 relative overflow-hidden gap-1 p-1.5 rounded-lg bg-[#e6e6e6]/60">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#b3b3b3]">
              중복확인
            </p>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
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
              d="M13.6667 9C13.6667 11.5773 11.5773 13.6667 9 13.6667C6.42267 13.6667 4.33333 11.5773 4.33333 9C4.33333 6.42267 6.42267 4.33333 9 4.33333C11.5773 4.33333 13.6667 6.42267 13.6667 9ZM15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9ZM9 5C9.36819 5 9.66667 5.29848 9.66667 5.66667V10.3333C9.66667 10.7015 9.36819 11 9 11C8.63181 11 8.33333 10.7015 8.33333 10.3333V5.66667C8.33333 5.29848 8.63181 5 9 5ZM9 11.6667C9.36819 11.6667 9.66667 11.9651 9.66667 12.3333V12.3334C9.66667 12.7016 9.36819 13.0001 9 13.0001C8.63181 13.0001 8.33333 12.7016 8.33333 12.3334V12.3333C8.33333 11.9651 8.63181 11.6667 9 11.6667Z"
              fill="#4D4D4D"
            />
          </svg>
          <p className="flex-grow w-[268px] text-xs text-left text-[#4d4d4d]">
            현재 닉네임 : 닉네임
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start absolute left-4 top-[219px] gap-2 py-1.5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            프로필
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-72 h-56 relative gap-2.5 pl-[19px] pr-4 rounded-2xl bg-white">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6521)">
              <circle
                cx={21}
                cy="21.0002"
                r="9.91667"
                fill="#FFC329"
                fill-opacity="0.8"
              />
            </g>
            <circle
              cx={21}
              cy="21.0002"
              r="9.91667"
              fill="#FFC329"
              fill-opacity="0.8"
            />
            <defs>
              <filter
                id="filter0_f_4371_6521"
                x="8.08331"
                y="8.0835"
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
                  result="effect1_foregroundBlur_4371_6521"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6526)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.3067 24.2356C32.4721 23.7113 31.8321 23.3319 31.3681 23.627C29.9099 24.5541 28.1795 25.0911 26.3236 25.0911C21.1239 25.0911 16.9088 20.8759 16.9088 15.6763C16.9088 13.8204 17.4458 12.0899 18.3729 10.6318C18.6679 10.1678 18.2886 9.52775 17.7642 9.69316C13.0701 11.1739 9.66669 15.5624 9.66669 20.7458C9.66669 27.1453 14.8545 32.3332 21.2541 32.3332C26.4375 32.3332 30.826 28.9297 32.3067 24.2356Z"
                fill="#FFC329"
                fill-opacity="0.8"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.3067 24.2356C32.4721 23.7113 31.8321 23.3319 31.3681 23.627C29.9099 24.5541 28.1795 25.0911 26.3236 25.0911C21.1239 25.0911 16.9088 20.8759 16.9088 15.6763C16.9088 13.8204 17.4458 12.0899 18.3729 10.6318C18.6679 10.1678 18.2886 9.52775 17.7642 9.69316C13.0701 11.1739 9.66669 15.5624 9.66669 20.7458C9.66669 27.1453 14.8545 32.3332 21.2541 32.3332C26.4375 32.3332 30.826 28.9297 32.3067 24.2356Z"
              fill="#FFC329"
              fill-opacity="0.8"
            />
            <g filter="url(#filter1_f_4371_6526)">
              <path
                d="M29.2589 9.85685C29.3354 9.60306 29.6647 9.60306 29.7412 9.85685L30.3634 11.9211C30.3851 11.9932 30.4331 12.0524 30.496 12.0848L32.1881 12.958C32.3818 13.058 32.3818 13.3584 32.1881 13.4583L30.496 14.3315C30.4331 14.364 30.3851 14.4231 30.3634 14.4952L29.7412 16.5595C29.6647 16.8133 29.3354 16.8133 29.2589 16.5595L28.6366 14.4952C28.6149 14.4231 28.567 14.364 28.5041 14.3315L26.8119 13.4583C26.6183 13.3584 26.6183 13.058 26.8119 12.958L28.5041 12.0848C28.567 12.0524 28.6149 11.9932 28.6366 11.9211L29.2589 9.85685Z"
                fill="#FFD65E"
                fill-opacity="0.8"
              />
            </g>
            <path
              d="M29.2589 9.85685C29.3354 9.60306 29.6647 9.60306 29.7412 9.85685L30.3634 11.9211C30.3851 11.9932 30.4331 12.0524 30.496 12.0848L32.1881 12.958C32.3818 13.058 32.3818 13.3584 32.1881 13.4583L30.496 14.3315C30.4331 14.364 30.3851 14.4231 30.3634 14.4952L29.7412 16.5595C29.6647 16.8133 29.3354 16.8133 29.2589 16.5595L28.6366 14.4952C28.6149 14.4231 28.567 14.364 28.5041 14.3315L26.8119 13.4583C26.6183 13.3584 26.6183 13.058 26.8119 12.958L28.5041 12.0848C28.567 12.0524 28.6149 11.9932 28.6366 11.9211L29.2589 9.85685Z"
              fill="#FFC329"
              fill-opacity="0.8"
            />
            <defs>
              <filter
                id="filter0_f_4371_6526"
                x="8.66669"
                y="8.6665"
                width="24.6667"
                height="24.6665"
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
                  result="effect1_foregroundBlur_4371_6526"
                />
              </filter>
              <filter
                id="filter1_f_4371_6526"
                x="25.6667"
                y="8.6665"
                width="7.66669"
                height="9.0835"
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
                  result="effect1_foregroundBlur_4371_6526"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6533)">
              <circle cx="28.0125" cy="18.2375" r="5.7375" fill="#FFC329" />
            </g>
            <circle
              cx="28.0125"
              cy="18.2375"
              r="5.7375"
              fill="#FFC329"
              fill-opacity="0.8"
            />
            <circle
              cx="28.0125"
              cy="18.2375"
              r="5.9375"
              stroke="white"
              stroke-opacity="0.3"
              stroke-width="0.4"
            />
            <g filter="url(#filter1_bd_4371_6533)">
              <path
                d="M27 30.3499C30.7279 30.3499 33.75 27.7811 33.75 24.6124C33.75 21.6171 31.0497 19.1579 27.6054 18.8977C26.9208 15.9765 23.8879 13.7749 20.25 13.7749C16.1079 13.7749 12.75 16.6291 12.75 20.1499C12.75 20.2034 12.7508 20.2568 12.7523 20.3101C10.1633 20.8755 8.25 22.8728 8.25 25.2499C8.25 28.0666 10.9363 30.3499 14.25 30.3499H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4371_6533"
                x="21.275"
                y="11.5"
                width="13.475"
                height="13.4751"
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
                  result="effect1_foregroundBlur_4371_6533"
                />
              </filter>
              <filter
                id="filter1_bd_4371_6533"
                x="6.25"
                y="11.7749"
                width="29.5"
                height="20.5752"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6533"
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
                  in2="effect1_backgroundBlur_4371_6533"
                  result="effect2_dropShadow_4371_6533"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6533"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6539)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.7164 16.6558C33.8834 16.2664 33.3939 15.9579 33.0114 16.14C32.4515 16.4066 31.825 16.5558 31.1637 16.5558C28.787 16.5558 26.8603 14.6291 26.8603 12.2523C26.8603 11.5912 27.0094 10.9649 27.2758 10.4051C27.4579 10.0226 27.1493 9.5331 26.7599 9.70017C24.8722 10.5101 23.55 12.3856 23.55 14.5699C23.55 17.4951 25.9214 19.8665 28.8465 19.8665C31.031 19.8665 32.9067 18.5439 33.7164 16.6558Z"
                fill="#FFC329"
                fill-opacity="0.8"
              />
            </g>
            <g filter="url(#filter1_d_4371_6539)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.7164 16.6558C33.8834 16.2664 33.3939 15.9579 33.0114 16.14C32.4515 16.4066 31.825 16.5558 31.1637 16.5558C28.787 16.5558 26.8603 14.6291 26.8603 12.2523C26.8603 11.5912 27.0094 10.9649 27.2758 10.4051C27.4579 10.0226 27.1493 9.5331 26.7599 9.70017C24.8722 10.5101 23.55 12.3856 23.55 14.5699C23.55 17.4951 25.9214 19.8665 28.8465 19.8665C31.031 19.8665 32.9067 18.5439 33.7164 16.6558Z"
                fill="#FFC329"
                fill-opacity="0.8"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter2_bd_4371_6539)">
              <path
                d="M27 30.0667C30.7279 30.0667 33.75 27.4979 33.75 24.3292C33.75 21.3339 31.0497 18.8747 27.6054 18.6145C26.9208 15.6933 23.8879 13.4917 20.25 13.4917C16.1079 13.4917 12.75 16.3459 12.75 19.8667C12.75 19.9202 12.7508 19.9736 12.7523 20.0269C10.1633 20.5923 8.25 22.5896 8.25 24.9667C8.25 27.7834 10.9363 30.0667 14.25 30.0667H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4371_6539"
                x="22.55"
                y="8.6665"
                width="12.2"
                height="12.2002"
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
                  result="effect1_foregroundBlur_4371_6539"
                />
              </filter>
              <filter
                id="filter1_d_4371_6539"
                x="23.05"
                y="9.1665"
                width="12.2"
                height="12.2002"
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
                  result="effect1_dropShadow_4371_6539"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4371_6539"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_bd_4371_6539"
                x="6.25"
                y="11.4917"
                width="29.5"
                height="20.5752"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6539"
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
                  in2="effect1_backgroundBlur_4371_6539"
                  result="effect2_dropShadow_4371_6539"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6539"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_bd_4371_6545)">
              <path
                d="M27.0104 12.9861C27.5636 12.4329 28.4606 12.4329 29.0138 12.9861C29.5671 13.5394 29.5671 14.4363 29.0138 14.9896L14.9895 29.0139C14.4363 29.5671 13.5393 29.5671 12.9861 29.0139C12.4328 28.4606 12.4328 27.5636 12.9861 27.0104L27.0104 12.9861Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter1_bd_4371_6545)">
              <path
                d="M12.9861 14.9895C12.4329 14.4363 12.4329 13.5393 12.9861 12.9861C13.5394 12.4328 14.4363 12.4328 14.9896 12.9861L29.0139 27.0103C29.5671 27.5636 29.5671 28.4606 29.0139 29.0138C28.4606 29.5671 27.5636 29.5671 27.0104 29.0138L12.9861 14.9895Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter2_bd_4371_6545)">
              <path
                d="M30.9166 19.583C31.699 19.583 32.3333 20.2173 32.3333 20.9997C32.3333 21.7821 31.699 22.4163 30.9166 22.4163L11.0832 22.4163C10.3008 22.4163 9.66658 21.7821 9.66658 20.9997C9.66658 20.2173 10.3008 19.583 11.0833 19.583L30.9166 19.583Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter3_bd_4371_6545)">
              <path
                d="M19.5833 11.0832C19.5833 10.3008 20.2175 9.6665 20.9999 9.6665C21.7823 9.6665 22.4166 10.3008 22.4166 11.0832V30.9165C22.4166 31.6989 21.7823 32.3332 20.9999 32.3332C20.2175 32.3332 19.5833 31.6989 19.5833 30.9165V11.0832Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_4371_6545"
                x="10.5712"
                y="10.5713"
                width="20.8575"
                height="20.8574"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6545"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6545"
                  result="effect2_dropShadow_4371_6545"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6545"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_bd_4371_6545"
                x="10.5712"
                y="10.5713"
                width="20.8577"
                height="20.8574"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6545"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6545"
                  result="effect2_dropShadow_4371_6545"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6545"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_bd_4371_6545"
                x="7.66663"
                y="17.583"
                width="26.6666"
                height="6.8335"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6545"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6545"
                  result="effect2_dropShadow_4371_6545"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6545"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_bd_4371_6545"
                x="17.5833"
                y="7.6665"
                width="6.83337"
                height="26.6665"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6545"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6545"
                  result="effect2_dropShadow_4371_6545"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6545"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <path
              d="M13.7833 27.3507C13.8846 26.9728 14.273 26.7486 14.6509 26.8498C15.0287 26.9511 15.253 27.3395 15.1517 27.7174L14.7851 29.0858C14.6838 29.4636 14.2954 29.6879 13.9176 29.5866C13.5397 29.4854 13.3154 29.097 13.4167 28.7191L13.7833 27.3507Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M17.3 30.1842C17.4013 29.8063 17.7897 29.5821 18.1675 29.6833C18.5454 29.7846 18.7697 30.173 18.6684 30.5509L18.3017 31.9193C18.2005 32.2971 17.8121 32.5214 17.4342 32.4201C17.0563 32.3189 16.8321 31.9305 16.9333 31.5526L17.3 30.1842Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M22.9666 27.3507C23.0679 26.9728 23.4563 26.7486 23.8342 26.8498C24.212 26.9511 24.4363 27.3395 24.335 27.7174L23.9684 29.0858C23.8671 29.4636 23.4787 29.6879 23.1008 29.5866C22.723 29.4854 22.4987 29.097 22.6 28.7191L22.9666 27.3507Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M27.2166 30.1842C27.3179 29.8063 27.7063 29.5821 28.0842 29.6833C28.462 29.7846 28.6863 30.173 28.585 30.5509L28.2184 31.9193C28.1171 32.2971 27.7287 32.5214 27.3508 32.4201C26.973 32.3189 26.7487 31.9305 26.85 31.5526L27.2166 30.1842Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <g filter="url(#filter0_b_4371_6552)">
              <path
                d="M27 25.2498C30.7279 25.2498 33.75 22.8348 33.75 19.8556C33.75 17.0395 31.0497 14.7274 27.6054 14.4828C26.9208 11.7364 23.8879 9.6665 20.25 9.6665C16.1079 9.6665 12.75 12.3499 12.75 15.6601C12.75 15.7104 12.7508 15.7606 12.7523 15.8107C10.1633 16.3423 8.25 18.2201 8.25 20.455C8.25 23.1031 10.9363 25.2498 14.25 25.2498H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_4371_6552"
                x="6.25"
                y="7.6665"
                width="29.5"
                height="19.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6552"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6552"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <path
              d="M14.1133 24.654C14.2348 24.2006 14.7008 23.9315 15.1543 24.053C15.6077 24.1745 15.8768 24.6406 15.7553 25.094L13.9954 31.6623C13.8739 32.1158 13.4078 32.3849 12.9543 32.2634C12.5009 32.1419 12.2318 31.6758 12.3533 31.2223L14.1133 24.654Z"
              fill="#298CFF"
              fill-opacity="0.8"
            />
            <path
              d="M22.6133 24.654C22.7348 24.2006 23.2009 23.9315 23.6544 24.053C24.1078 24.1745 24.3769 24.6406 24.2554 25.094L22.4954 31.6623C22.3739 32.1158 21.9078 32.3849 21.4544 32.2634C21.0009 32.1419 20.7318 31.6758 20.8533 31.2223L22.6133 24.654Z"
              fill="#298CFF"
              fill-opacity="0.8"
            />
            <path
              d="M18.3633 24.654C18.4848 24.2006 18.9509 23.9315 19.4044 24.053C19.8578 24.1745 20.1269 24.6406 20.0054 25.094L18.2454 31.6623C18.1239 32.1158 17.6578 32.3849 17.2044 32.2634C16.7509 32.1419 16.4818 31.6758 16.6033 31.2223L18.3633 24.654Z"
              fill="#298CFF"
              fill-opacity="0.8"
            />
            <path
              d="M26.8633 24.654C26.9848 24.2006 27.4509 23.9315 27.9044 24.053C28.3578 24.1745 28.6269 24.6406 28.5054 25.094L26.7454 31.6623C26.6239 32.1158 26.1578 32.3849 25.7044 32.2634C25.2509 32.1419 24.9818 31.6758 25.1033 31.2223L26.8633 24.654Z"
              fill="#298CFF"
              fill-opacity="0.8"
            />
            <g filter="url(#filter0_b_4371_6560)">
              <path
                d="M27 25.2498C30.7279 25.2498 33.75 22.8348 33.75 19.8556C33.75 17.0395 31.0497 14.7274 27.6054 14.4828C26.9208 11.7364 23.8879 9.6665 20.25 9.6665C16.1079 9.6665 12.75 12.3499 12.75 15.6601C12.75 15.7104 12.7508 15.7606 12.7523 15.8107C10.1633 16.3423 8.25 18.2201 8.25 20.455C8.25 23.1031 10.9363 25.2498 14.25 25.2498H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_4371_6560"
                x="7.25"
                y="8.6665"
                width="27.5"
                height="17.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6560"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6560"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_b_4371_6568)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5001 28.0835C12.4023 28.0835 12.323 28.1628 12.323 28.2606V29.0728L11.7487 28.4985C11.6796 28.4294 11.5675 28.4294 11.4983 28.4985C11.4292 28.5677 11.4292 28.6798 11.4983 28.749L12.0729 29.3235H11.2605C11.1627 29.3235 11.0834 29.4028 11.0834 29.5006C11.0834 29.5984 11.1627 29.6777 11.2605 29.6777H12.0724L11.4983 30.2518C11.4291 30.321 11.4291 30.4331 11.4983 30.5022C11.5674 30.5714 11.6796 30.5714 11.7487 30.5022L12.323 29.928V30.7397C12.323 30.8375 12.4023 30.9168 12.5001 30.9168C12.5979 30.9168 12.6772 30.8375 12.6772 30.7397V29.9278L13.2513 30.502C13.3205 30.5711 13.4326 30.5711 13.5018 30.502C13.5709 30.4328 13.5709 30.3207 13.5018 30.2516L12.9279 29.6777H13.7396C13.8374 29.6777 13.9167 29.5984 13.9167 29.5006C13.9167 29.4028 13.8374 29.3235 13.7396 29.3235H12.9274L13.5018 28.7492C13.5709 28.6801 13.5709 28.5679 13.5018 28.4988C13.4326 28.4296 13.3205 28.4296 13.2513 28.4988L12.6772 29.0729V28.2606C12.6772 28.1628 12.5979 28.0835 12.5001 28.0835Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
              />
            </g>
            <g filter="url(#filter1_b_4371_6568)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4584 30.9165C17.3117 30.9165 17.1928 31.0354 17.1928 31.1821V32.4004L16.3314 31.539C16.2277 31.4353 16.0595 31.4353 15.9558 31.539C15.852 31.6428 15.852 31.811 15.9558 31.9147L16.8177 32.7766H15.599C15.4523 32.7766 15.3334 32.8955 15.3334 33.0422C15.3334 33.1889 15.4523 33.3078 15.599 33.3078H16.8169L15.9557 34.169C15.852 34.2727 15.852 34.4409 15.9557 34.5446C16.0595 34.6484 16.2277 34.6484 16.3314 34.5446L17.1928 33.6832V34.9009C17.1928 35.0476 17.3117 35.1665 17.4584 35.1665C17.6051 35.1665 17.724 35.0476 17.724 34.9009V33.683L18.5853 34.5442C18.6891 34.648 18.8572 34.648 18.961 34.5442C19.0647 34.4405 19.0647 34.2723 18.961 34.1686L18.1002 33.3078H19.3177C19.4644 33.3078 19.5834 33.1889 19.5834 33.0422C19.5834 32.8955 19.4644 32.7766 19.3177 32.7766H18.0995L18.9609 31.9151C19.0647 31.8113 19.0647 31.6432 18.9609 31.5394C18.8572 31.4357 18.689 31.4357 18.5853 31.5394L17.724 32.4007V31.1821C17.724 31.0354 17.6051 30.9165 17.4584 30.9165Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
              />
            </g>
            <g filter="url(#filter2_b_4371_6568)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.375 29.5C27.2283 29.5 27.1094 29.6189 27.1094 29.7656V30.9839L26.248 30.1225C26.1443 30.0188 25.9761 30.0188 25.8724 30.1225C25.7687 30.2263 25.7687 30.3945 25.8724 30.4982L26.7343 31.3601H25.5156C25.3689 31.3601 25.25 31.479 25.25 31.6257C25.25 31.7724 25.3689 31.8913 25.5156 31.8913H26.7335L25.8724 32.7525C25.7686 32.8562 25.7686 33.0244 25.8724 33.1281C25.9761 33.2319 26.1443 33.2319 26.248 33.1281L27.1094 32.2667V33.4844C27.1094 33.6311 27.2283 33.75 27.375 33.75C27.5217 33.75 27.6407 33.6311 27.6407 33.4844V32.2665L28.5019 33.1277C28.6057 33.2315 28.7739 33.2315 28.8776 33.1277C28.9813 33.024 28.9813 32.8558 28.8776 32.7521L28.0168 31.8913H29.2344C29.3811 31.8913 29.5 31.7724 29.5 31.6257C29.5 31.479 29.3811 31.3601 29.2344 31.3601H28.0161L28.8776 30.4986C28.9813 30.3948 28.9813 30.2267 28.8776 30.1229C28.7738 30.0192 28.6056 30.0192 28.5019 30.1229L27.6407 30.9842V29.7656C27.6407 29.6189 27.5217 29.5 27.375 29.5Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
              />
            </g>
            <path
              d="M13.4166 23.1007C13.5179 22.7228 13.9063 22.4986 14.2842 22.5998C14.662 22.7011 14.8863 23.0895 14.785 23.4674L14.0517 26.2042C13.9505 26.582 13.5621 26.8063 13.1842 26.705C12.8063 26.6038 12.5821 26.2154 12.6833 25.8375L13.4166 23.1007Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M23.3334 23.1007C23.4346 22.7228 23.823 22.4986 24.2009 22.5998C24.5788 22.7011 24.803 23.0895 24.7018 23.4674L22.8685 30.3093C22.7672 30.6872 22.3788 30.9115 22.001 30.8102C21.6231 30.709 21.3988 30.3205 21.5001 29.9427L23.3334 23.1007Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M18.4 23.1007C18.5013 22.7228 18.8897 22.4986 19.2676 22.5998C19.6454 22.7011 19.8697 23.0895 19.7684 23.4674L18.3018 28.9409C18.2005 29.3188 17.8121 29.5431 17.4343 29.4418C17.0564 29.3406 16.8322 28.9522 16.9334 28.5743L18.4 23.1007Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M27.5834 23.1007C27.6846 22.7228 28.073 22.4986 28.4509 22.5998C28.8288 22.7011 29.053 23.0895 28.9518 23.4674L27.8518 27.5725C27.7506 27.9504 27.3622 28.1747 26.9843 28.0734C26.6064 27.9722 26.3822 27.5838 26.4834 27.2059L27.5834 23.1007Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <g filter="url(#filter3_b_4371_6568)">
              <path
                d="M27 23.8333C30.7279 23.8333 33.75 21.4183 33.75 18.4391C33.75 15.623 31.0497 13.3109 27.6054 13.0663C26.9208 10.3199 23.8879 8.25 20.25 8.25C16.1079 8.25 12.75 10.9334 12.75 14.2436C12.75 14.2939 12.7508 14.3441 12.7523 14.3942C10.1633 14.9258 8.25 16.8036 8.25 19.0385C8.25 21.6866 10.9363 23.8333 14.25 23.8333H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_4371_6568"
                x="9.08337"
                y="26.0835"
                width="6.83337"
                height="6.8335"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6568"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6568"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_4371_6568"
                x="13.3334"
                y="28.9165"
                width="8.25"
                height="8.25"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6568"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6568"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_4371_6568"
                x="23.25"
                y="27.5"
                width="8.25"
                height="8.25"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6568"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6568"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_b_4371_6568"
                x="7.25"
                y="7.25"
                width="27.5"
                height="17.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6568"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6568"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6579)">
              <path
                d="M30.9167 21.0002C30.9167 18.3701 29.8719 15.8478 28.0122 13.988C26.1524 12.1283 23.6301 11.0835 21 11.0835C18.37 11.0835 15.8476 12.1283 13.9879 13.988C12.1282 15.8478 11.0834 18.3701 11.0834 21.0002L21 21.0002H30.9167Z"
                fill="#FFC329"
              />
            </g>
            <circle
              cx={21}
              cy="21.0002"
              r="9.91667"
              fill="#FFC329"
              fill-opacity="0.8"
            />
            <g filter="url(#filter1_b_4371_6579)">
              <rect
                x={4}
                y={21}
                width={34}
                height={17}
                fill="white"
                fill-opacity="0.6"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4992 23.3325C20.7758 23.0558 21.2243 23.0558 21.5009 23.3325L24.3342 26.1658C24.6109 26.4424 24.6109 26.8909 24.3342 27.1675C24.0576 27.4442 23.6091 27.4442 23.3325 27.1675L21.7084 25.5434V32.3333C21.7084 32.7245 21.3912 33.0417 21 33.0417C20.6088 33.0417 20.2917 32.7245 20.2917 32.3333V25.5434L18.6676 27.1675C18.391 27.4442 17.9425 27.4442 17.6658 27.1675C17.3892 26.8909 17.3892 26.4424 17.6658 26.1658L20.4992 23.3325Z"
              fill="#121212"
            />
            <defs>
              <filter
                id="filter0_f_4371_6579"
                x="7.08337"
                y="7.0835"
                width="27.8334"
                height="17.9165"
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
                  stdDeviation={2}
                  result="effect1_foregroundBlur_4371_6579"
                />
              </filter>
              <filter
                id="filter1_b_4371_6579"
                x={-2}
                y={15}
                width={46}
                height={29}
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={3} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6579"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6579"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6586)">
              <path
                d="M30.9167 21.0002C30.9167 18.3701 29.8719 15.8478 28.0122 13.988C26.1524 12.1283 23.6301 11.0835 21 11.0835C18.37 11.0835 15.8476 12.1283 13.9879 13.988C12.1282 15.8478 11.0834 18.3701 11.0834 21.0002L21 21.0002H30.9167Z"
                fill="#FFC329"
              />
            </g>
            <circle
              cx={21}
              cy="21.0002"
              r="9.91667"
              fill="url(#paint0_linear_4371_6586)"
            />
            <g filter="url(#filter1_b_4371_6586)">
              <rect
                x={4}
                y={21}
                width={34}
                height={17}
                fill="white"
                fill-opacity="0.6"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4992 32.8345C20.7758 33.1111 21.2243 33.1111 21.5009 32.8345L24.3342 30.0012C24.6109 29.7246 24.6109 29.2761 24.3342 28.9995C24.0576 28.7228 23.6091 28.7228 23.3325 28.9995L21.7084 30.6236V23.8337C21.7084 23.4425 21.3912 23.1253 21 23.1253C20.6088 23.1253 20.2917 23.4425 20.2917 23.8337V30.6236L18.6676 28.9995C18.391 28.7228 17.9425 28.7228 17.6658 28.9995C17.3892 29.2761 17.3892 29.7246 17.6658 30.0012L20.4992 32.8345Z"
              fill="#121212"
            />
            <defs>
              <filter
                id="filter0_f_4371_6586"
                x="7.08337"
                y="7.0835"
                width="27.8334"
                height="17.9165"
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
                  stdDeviation={2}
                  result="effect1_foregroundBlur_4371_6586"
                />
              </filter>
              <filter
                id="filter1_b_4371_6586"
                x={-2}
                y={15}
                width={46}
                height={29}
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={3} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6586"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6586"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_4371_6586"
                x1={21}
                y1="11.0835"
                x2={21}
                y2="21.0002"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF9518" />
                <stop offset={1} stop-color="#FFC329" stop-opacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width={44}
            height={44}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={1}
              y={1}
              width={42}
              height={42}
              rx={4}
              stroke="#7EC5FF"
              stroke-opacity="0.6"
              stroke-width={2}
            />
            <rect
              x={5}
              y={5}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <path
              d="M22.625 22.0002C19.9326 22.0002 17.75 20.4633 17.75 18.5675C17.75 16.7754 19.7002 15.3041 22.1878 15.1484C22.6821 13.4007 24.8726 12.0835 27.5 12.0835C30.4915 12.0835 32.9166 13.7911 32.9166 15.8976C32.9166 15.9296 32.9161 15.9616 32.9149 15.9934C34.7848 16.3317 36.1666 17.5267 36.1666 18.9489C36.1666 20.6341 34.2265 22.0002 31.8333 22.0002H22.625Z"
              fill="#B3B3B3"
            />
            <g filter="url(#filter0_bd_4371_6593)">
              <path
                d="M26.5833 31.9168C30.3112 31.9168 33.3333 29.5017 33.3333 26.5226C33.3333 23.7065 30.633 21.3944 27.1887 21.1498C26.5041 18.4034 23.4712 16.3335 19.8333 16.3335C15.6912 16.3335 12.3333 19.0169 12.3333 22.3271C12.3333 22.3774 12.3341 22.4276 12.3356 22.4777C9.74661 23.0093 7.83331 24.8871 7.83331 27.122C7.83331 29.7701 10.5196 31.9168 13.8333 31.9168H26.5833Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_4371_6593"
                x="5.83331"
                y="14.3335"
                width="29.5"
                height="19.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6593"
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
                  in2="effect1_backgroundBlur_4371_6593"
                  result="effect2_dropShadow_4371_6593"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6593"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_b_4371_6598)">
              <path
                d="M27 25.2498C30.7279 25.2498 33.75 22.8348 33.75 19.8556C33.75 17.0395 31.0497 14.7274 27.6054 14.4828C26.9208 11.7364 23.8879 9.6665 20.25 9.6665C16.1079 9.6665 12.75 12.3499 12.75 15.6601C12.75 15.7104 12.7508 15.7606 12.7523 15.8107C10.1633 16.3423 8.25 18.2201 8.25 20.455C8.25 23.1031 10.9363 25.2498 14.25 25.2498H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </g>
            <g filter="url(#filter1_bd_4371_6598)">
              <path
                d="M28.6738 19.032C29.0541 18.6516 29.6708 18.6516 30.0512 19.032C30.4315 19.4123 30.4315 20.029 30.0512 20.4093L20.4095 30.051C20.0291 30.4314 19.4125 30.4314 19.0321 30.051C18.6517 29.6707 18.6517 29.054 19.0321 28.6736L28.6738 19.032Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter2_bd_4371_6598)">
              <path
                d="M19.0321 20.4099C18.6518 20.0295 18.6518 19.4129 19.0321 19.0325C19.4125 18.6521 20.0292 18.6521 20.4095 19.0325L30.0512 28.6742C30.4316 29.0545 30.4316 29.6712 30.0512 30.0516C29.6709 30.4319 29.0542 30.4319 28.6738 30.0516L19.0321 20.4099Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter3_bd_4371_6598)">
              <path
                d="M31.3594 23.5679C31.8973 23.5679 32.3333 24.0039 32.3333 24.5418C32.3333 25.0797 31.8973 25.5158 31.3594 25.5158L17.7239 25.5158C17.186 25.5158 16.75 25.0797 16.75 24.5418C16.75 24.0039 17.186 23.5679 17.7239 23.5679L31.3594 23.5679Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter4_bd_4371_6598)">
              <path
                d="M23.5677 17.724C23.5677 17.1861 24.0037 16.75 24.5416 16.75C25.0795 16.75 25.5156 17.1861 25.5156 17.724V31.3594C25.5156 31.8973 25.0795 32.3333 24.5416 32.3333C24.0037 32.3333 23.5677 31.8973 23.5677 31.3594V17.724Z"
                fill="#7EC5FF"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_4371_6598"
                x="7.25"
                y="8.6665"
                width="27.5"
                height="17.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6598"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_bd_4371_6598"
                x="17.7468"
                y="17.7466"
                width="14.0896"
                height="14.0898"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6598"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6598"
                  result="effect2_dropShadow_4371_6598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6598"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_bd_4371_6598"
                x="17.7469"
                y="17.7471"
                width="14.0896"
                height="14.0898"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6598"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6598"
                  result="effect2_dropShadow_4371_6598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6598"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_bd_4371_6598"
                x="15.75"
                y="22.5679"
                width="18.0833"
                height="4.44775"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6598"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6598"
                  result="effect2_dropShadow_4371_6598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6598"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_bd_4371_6598"
                x="22.5677"
                y="15.75"
                width="4.44794"
                height="18.0835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6598"
                />
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
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_4371_6598"
                  result="effect2_dropShadow_4371_6598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6598"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6607)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.35 22.0155C23.4062 21.8092 23.2372 21.6013 22.9888 21.5712L18.6884 21.0502C18.4594 21.0225 18.2536 21.1579 18.2286 21.3528L17.5287 26.8208C17.5038 27.0157 17.6692 27.1961 17.8981 27.2238L19.119 27.3717C19.348 27.3995 19.5134 27.5799 19.4884 27.7747L18.8452 32.7999C18.7975 33.1722 19.3721 33.3621 19.6103 33.0528L24.5993 26.5768C24.7672 26.359 24.6021 26.0587 24.2939 26.0214L22.7902 25.8392C22.5418 25.8091 22.3728 25.6012 22.4291 25.3949L23.35 22.0155Z"
                fill="#FFC329"
                fill-opacity="0.8"
              />
            </g>
            <g filter="url(#filter1_b_4371_6607)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.35 22.0155C23.4062 21.8092 23.2372 21.6013 22.9888 21.5712L18.6884 21.0502C18.4594 21.0225 18.2536 21.1579 18.2286 21.3528L17.5287 26.8208C17.5038 27.0157 17.6692 27.1961 17.8981 27.2238L19.119 27.3717C19.348 27.3995 19.5134 27.5799 19.4884 27.7747L18.8452 32.7999C18.7975 33.1722 19.3721 33.3621 19.6103 33.0528L24.5993 26.5768C24.7672 26.359 24.6021 26.0587 24.2939 26.0214L22.7902 25.8392C22.5418 25.8091 22.3728 25.6012 22.4291 25.3949L23.35 22.0155Z"
                fill="#FFC329"
                fill-opacity="0.8"
              />
            </g>
            <g filter="url(#filter2_b_4371_6607)">
              <path
                d="M27 23.8333C30.7279 23.8333 33.75 21.4183 33.75 18.4391C33.75 15.623 31.0497 13.3109 27.6054 13.0663C26.9208 10.3199 23.8879 8.25 20.25 8.25C16.1079 8.25 12.75 10.9334 12.75 14.2436C12.75 14.2939 12.7508 14.3441 12.7523 14.3942C10.1633 14.9258 8.25 16.8036 8.25 19.0385C8.25 21.6866 10.9363 23.8333 14.25 23.8333H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </g>
            <path
              d="M11.6333 25.9342C11.7346 25.5563 12.123 25.3321 12.5008 25.4333C12.8787 25.5346 13.103 25.923 13.0017 26.3009L12.6351 27.6693C12.5338 28.0471 12.1454 28.2714 11.7675 28.1701C11.3897 28.0689 11.1654 27.6805 11.2667 27.3026L11.6333 25.9342Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M27.2167 25.9342C27.3179 25.5563 27.7064 25.3321 28.0842 25.4333C28.4621 25.5346 28.6863 25.923 28.5851 26.3009L28.2184 27.6693C28.1172 28.0471 27.7288 28.2714 27.3509 28.1701C26.973 28.0689 26.7488 27.6805 26.85 27.3026L27.2167 25.9342Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M14.4667 30.1842C14.5679 29.8063 14.9564 29.5821 15.3342 29.6833C15.7121 29.7846 15.9363 30.173 15.8351 30.5509L15.4684 31.9193C15.3672 32.2971 14.9788 32.5214 14.6009 32.4201C14.223 32.3189 13.9988 31.9305 14.1 31.5526L14.4667 30.1842Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M30.0499 30.1842C30.1512 29.8063 30.5396 29.5821 30.9175 29.6833C31.2953 29.7846 31.5196 30.173 31.4183 30.5509L31.0517 31.9193C30.9504 32.2971 30.562 32.5214 30.1842 32.4201C29.8063 32.3189 29.582 31.9305 29.6833 31.5526L30.0499 30.1842Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <defs>
              <filter
                id="filter0_f_4371_6607"
                x="16.5262"
                y="20.0464"
                width="9.14001"
                height="14.1611"
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
                  result="effect1_foregroundBlur_4371_6607"
                />
              </filter>
              <filter
                id="filter1_b_4371_6607"
                x="15.5262"
                y="19.0464"
                width="11.14"
                height="16.1611"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6607"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6607"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_4371_6607"
                x="7.25"
                y="7.25"
                width="27.5"
                height="17.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6607"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6607"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3333 12.6887C12.9422 12.6887 11.1621 13.9862 10.6684 14.5128C10.1152 15.1029 9.21817 15.1029 8.66493 14.5128C8.11169 13.9227 8.11169 12.9659 8.66493 12.3758C9.58789 11.3913 12.0578 9.6665 15.3333 9.6665H15.3425C16.8392 9.66649 19.4618 9.66647 22.0017 12.3758C22.4215 12.8235 22.8511 13.2439 23.5082 13.5772C24.1656 13.9107 25.1408 14.1998 26.6667 14.1998C27.3588 14.1998 28.2739 14.0786 29.155 13.7765C30.0453 13.4712 30.7919 13.0195 31.2745 12.4404C31.7943 11.8166 32.6897 11.7604 33.2745 12.3149C33.8593 12.8693 33.912 13.8244 33.3922 14.4482C32.4581 15.5691 31.1977 16.2507 30.0221 16.6537C28.8372 17.06 27.6273 17.2221 26.6667 17.2221C24.7926 17.2221 23.3897 16.8636 22.2915 16.3066C21.1929 15.7493 20.4892 15.0365 19.9983 14.5128C18.2934 12.6943 16.6715 12.6887 15.3333 12.6887Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3333 20.2444C12.9422 20.2444 11.1621 21.5418 10.6684 22.0685C10.1152 22.6586 9.21817 22.6586 8.66493 22.0685C8.11169 21.4783 8.11169 20.5216 8.66493 19.9314C9.58789 18.9469 12.0578 17.2222 15.3333 17.2222H15.3425C16.8392 17.2222 19.4618 17.2221 22.0017 19.9314C22.4215 20.3791 22.8511 20.7996 23.5082 21.1329C24.1656 21.4663 25.1408 21.7555 26.6667 21.7555C27.3588 21.7555 28.2739 21.6343 29.155 21.3322C30.0453 21.0269 30.7919 20.5751 31.2745 19.996C31.7943 19.3723 32.6897 19.3161 33.2745 19.8705C33.8593 20.425 33.912 21.3801 33.3922 22.0039C32.4581 23.1248 31.1977 23.8063 30.0221 24.2094C28.8372 24.6156 27.6273 24.7777 26.6667 24.7777C24.7926 24.7777 23.3897 24.4193 22.2915 23.8622C21.1929 23.305 20.4892 22.5921 19.9983 22.0685C18.2934 20.2499 16.6715 20.2444 15.3333 20.2444Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3333 27.8001C12.9422 27.8001 11.1621 29.0975 10.6684 29.6241C10.1152 30.2143 9.21817 30.2143 8.66493 29.6241C8.11169 29.034 8.11169 28.0772 8.66493 27.4871C9.58789 26.5026 12.0578 24.7778 15.3333 24.7778H15.3425C16.8392 24.7778 19.4618 24.7778 22.0017 27.4871C22.4215 27.9348 22.8511 28.3553 23.5082 28.6885C24.1656 29.022 25.1408 29.3112 26.6667 29.3112C27.3588 29.3112 28.2739 29.1899 29.155 28.8878C30.0453 28.5826 30.7919 28.1308 31.2745 27.5517C31.7943 26.9279 32.6897 26.8717 33.2745 27.4262C33.8593 27.9806 33.912 28.9358 33.3922 29.5595C32.4581 30.6804 31.1977 31.362 30.0221 31.7651C28.8372 32.1713 27.6273 32.3334 26.6667 32.3334C24.7926 32.3334 23.3897 31.9749 22.2915 31.4179C21.1929 30.8607 20.4892 30.1478 19.9983 29.6241C18.2934 27.8056 16.6715 27.8001 15.3333 27.8001Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6623)">
              <path
                d="M29.5 18.1665C29.5 15.9122 28.6045 13.7502 27.0104 12.1561C25.4163 10.562 23.2543 9.6665 21 9.6665C18.7457 9.6665 16.5837 10.562 14.9896 12.1561C13.3955 13.7502 12.5 15.9122 12.5 18.1665L21 18.1665H29.5Z"
                fill="#FFC329"
              />
            </g>
            <path
              d="M29.5 18.1665C29.5 15.9122 28.6045 13.7502 27.0104 12.1561C25.4163 10.562 23.2543 9.6665 21 9.6665C18.7457 9.6665 16.5837 10.562 14.9896 12.1561C13.3955 13.7502 12.5 15.9122 12.5 18.1665L21 18.1665H29.5Z"
              fill="#FFC329"
              fill-opacity="0.8"
            />
            <path
              d="M9.66663 19.229C9.66663 18.6422 10.1423 18.1665 10.7291 18.1665H31.2708C31.8576 18.1665 32.3333 18.6422 32.3333 19.229C32.3333 19.8158 31.8576 20.2915 31.2708 20.2915H10.7291C10.1423 20.2915 9.66663 19.8158 9.66663 19.229Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <path
              d="M9.66663 31.979C9.66663 31.3922 10.1423 30.9165 10.7291 30.9165H31.2708C31.8576 30.9165 32.3333 31.3922 32.3333 31.979C32.3333 32.5658 31.8576 33.0415 31.2708 33.0415H10.7291C10.1423 33.0415 9.66663 32.5658 9.66663 31.979Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <path
              d="M8.25 23.479C8.25 22.8922 8.7257 22.4165 9.3125 22.4165H32.6875C33.2743 22.4165 33.75 22.8922 33.75 23.479C33.75 24.0658 33.2743 24.5415 32.6875 24.5415H9.3125C8.7257 24.5415 8.25 24.0658 8.25 23.479Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <path
              d="M8.25 27.729C8.25 27.1422 8.7257 26.6665 9.3125 26.6665H32.6875C33.2743 26.6665 33.75 27.1422 33.75 27.729C33.75 28.3158 33.2743 28.7915 32.6875 28.7915H9.3125C8.7257 28.7915 8.25 28.3158 8.25 27.729Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <defs>
              <filter
                id="filter0_f_4371_6623"
                x="10.5"
                y="7.6665"
                width={21}
                height="12.5"
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
                  stdDeviation={1}
                  result="effect1_foregroundBlur_4371_6623"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_f_4371_6633)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.7126 16.0159C33.8982 15.5832 33.3543 15.2404 32.9293 15.4428C32.3072 15.739 31.6111 15.9048 30.8763 15.9048C28.2355 15.9048 26.0948 13.764 26.0948 11.1231C26.0948 10.3885 26.2604 9.69261 26.5564 9.0707C26.7587 8.64561 26.4158 8.10178 25.9832 8.2874C23.8858 9.18734 22.4167 11.2712 22.4167 13.6982C22.4167 16.9485 25.0515 19.5833 28.3016 19.5833C30.7289 19.5833 32.8129 18.1138 33.7126 16.0159Z"
                fill="#FFC329"
                fill-opacity="0.8"
              />
            </g>
            <g filter="url(#filter1_d_4371_6633)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.7126 16.0159C33.8982 15.5832 33.3543 15.2404 32.9293 15.4428C32.3072 15.739 31.6111 15.9048 30.8763 15.9048C28.2355 15.9048 26.0948 13.764 26.0948 11.1231C26.0948 10.3885 26.2604 9.69261 26.5564 9.0707C26.7587 8.64561 26.4158 8.10178 25.9832 8.2874C23.8858 9.18734 22.4167 11.2712 22.4167 13.6982C22.4167 16.9485 25.0515 19.5833 28.3016 19.5833C30.7289 19.5833 32.8129 18.1138 33.7126 16.0159Z"
                fill="#FFC329"
                fill-opacity="0.8"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter2_bd_4371_6633)">
              <path
                d="M24.9167 26.6668C28.2304 26.6668 30.9167 24.2517 30.9167 21.2726C30.9167 18.4565 28.5164 16.1444 25.4548 15.8998C24.8463 13.1534 22.1503 11.0835 18.9167 11.0835C15.2348 11.0835 12.25 13.7669 12.25 17.0771C12.25 17.1274 12.2507 17.1776 12.2521 17.2277C9.95071 17.7593 8.25 19.6371 8.25 21.872C8.25 24.5201 10.6378 26.6668 13.5833 26.6668H24.9167Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
                shape-rendering="crispEdges"
              />
            </g>
            <path
              d="M12.7974 28.7677C12.8933 28.3898 13.2613 28.1656 13.6193 28.2668C13.9772 28.3681 14.1897 28.7565 14.0938 29.1344L13.7464 30.5027C13.6505 30.8806 13.2825 31.1049 12.9245 31.0036C12.5665 30.9024 12.3541 30.514 12.45 30.1361L12.7974 28.7677Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M16.1289 31.6007C16.2249 31.2228 16.5928 30.9986 16.9508 31.0998C17.3088 31.2011 17.5212 31.5895 17.4253 31.9674L17.0779 33.3358C16.982 33.7136 16.6141 33.9379 16.2561 33.8366C15.8981 33.7354 15.6856 33.347 15.7816 32.9691L16.1289 31.6007Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M21.4974 28.7677C21.5933 28.3898 21.9613 28.1656 22.3193 28.2668C22.6773 28.3681 22.8897 28.7565 22.7938 29.1344L22.4464 30.5027C22.3505 30.8806 21.9825 31.1049 21.6245 31.0036C21.2666 30.9024 21.0541 30.514 21.15 30.1361L21.4974 28.7677Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M25.5237 31.6007C25.6196 31.2228 25.9876 30.9986 26.3456 31.0998C26.7036 31.2011 26.916 31.5895 26.8201 31.9674L26.4727 33.3358C26.3768 33.7136 26.0088 33.9379 25.6508 33.8366C25.2929 33.7354 25.0804 33.347 25.1763 32.9691L25.5237 31.6007Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <defs>
              <filter
                id="filter0_f_4371_6633"
                x="21.4167"
                y="7.25"
                width="13.3333"
                height="13.3335"
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
                  result="effect1_foregroundBlur_4371_6633"
                />
              </filter>
              <filter
                id="filter1_d_4371_6633"
                x="21.9167"
                y="7.75"
                width="13.3333"
                height="13.3335"
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
                  result="effect1_dropShadow_4371_6633"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4371_6633"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_bd_4371_6633"
                x="6.25"
                y="9.0835"
                width="26.6667"
                height="19.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6633"
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
                  in2="effect1_backgroundBlur_4371_6633"
                  result="effect2_dropShadow_4371_6633"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_4371_6633"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <g filter="url(#filter0_b_4371_6643)">
              <path
                d="M27 23.8333C30.7279 23.8333 33.75 21.4183 33.75 18.4391C33.75 15.623 31.0497 13.3109 27.6054 13.0663C26.9208 10.3199 23.8879 8.25 20.25 8.25C16.1079 8.25 12.75 10.9334 12.75 14.2436C12.75 14.2939 12.7508 14.3441 12.7523 14.3942C10.1633 14.9258 8.25 16.8036 8.25 19.0385C8.25 21.6866 10.9363 23.8333 14.25 23.8333H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.65 26.6664C11.65 26.197 12.0306 25.8164 12.5 25.8164H29.5C29.9695 25.8164 30.35 26.197 30.35 26.6664C30.35 27.1358 29.9695 27.5164 29.5 27.5164H12.5C12.0306 27.5164 11.65 27.1358 11.65 26.6664Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.65 29.4999C11.65 29.0305 12.0306 28.6499 12.5 28.6499H29.5C29.9695 28.6499 30.35 29.0305 30.35 29.4999C30.35 29.9693 29.9695 30.3499 29.5 30.3499H12.5C12.0306 30.3499 11.65 29.9693 11.65 29.4999Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.65 32.3334C11.65 31.864 12.0306 31.4834 12.5 31.4834H29.5C29.9695 31.4834 30.35 31.864 30.35 32.3334C30.35 32.8028 29.9695 33.1834 29.5 33.1834H12.5C12.0306 33.1834 11.65 32.8028 11.65 32.3334Z"
              fill="#CCCCCC"
              fill-opacity="0.7"
            />
            <defs>
              <filter
                id="filter0_b_4371_6643"
                x="6.25"
                y="6.25"
                width="29.5"
                height="19.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6643"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6643"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x={4}
              y={4}
              width={34}
              height={34}
              rx={4}
              fill="white"
              fill-opacity="0.6"
            />
            <path
              d="M13.4166 24.5172C13.5179 24.1393 13.9063 23.9151 14.2842 24.0163C14.662 24.1176 14.8863 24.506 14.785 24.8839L14.0517 27.6207C13.9505 27.9985 13.5621 28.2228 13.1842 28.1215C12.8063 28.0203 12.5821 27.6319 12.6833 27.254L13.4166 24.5172Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M23.3333 24.5172C23.4345 24.1393 23.8229 23.9151 24.2008 24.0163C24.5787 24.1176 24.8029 24.506 24.7017 24.8839L22.8684 31.7258C22.7671 32.1037 22.3787 32.328 22.0008 32.2267C21.623 32.1255 21.3987 31.7371 21.5 31.3592L23.3333 24.5172Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M18.3999 24.5172C18.5012 24.1393 18.8896 23.9151 19.2674 24.0163C19.6453 24.1176 19.8696 24.506 19.7683 24.8839L18.3017 30.3574C18.2004 30.7353 17.812 30.9596 17.4341 30.8583C17.0563 30.7571 16.832 30.3687 16.9333 29.9908L18.3999 24.5172Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <path
              d="M27.5833 24.5172C27.6845 24.1393 28.0729 23.9151 28.4508 24.0163C28.8287 24.1176 29.0529 24.506 28.9517 24.8839L27.8517 28.989C27.7504 29.3669 27.362 29.5912 26.9842 29.4899C26.6063 29.3887 26.382 29.0003 26.4833 28.6224L27.5833 24.5172Z"
              fill="#5EB0FF"
              fill-opacity="0.8"
            />
            <g filter="url(#filter0_b_4371_6650)">
              <path
                d="M27 25.2498C30.7279 25.2498 33.75 22.8348 33.75 19.8556C33.75 17.0395 31.0497 14.7274 27.6054 14.4828C26.9208 11.7364 23.8879 9.6665 20.25 9.6665C16.1079 9.6665 12.75 12.3499 12.75 15.6601C12.75 15.7104 12.7508 15.7606 12.7523 15.8107C10.1633 16.3423 8.25 18.2201 8.25 20.455C8.25 23.1031 10.9363 25.2498 14.25 25.2498H27Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_4371_6650"
                x="7.25"
                y="8.6665"
                width="27.5"
                height="17.5835"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_4371_6650"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_4371_6650"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center w-72 absolute left-4 top-[540px] overflow-hidden gap-2 p-3 rounded-lg bg-[#121212]">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
          완료
        </p>
      </div>
      <div
        className="flex justify-between items-center w-80 h-14 absolute left-0 top-0 px-4 py-1.5 bg-white/50 border border-white/60 backdrop-blur-[10px]"
        style={{ boxShadow: '0px 2px 5px 0 rgba(0,0,0,0.05)' }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
          닉네임 / 프로필 수정
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
                d="M7.14822 5.85198C6.79024 5.494 6.20984 5.494 5.85186 5.85198C5.49388 6.20996 5.49388 6.79036 5.85186 7.14834L10.7037 12.0002L5.85186 16.852C5.49388 17.21 5.49388 17.7904 5.85186 18.1483C6.20984 18.5063 6.79024 18.5063 7.14822 18.1483L12 13.2965L16.8519 18.1483C17.2098 18.5063 17.7902 18.5063 18.1482 18.1483C18.5062 17.7904 18.5062 17.21 18.1482 16.852L13.2964 12.0002L18.1482 7.14834C18.5062 6.79036 18.5062 6.20996 18.1482 5.85198C17.7902 5.494 17.2098 5.494 16.8519 5.85198L12 10.7038L7.14822 5.85198Z"
                fill="#121212"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

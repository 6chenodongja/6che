import { AnimatePresence, motion } from 'framer-motion';
import { IconHeart2 } from 'icons/IconHeart2';
import { useState } from 'react';
import LogoutButton from '../LogoutButton/LogoutButton';
import Link from 'next/link';

function LoginDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700 "
      >
        <IconHeart2 className="w-6 h-6" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              <Link
                href="/mypage"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.79599 2.49436L12.2104 2.49436L15.4112 7.99439L12.204 13.5053H5.78964L2.5888 8.00529L5.79599 2.49436ZM4.20354 1.57498C4.53087 1.01252 5.13498 0.666504 5.78965 0.666504L12.204 0.666504C12.8621 0.666504 13.4712 1.01608 13.8012 1.58316L17.0021 7.08319C17.3321 7.65026 17.3327 8.34837 17.0037 8.91376L13.7965 14.4247C13.4691 14.9872 12.865 15.3332 12.2104 15.3332H5.79598C5.13791 15.3332 4.5288 14.9836 4.19878 14.4165L0.997942 8.91649C0.667922 8.34941 0.667316 7.6513 0.99635 7.08592L4.20354 1.57498ZM9.00001 9.88155C10.0476 9.88155 10.8968 9.03907 10.8968 7.99981C10.8968 6.96056 10.0476 6.11808 9.00001 6.11808C7.95244 6.11808 7.10323 6.96056 7.10323 7.99981C7.10323 9.03907 7.95244 9.88155 9.00001 9.88155Z"
                    fill="#4D4D4D"
                  />
                </svg>
                설정
              </Link>
              <Link
                href="/postLike"
                className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"'
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_bd_5270_7407)">
                    <path
                      d="M8.6781 16.1342C8.53575 16.0558 8.34359 15.947 8.11767 15.8115C7.67538 15.5462 7.05845 15.1517 6.41667 14.6569C5.80141 14.1825 5.00772 13.4978 4.32727 12.6234C3.6978 11.8144 2.75 10.3125 2.75 8.29557C2.75 5.69316 4.80203 3.5835 7.33333 3.5835C8.83263 3.5835 10.1638 4.32362 11 5.46787C11.8362 4.32362 13.1674 3.5835 14.6667 3.5835C17.198 3.5835 19.25 5.69316 19.25 8.29557C19.25 10.3125 18.3022 11.8144 17.6727 12.6234C16.9923 13.4978 16.1986 14.1825 15.5833 14.6569C14.9415 15.1517 14.3246 15.5462 13.8823 15.8115C13.6564 15.947 13.4643 16.0558 13.3219 16.1342L12.8357 16.3853C11.6842 16.9801 10.3158 16.9801 9.1643 16.3853L8.6781 16.1342Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_bd_5270_7407"
                      x="-1.25"
                      y="-0.416504"
                      width="24.5"
                      height="21.248"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="2"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_5270_7407"
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
                        in2="effect1_backgroundBlur_5270_7407"
                        result="effect2_dropShadow_5270_7407"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_5270_7407"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                좋아요
              </Link>
              <LogoutButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoginDropdown;

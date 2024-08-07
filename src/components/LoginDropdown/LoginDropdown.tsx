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

              <Link
                href="/mypage"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                설정
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

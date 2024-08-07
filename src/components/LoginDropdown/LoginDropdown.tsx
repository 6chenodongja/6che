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
              <ul>
                <li>닉네임</li>
                <li>
                  <Link href={'/mypage'}>설정</Link>
                </li>
                <li>
                  <Link href={'/postLike'}>좋아요</Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoginDropdown;

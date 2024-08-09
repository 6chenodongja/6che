import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import LogoutButton from '../LogoutButton/LogoutButton';
import Link from 'next/link';
import { useUserStore } from '@/zustand/store/useUserStore';
import Image from 'next/image';

function LoginDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserStore();
  const toggleDropdown = () => setIsOpen(!isOpen);
  console.log(user);
  return (
    <div className="inline-block text-left">
      <button
        title="프로필 아이콘"
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700"
      >
        {user?.profileImage && (
          <Image
            src={user.profileImage}
            alt="프로필 이미지"
            width={24}
            height={24}
            className="rounded-full"
          />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute right-0 top-[80px] w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              <ul className="flex flex-col">
                <li>
                  {user?.profileImage && (
                    <Image
                      src={user.profileImage}
                      alt="프로필 이미지"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  )}
                  <span>{user?.nickname}님</span>
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-xl">
                  <Link href={'/mypage'}>설정</Link>
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-xl">
                  <Link href={'/postLike'}>좋아요</Link>
                </li>
                <li className="flex items-center">
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

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
  return (
    <main className="">
      <div className="inline-block ">
        <div className="w-[40px] h-[40px] shadow-[0_0_10px_0_rgba(0,0,0,0.08),0_2px_20px_0_rgba(18,18,18,0.15)] rounded-lg">
          <button
            title="프로필 아이콘"
            onClick={toggleDropdown}
            className="flex items-center justify-between bg-white rounded-md p-[7px]"
          >
            {user?.profileImage && (
              <Image
                src={user.profileImage}
                alt="프로필 이미지"
                width={24}
                height={24}
                className=""
              />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="origin-top-right absolute right-0 top-[64px] rounded-2xl shadow-lg bg-white pb-4"
            >
              <div className="mt-[16px] flex">
                <ul className="flex flex-col">
                  <li className="flex p-2">
                    {user?.profileImage && (
                      <Image
                        src={user.profileImage}
                        alt="프로필 이미지"
                        width={24}
                        height={24}
                        className="rounded-md shadow-[0_0_4px_0_rgba(18,18,18,0.1)]"
                      />
                    )}
                    <p className="flex">
                      <span className="pl-3 text-[16px]">{user?.nickname}</span>
                      <span className="text-black-600 text-[16px]">님</span>
                    </p>
                  </li>
                  <li className="flex items-center px-4 py-2 text-sm text-[#4d4d4d] hover:bg-gray-100 rounded-xl">
                    <Link href={'/mypage'} className="flex">
                      <Image
                        src="/images/auth/setting.svg"
                        alt="설정 아이콘"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      마이페이지
                    </Link>
                  </li>
                  <li className="flex items-center px-4 py-2 text-sm text-[#4d4d4d] hover:bg-gray-100 rounded-xl">
                    <Link href={'/postLike'} className="flex">
                      <Image
                        src="/images/auth/blackHeart.svg"
                        alt="좋아요 아이콘"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      좋아요
                    </Link>
                  </li>
                  <li className="flex justify-center items-center">
                    <LogoutButton className="w-[74px] h-[28px] font-[400] text-[12px] leading-[15.6px] text-[#4d4d4d] tracking-[-0.02em] hover:bg-gray-100 rounded-lg" />
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default LoginDropdown;

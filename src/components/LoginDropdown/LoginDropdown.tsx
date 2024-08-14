import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import LogoutButton from '../LogoutButton/LogoutButton';
import Link from 'next/link';
import { useUserStore } from '@/zustand/store/useUserStore';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
              className="w-[128px] h-[170px] origin-top-right absolute right-0 rounded-2xl shadow-lg bg-white/70 backdrop-blur-[10px]"
            >
              <div className="flex flex-col">
                <ul className="px-[6px] py-[16px] flex flex-col pl-[14px]">
                  <li className="flex items-center h-[34px]">
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
                      <span className="ml-[6px] mr-[2px] text-[16px]">
                        {user?.nickname}
                      </span>
                      <span className="text-black-600 text-[16px]">님</span>
                    </p>
                  </li>
                  <li className="flex justify-start items-center text-sm text-[#4d4d4d] hover:bg-[#E6E6E6]/60 focus:text-blue-400 rounded-xl h-[34px]">
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
                  <li className="flex justify-start items-center text-sm text-[#4d4d4d] hover:bg-[#E6E6E6]/60 rounded-xl h-[34px]">
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
                    <LogoutButton className="w-[74px] h-[28px] font-[400] text-[12px] leading-[15.6px] text-[#4d4d4d] tracking-[-0.02em] hover:bg-[#E6E6E6]/60 rounded-lg" />
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast"
      />
    </main>
  );
}

export default LoginDropdown;

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
    <main className="flex flex-col">
      <div className="inline-block ">
        <div className="header-avatar">
          <button
            title="프로필 아이콘"
            onClick={toggleDropdown}
            className="flex items-center justify-between w-[40px] h-[40px] bg-white rounded-md p-[2px]"
          >
            {user?.profileImage && (
              <Image
                src={user.profileImage}
                alt="프로필 이미지"
                width={34}
                height={34}
                className=""
                style={{}}
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
              className="p-[18px] origin-top-right absolute right-3 top-[65px] rounded-2xl shadow-lg bg-white/90 backdrop-blur-[5px]"
            >
              <div className="flex flex-col">
                <ul className=" w-full flex flex-col">
                  <li className="flex items-center h-[34px] gap-[6px]">
                    {user?.profileImage && (
                      <Image
                        src={user.profileImage}
                        alt="프로필 이미지"
                        width={24}
                        height={24}
                        className="rounded-md shadow-[0_0_4px_0_rgba(18,18,18,0.1)] bg-white"
                      />
                    )}
                    <p className="flex justify-center items-center gap-[2px]">
                      <span className="text-[16px] font-KR font-[500] leading-[20.8px] tracking-[-0.02px]">
                        {user?.nickname}
                      </span>
                      <span className="text-black-600 text-[16px] font-[400] font-body-KR-medium leading-[16px] tracking-[-0.02px]">
                        님
                      </span>
                    </p>
                  </li>
                  <li className="flex  justify-start items-center text-sm text-[#4d4d4d] rounded-xl hover:bg-[#ededed]/60 active:text-[#5EB0FF]/80 active:bg-black/10 h-[34px] font-KR-button font-[400] leading-[18.2px] tracking-[-0.02px]">
                    <Link href={'/mypage'} className="flex gap-2">
                      <Image
                        src="/images/auth/setting.svg"
                        alt="설정 아이콘"
                        width={18}
                        height={18}
                      />
                      마이페이지
                    </Link>
                  </li>
                  <li className="flex gap-2 justify-start items-center text-sm text-[#4d4d4d] hover:bg-[#ededed]/60 active:text-[#5EB0FF]/80 active:bg-black/10 rounded-xl h-[34px] font-KR-button font-[400] leading-[18.2px] tracking-[-0.02px]">
                    <Link href={'/postLike'} className="flex gap-2">
                      <Image
                        src="/images/auth/blackHeart.svg"
                        alt="좋아요 아이콘"
                        width={18}
                        height={18}
                      />
                      좋아요
                    </Link>
                  </li>
                  <li className="flex justify-center items-center">
                    <LogoutButton className="w-[74px] h-[28px] font-[400] text-xs leading-[15.6px] text-[#4d4d4d] tracking-[-0.02em] hover:bg-[#E6E6E6]/60 rounded-lg font-caption" />
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

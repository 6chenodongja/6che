'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUserStore } from '@/zustand/store/useUserStore';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import LogoutButton from '@/components/LogoutButton/LogoutButton';
import DeletesUserIdModalProps from '@/components/Modal/DeletesUserIdModal';

function MyPageContent() {
  const { user, clearUser } = useUserStore();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerDelete = async () => {
    try {
      const res = await axios.delete('/api/auth/deletesUserId', {
        data: { userId: user?.id },
      });
      if (res.data) {
        clearUser();
        alert('회원 탈퇴 성공 하셨습니다.');
        router.replace('/');
      }
    } catch (error) {
      console.error('회원탈퇴 실패:', error);
      alert('회원 탈퇴가 실패 되었어요.');
    } finally {
      setIsModalOpen(false);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col xl:flex p-4">
      <div className="w-full mb-3">
        <div className="flex flex-col items-start bg-white p-4 rounded-[14px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              {user?.profileImage && (
                <object
                  data={user.profileImage}
                  width={24}
                  height={24}
                  className="flex-grow-0 flex-shrink-0 rounded-[4px] shadow-[0_0_4px_0_rgba(18,18,18,0.1)]"
                />
              )}
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
                <span className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-[18px] mb:text-[20px] leading-[23.4px] tracking-[-0.36px] text-left text-[#121212]">
                  {user?.nickname}
                </span>
                <span className="flex-grow-0 flex-shrink-0 text-lg text-left text-[18px] font-normal text-[#121212]">
                  님
                </span>
              </div>
            </div>
            <div className="flex text-center py-[6px] px-3 rounded-lg bg-[#121212] hover:bg-blue-400 cursor-pointer">
              <button className="w-full h-full text-[12px] font-normal leading-[15.6px] tracking-[-0.02em] text-white">
                <Link href={'/profile'} className="w-full h-full ">
                  수정
                </Link>
              </button>
            </div>
          </div>
          <nav className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 pt-3">
            <Link
              href={'/postLike'}
              className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1.5 py-2.5 rounded-lg bg-white hover:bg-black/5 focus:bg-black/10"
            >
              <p className="flex-grow-0 flex-shrink-0 text-[14px] font-semibold text-left text-[#4d4d4d] focus:text-blue-400">
                좋아요한 코디
              </p>
              <object
                data="/images/Thermometer/arrow_right.svg"
                width={18}
                height={18}
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px]"
              />
            </Link>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <Link
                href={'/myStyle'}
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 hover:bg-black/5 focus:bg-black/10 px-1.5 py-2.5 rounded-lg focus:text-[##5EB0FFCC]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-[14px] font-semibold text-left text-[#4d4d4d] ">
                  내 코디
                </p>
                <object
                  data="/images/Thermometer/arrow_right.svg"
                  width={18}
                  height={18}
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px]"
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <nav className="drop-shadow-lg">
        <div className="px-4 py-5 rounded-[14px] bg-white">
          <div className="">
            <h1 className="text-[18px] font-semibold leading-[130%] tracking-[-0.36px] pl-1 pb-3">
              계정
            </h1>
            <div className="flex bg-[#FAFAFA] rounded-md p-3 w-full text-[16px] font-semibold leading-[130%] tracking-[-0.32px] gap-2">
              {user?.provider === 'google' && (
                <Image
                  src="/images/login/Logo_Google.svg"
                  alt="google-icon"
                  width={22}
                  height={22}
                />
              )}
              {user?.provider === 'kakao' && (
                <Image
                  src="/images/login/Logo_Kakao.svg"
                  alt="kakao-icon"
                  width={22}
                  height={22}
                />
              )}
              {user?.email}
            </div>
          </div>
          <nav className="pt-3">
            <div className="flex items-end justify-end">
              <div
                className="hover:bg-slate-50 rounded-lg "
                onClick={openModal}
              >
                <button className="text-[14px] px-3 py-2 focus:text-[#5EB0FF]/80">
                  회원탈퇴
                </button>
              </div>
              <div className="hover:bg-slate-50 rounded-lg text-[14px] px-3 py-2 ">
                <LogoutButton className="focus:text-[#5EB0FF]/80" />
              </div>
            </div>
          </nav>
        </div>
      </nav>
      {isModalOpen && (
        <DeletesUserIdModalProps
          isOpen={isModalOpen}
          onConfirm={handlerDelete}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default MyPageContent;

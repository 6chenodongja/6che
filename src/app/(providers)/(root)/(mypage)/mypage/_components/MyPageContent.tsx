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
    <div className="flex flex-col gap-3 p-4">
      <div className="w-full">
        <div className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md">
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
                <span className="flex-grow-0 flex-shrink-0 text-lg font-medium text-[18px] leading-[23.4px] tracking-[-0.36px] text-left text-[#121212]">
                  {user?.nickname}
                </span>
                <span className="flex-grow-0 flex-shrink-0 text-lg text-left text-[18px] font-normal text-[#121212]">
                  님
                </span>
              </div>
            </div>
            <div className="flex text-center py-[6px] px-3 rounded-xl bg-[#121212] hover:bg-blue-400">
              <Link href={'/profile'} className="w-full h-full" passHref>
                <button className="w-full h-full text-[12px] font-normal leading-[15.6px] tracking-[-0.02em] text-white">
                  수정
                </button>
              </Link>
            </div>
          </div>
          <nav className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
            <Link
              href={'/postLike'}
              className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1.5 py-2.5 rounded-lg bg-white hover:bg-gray-200/75"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d] focus:text-blue-400">
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
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 hover:bg-gray-200/75 px-1.5 py-2.5 rounded-lg"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
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
      <nav className="flex flex-col drop-shadow-lg">
        <div className="flex flex-col gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="">
            <h1 className="text-[18px] font-semibold leading-[130%] tracking-[-0.36px] pl-1 pb-3">
              계정
            </h1>
            <div className="flex bg-[#FAFAFA] rounded-md p-3 w-full text-[16px] font-semibold leading-[130%] tracking-[-0.32px] gap-2">
              {user?.provider === 'google' && (
                <object
                  data="/images/login/Logo_Google.svg"
                  width={22}
                  height={22}
                />
              )}
              {user?.provider === 'kakao' && (
                <object
                  data="/images/login/Logo_Kakao.svg"
                  width={22}
                  height={22}
                />
              )}
              {user?.email}
            </div>
          </div>
          <nav className="bg-slate-50">
            <div className="hover:bg-gray-200/75 focus:text-blue-400 cursor-pointer">
              <div
                className="hover:bg-gray-200/75 focus:text-blue-400"
                onClick={openModal}
              >
                <button className="text-[14px] px-3 py-2 w-full">
                  회원탈퇴
                </button>
              </div>
              <div className="text-[14px] px-3 py-2 w-full">
                <LogoutButton />
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

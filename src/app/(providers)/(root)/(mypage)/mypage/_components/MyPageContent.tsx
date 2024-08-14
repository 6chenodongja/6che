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
  const notify = () => {
    alert('준비 중인 서비스 입니다!');
  };
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
    <div className="mt-3 mb-[287px]">
      <div className="flex flex-col justify-start items-start w-72 drop-shadow-lg">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 pb-2">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[32px] h-[32px] gap-2">
              {user?.profileImage && (
                <Image
                  src={user.profileImage}
                  alt="profile-icon"
                  width={24}
                  height={24}
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-lg shadow-[0_0_4px_0_rgba(18,18,18,0.1)]"
                />
              )}
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#121212]">
                  {user?.nickname}
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#121212]">
                  님
                </p>
              </div>
            </div>
            <div className="flex text-center gap-4 w-[46px] h-[28px] rounded-lg bg-[#121212] hover:bg-blue-400">
              <Link href={'/profile'} className="w-full h-full" passHref>
                <button className="w-full h-full text-[12px] font-normal leading-[15.6px] tracking-[-0.02em] text-white">
                  수정
                </button>
              </Link>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
            <Link
              href={'/postLike'}
              className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1.5 py-2.5 rounded-lg bg-white hover:bg-gray-200/75"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d] focus:text-blue-400">
                좋아요한 게시글
              </p>
              <Image
                src="/images/Thermometer/arrow_right.svg"
                alt="arrow-icon"
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
                  내 스타일
                </p>
                <Image
                  src="/images/Thermometer/arrow_right.svg"
                  alt="arrow-icon"
                  width={18}
                  height={18}
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px]"
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-72 drop-shadow-lg mt-3">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="flex flex-col items-left self-stretch flex-grow-0 pb-2">
            <h1 className="text-[18px]">계정</h1>
            <div className="bg-[#FAFAFA] rounded-md p-3 mt-2">
              {user?.email}
            </div>
          </div>
          <nav className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
            <Link
              href={'/mypage'}
              onClick={notify}
              className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-1.5 py-2.5 rounded-lg bg-white hover:bg-gray-200/75"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d] focus:text-blue-400">
                비밀번호 변경
              </p>
              <Image
                src="/images/Thermometer/arrow_right.svg"
                alt="arrow-icon"
                width={18}
                height={18}
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px]"
              />
            </Link>
            <div className="text-sm text-left text-[#4d4d4d] flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 hover:bg-gray-200/75 focus:text-blue-400 px-1.5 py-2.5 rounded-lg cursor-pointer">
              <div className="flex justify-start items-center gap-1">
                <LogoutButton />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <div
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 hover:bg-gray-200/75 focus:text-blue-400 px-1.5 py-2.5 rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <button className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                  회원탈퇴
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
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

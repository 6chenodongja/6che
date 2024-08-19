import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/zustand/store/useUserStore'; 

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LoginModalProps = ({ isOpen, onClose }: LoginModalProps) => {
  const router = useRouter();
  const { isLoggedIn } = useUserStore(); // zustand로부터 로그인 상태를 불러옴

  // 로그인 상태 확인 및 모달 닫기
  useEffect(() => {
    if (isLoggedIn) {
      onClose(); // 로그인이 되어 있으면 모달을 자동으로 닫음
    }
  }, [isLoggedIn, onClose]);

  // 로그인 상태가 아니면 모달을 보여줌
  if (!isOpen || isLoggedIn) return null;

  const handleLoginClick = () => {
    router.replace('/login'); // 로그인 페이지로 이동
    onClose(); // 모달 닫기
  };

  const handleSignupClick = () => {
    router.replace('/signup'); // 회원가입 페이지로 이동
    onClose(); // 모달 닫기
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-70 rounded-2xl shadow-[0px_0px_2px_0px_rgba(0,0,0,0.05),4px_4px_20px_0px_rgba(0,0,0,0.05)] backdrop-blur-sm w-[281px] max-w-full h-auto p-6 z-50rounded-lg px-10 pt-10 pb-6 z-50">
        <div className="text-center">
          <button
            title="x-icon"
            onClick={onClose}
            className="absolute top-2 right-2 rounded-full flex justify-end items-end p-2 hover:bg-black/5 focus:bg-black/10"
          >
            <Image src="/x.svg" alt="close" width={24} height={24} />
          </button>
          <h2 className="text-[18px] text-center font-semibold leading-[130%] tracking-[-0.36px] font-sans text-black-700">
            로그인이 필요한 기능입니다
          </h2>
        </div>
        <div className="flex justify-center pt-[24px] gap-[11px]">
          <button
            onClick={handleSignupClick}
            className="bg-gray-200 text-[16px] font-semibold leading-[130%] tracking-[-0.32px] text-[#4D4D4D] hover:bg-blue-300 rounded-lg px-4 py-2"
          >
            회원가입
          </button>
          <button
            onClick={handleLoginClick}
            className="text-[#FFF] bg-[#121212] hover:bg-blue-300 rounded-lg px-4 py-2 font-semibold"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModalProps;

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModalProps = ({ isOpen, onClose }: LoginModalProps) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLoginClick = () => {
    router.push('/login'); // 로그인 페이지로 이동
    onClose(); // 모달 닫기
  };

  const handleSignupClick = () => {
    router.push('/signup'); // 회원가입 페이지로 이동
    onClose(); // 모달 닫기
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-lg shadow-lg w-[281px] h-[206px] relative z-[10000]">
        <button
          title="x-icon"
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <Image src="/x.svg" alt="close" width={24} height={24} />
        </button>
        <div className="p-4 text-center">
          <h2 className="text-[18px] font-KR font-semibold text-[#4D4D4D] tracking-[-0.36px]">
            로그인이 필요한 기능입니다.
          </h2>
        </div>
        <div className="flex justify-center mt-[24px] space-x-4">
          <button
            onClick={handleSignupClick} // 회원가입 버튼 클릭 시
            className="text-[#FFF] rounded-lg p-[14px] font-semibold w-[96px] h-[49px] bg-[#E6E6E6]/60 hover:bg-blue-300"
          >
            회원가입
          </button>
          <button
            onClick={handleLoginClick} // 로그인 버튼 클릭 시
            className="text-[#FFF] rounded-lg p-[14px] font-semibold w-[96px] h-[49px] bg-[#121212] hover:bg-blue-300"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModalProps;

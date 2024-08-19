import Image from 'next/image';
import React from 'react';

interface DeletesUserIdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeletesUserIdModalProps = ({
  isOpen,
  onClose,
  onConfirm,
}: DeletesUserIdModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-70 rounded-2xl shadow-[0px_0px_2px_0px_rgba(0,0,0,0.05),4px_4px_20px_0px_rgba(0,0,0,0.05)] backdrop-blur-sm w-[281px] max-w-full h-auto p-6 z-50rounded-lg px-10 pt-10 pb-6 z-50">
        <button
          title="x-icon"
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full flex justify-end items-end p-2 hover:bg-black/5 focus:bg-black/10"
        >
          <Image src="/x.svg" alt="close" width={24} height={24} className="" />
        </button>
        <div className="text-center">
          <h2 className="text-[18px] font-KR font-semibold text-[#4D4D4D] tracking-[-0.36px]">
            탈퇴하시겠습니까?
          </h2>
          <div className="text-[14px] text-[#4D4D4D] font-KR font-medium leading-[21px] tracking-[-1.2px] pt-1 pb-6">
            <p>탈퇴 시 좋아요한 코디, 내 코디</p>
            <p>기록은 복구할 수 없습니다.</p>
          </div>
        </div>
        <div className="flex justify-center mb-">
          <button
            onClick={onConfirm}
            className="text-[#FFF] rounded-lg py-[14px] px-3 font-semibold bg-[#ff4632e3] hover:bg-blue-300"
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletesUserIdModalProps;

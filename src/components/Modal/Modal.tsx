import Image from 'next/image';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[281px] h-[206px] relative z-50">
        <button onClick={onClose} className="absolute top-2 right-2">
          <Image src="/x.svg" alt="close" width={24} height={24} />
        </button>
        <div className="p-4 text-center">
          <h2 className="text-[18px] font-KR font-semibold text-[#4D4D4D] tracking-[-0.36px]">
            탈퇴 하시겠습니까?
          </h2>
          <p className="text-[14px] text-[#4D4D4D] font-KR font-medium leading-[21px] tracking-[-1.2px] mt-2">
            탈퇴 시 좋아요한 코디, 내 코디 기록은 복구할 수 없습니다.
          </p>
        </div>
        <div className="flex justify-center mt-[24px]">
          <button
            onClick={onConfirm}
            className="text-[#FFF] rounded-lg p-[14px] font-semibold w-[96px] h-[49px] bg-[#ff4632e3] hover:bg-blue-300"
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

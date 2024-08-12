import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg  w-[281px] h-[185px] p-[40px]">
        <h2 className="text-[18px] font-KR font-semibold text-[#4D4D4D] tracking-[-0.36px] self-stretch text-center leading-[23.4px] gap-[4px]">
          회원 탈퇴
          <p className="text-[14px] text-[#4D4D4D] font-KR font-medium leading-[21px] tracking-[-1.2px] self-stretch whitespace-nowrap text-center mt-[4px]">
            정말 탈퇴하시겠어요?
          </p>
        </h2>
        <span className="grid grid-cols-2 gap-[10px] mt-[21px]">
          <button
            onClick={onClose}
            className="bg-black-100 text-[#4D4D4D] font-KR rounded-lg p-[14px] font-semibold"
          >
            이전으로
          </button>
          <button
            onClick={onConfirm}
            className="text-[#FFF] rounded-lg p-[14px] font-semibold hover:bg-[]"
            style={{
              backgroundColor: 'rgba(255, 71, 50, 0.85)',
            }}
          >
            삭제
          </button>
        </span>
      </div>
    </div>
  );
};

export default Modal;

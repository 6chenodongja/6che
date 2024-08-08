import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>정말로 회원 탈퇴하시겠습니까?</p>
        <button onClick={onConfirm}>삭제</button>
        <button onClick={onClose}>이전으로</button>
      </div>
    </div>
  );
};

export default Modal;

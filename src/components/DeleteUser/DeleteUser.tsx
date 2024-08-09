import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '../Modal/Modal';
import { createSupabaseClientForUserDeletion } from '@/supabase/server';

const DeleteUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const supabase = createSupabaseClientForUserDeletion();
  // 모달 열기
  const handleDeleteUserClick = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 사용자 삭제 확인
  const handleUserDeletionConfirm = async () => {
    const { data, error } = await supabase.auth.admin.deleteUser(
      '715ed5db-f090-4b8c-a067-640ecee36aa0',
    );
  };

  return (
    <div>
      <button onClick={handleDeleteUserClick}>회원탈퇴</button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleUserDeletionConfirm}
      />
    </div>
  );
};

export default DeleteUser;

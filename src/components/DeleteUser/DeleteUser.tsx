import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '../Modal/Modal';
import {
  createClient,
  createSupabaseClientForUserDeletion,
} from '@/supabase/server';
import { useUserStore } from '@/zustand/store/useUserStore';

function DeleteUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(false);
  const supabase = createSupabaseClientForUserDeletion();
  const { user } = useUserStore();

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
    if (!user) return;
    const { data, error } = await supabase.auth.admin.deleteUser(user.id);
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
}

export default DeleteUser;

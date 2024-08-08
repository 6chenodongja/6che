import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from './Modal'; // 모달 컴포넌트 임포트
// import { supabase } from '../utils/supabaseClient'; // Supabase 클라이언트 임포트

const DeleteUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

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
    const user = supabase.auth.user();
    if (user) {
      const { error } = await supabase.auth.api.deleteUser(user.id);

      if (error) {
        console.error('Error deleting user:', error);
        return;
      }

      // 삭제 성공 시 모달 닫기 및 메인 페이지로 이동
      alert('회원 탈퇴가 완료되었습니다.');
      setIsModalOpen(false);
      router.push('/'); // 메인 페이지로 이동
    }
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

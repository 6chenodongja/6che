import { DOMAttributes, useState } from 'react';

function DeleteUser() {
  const [deleteUser, setDeleteUser] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  /**
   * 1. 회원탈퇴 버튼을 클릭 했을 때, 모달이 열림
   * 2. 모달 안에는 한 번 더 물어보는 안내 메세지와 이전으로 돌아가는 버튼, 삭제하는 버튼이 있어야함
   * 3. 상단에 모달 닫기 버튼도
   *
   * 탈퇴 버튼을 누른 뒤에 회원 탈퇴가 완료 되었다는 알람과 함께 메인 페이지로 이동
   *
   */
  // 모달 열기
  const handleDeleteUserClick = () => {
    setIsModalOpen(true);
  };

  // 삭제 버튼
  const handleUserDeletionConfirm = () => {
    setIsModalOpen(false);
  };
  // 이전 페이지로 돌아가는 버튼
  const handlePreviously = () => {};
  // supabase user 탈퇴 함수
  //   const { data, error } = await supabase.auth.admin.deleteUser(
  //     '715ed5db-f090-4b8c-a067-640ecee36aa0'
  //   )
  return <button>회원탈퇴</button>;
}

export default DeleteUser;

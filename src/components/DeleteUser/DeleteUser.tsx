'use client';

import { useUserStore } from '@/zustand/store/useUserStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function DeleteUser() {
  const { user } = useUserStore();
  const router = useRouter();
  const handlerDelete = async () => {
    try {
      const res = await axios.delete('/api/auth/deletUserId', {
        data: { userId: user?.id },
      });
      alert('회원 탈퇴 성공 하셨습니다.');
      router.replace('/');
    } catch (error) {
      console.error('회원탈퇴 실패:', error);
      alert('회원 탈퇴를 실패 했어요.');
    }
  };
  return <button onClick={handlerDelete}>회원탈퇴</button>;
}

export default DeleteUser;

'use client';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useUserStore } from '@/zustand/store/useUserStore';
import axios from 'axios';

function DeleteUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(false);
  const { user } = useUserStore();
  const handlerDelete = async () => {
    try {
      const res = await axios.delete('/api/auth/deletUserId', {
        data: { userId: user?.id },
      });
    } catch (error) {
      // console.error('로그인 중 오류 발생:', error);
      // alert('아이디 또는 비밀번호는 다시 입력해주세요!');
    }
  };
  const test = () => {};
  return <Modal isOpen={true} onConfirm={handlerDelete} onClose={test} />;
}

export default DeleteUser;

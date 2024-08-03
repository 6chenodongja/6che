'use client';

import { useEffect } from 'react';
import { sendEmail } from '@/app/(providers)/lib/action';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [actionState, formAction] = useFormState(sendEmail, null);
  const router = useRouter();

  useEffect(() => {
    if (actionState !== null) {
      alert('메일이 발송되었습니다');
      router.push('/list');
    }
  }, [actionState]);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-10 mx-w-[320px] w-80 h-[600px] overflow-hidden bg-[#FAFAFA] max-w-sw mx-auto">
        <div className="mt-[100px] flex justify-center items-center">
          <label htmlFor="name">이름: </label>
          <input type="text" id="name" name="name" placeholder="이름" />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="email">이메일: </label>
          <input type="email" id="email" name="email" placeholder="이메일" />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="subject">보낼 내용: </label>
          <textarea placeholder="보낼 내용" id="subject" name="subject" />
        </div>
        <button type="submit">전송</button>
      </div>
    </form>
  );
};

export default Form;

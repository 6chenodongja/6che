'use client';

import { sendEmail } from '@/app/(providers)/lib/action';
import { useFormState } from 'react-dom';

const Form = () => {
  const [actionState, formAction] = useFormState(sendEmail, null);
  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4 mx-w-[320px] w-80 h-[747px] relative overflow-hidden bg-[#FAFAFA] max-w-sw mx-auto">
        <div>
          <label htmlFor="name">이름: </label>
          <input type="text" id="name" name="name" placeholder="이름" />
        </div>
        <div>
          <label htmlFor="email">이메일: </label>
          <input type="email" id="email" name="email" placeholder="이메일" />
        </div>
        <div>
          <label htmlFor="subject">보낼 내용: </label>
          <textarea placeholder="보낼 내용" id="subject" name="subject" />
        </div>
      </div>
      <button type="submit">전송</button>
    </form>
  );
};
export default Form;

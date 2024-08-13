import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabase/client';
import { ToastComponent, showToast } from '../../../../(components)/Toast';

const FindPwForm = () => {
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('gmail.com');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullEmail = `${email}@${domain}`;

    try {
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('email', fullEmail)
        .single();

      if (userError || !userData) {
        showToast(
          <>
            미가입 이메일입니다.
            <button
              onClick={() => router.push('/signup')}
              className="text-[#4d4d4d] font-caption font-normal text-xs no-underline"
              style={{
                marginLeft: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              회원가입
            </button>
          </>,
          'error',
        );
        return;
      }

      const isLocalhost = window.location.hostname === 'localhost';
      const redirectToUrl = isLocalhost
        ? 'http://localhost:3000/reset-pw'
        : 'https://oncodi.vercel.app/reset-pw';

      const { error } = await supabase.auth.resetPasswordForEmail(fullEmail, {
        redirectTo: redirectToUrl,
      });

      if (error) {
        if (error.message.includes('60 seconds')) {
          showToast('60초 후에 다시 시도해 주세요.', 'error');
        } else {
          showToast(error.message, 'error');
        }
      } else {
        showToast('비밀번호 재설정 링크가 이메일로 전송되었습니다.', 'success');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('서버와의 통신 중 오류가 발생했습니다.', 'error');
    }
  };

  return (
    <div className="w-full max-w-[320px] mx-auto flex flex-col items-center min-h-[636px] bg-[#fafafa] mt-10 px-4">
      <ToastComponent />
      <div className="w-full">
        <h2 className="text-xl text-center font-headline-04  text-[20px] mb-[40px] font-bold">
          아이디 비밀번호 찾기
        </h2>
        {/* <div
          className="flex justify-center p-4 bg-[#fafafa] border-1 border-black-200 rounded-lg mb-[37px] space-x-4 shadow-sm"
          style={{
            borderRadius: '8px',
            opacity: 'var(--sds-size-stroke-border)',
            background: 'var(--text-box, rgba(255, 255, 255, 0.50))',
            boxShadow:
              '0px 0px 1px 0px rgba(0, 0, 0, 0.10), 0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            width: '288px',
            padding: '4px',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <button
            type="button"
            className="w-[141px] h-[44px] py-1 bg-white text-text-default rounded-lg text-[14px] font-KR-button hover:bg-black-100 hover:text-semantic-color-bg-brand-b active:bg-[#E0E0E0] active:text-blue-400"
            onClick={() => router.push('/find-id')}
          >
            아이디
          </button>
          <button
            type="button"
            className="w-[141px] h-[44px] py-2 bg-black text-white rounded-lg text-[14px] font-KR-button"
            onClick={() => router.push('/find-pw')}
          >
            비밀번호
          </button>
        </div> */}

        <div
          className="flex justify-center p-1 bg-[#fafafa] border-1 border-black-200 rounded-lg mb-[37px] shadow-sm"
          style={{
            borderRadius: '8px',
            background: 'var(--text-box, rgba(255, 255, 255, 0.50))',
            boxShadow:
              '0px 0px 1px 0px rgba(0, 0, 0, 0.10), 0px 2px 10px 0px rgba(0, 0, 0, 0.05)',
            width: '288px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <button
            type="button"
            className="w-[141px] h-[44px] bg-white text-text-default rounded-lg text-[14px] font-KR-button hover:bg-black-100 hover:text-semantic-color-bg-brand-b active:bg-[#E0E0E0] active:text-blue-400"
            style={{
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
            }}
            onClick={() => router.push('/find-id')}
          >
            아이디
          </button>
          <button
            type="button"
            className="w-[141px] h-[44px] bg-black text-white rounded-lg text-[14px] font-KR-button"
            style={{
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
            }}
            onClick={() => router.push('/find-pw')}
          >
            비밀번호
          </button>
        </div>

        <div className="mb-1.5">
          <h3 className="not-italic font-medium lineHeight-130% font-subtitle-KR-medium text-base ">
            비밀번호 찾기
          </h3>
          <p className="text-gray-600 mb-9 font-body-KR-small text-[14px]">
            가입된 이메일로 비밀번호 재설정 링크를 보내드립니다
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-text-default font-subtitle-KR-small mb-1.5 font-medium not-italic text-sm leading-5 tracking-tight"
            >
              이메일
            </label>
            <div className="flex items-center mt-2 mb-20 space-x-1.5 text-black">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                style={{ width: '141px', height: '48px' }}
              />
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="p-2 border-1 border-black-500 rounded-lg font-[16px] hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                style={{ width: '141px', height: '48px' }}
              >
                <option value="gmail.com">@gmail.com</option>
                <option value="naver.com">@naver.com</option>
                <option value="daum.net">@daum.net</option>
                <option value="nate.com">@nate.com</option>
                <option value="icloud.com">@icloud.com</option>
                <option value="hanmail.net">@hanmail.net</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-lg ${
              email && domain !== 'select'
                ? 'bg-black text-white hover:bg-blue-500'
                : 'bg-black-100 text-black-300'
            }`}
            disabled={!email || domain === 'select'}
          >
            링크 보내기
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindPwForm;

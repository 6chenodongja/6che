'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FindIdForm = () => {
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('gmail.com');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullEmail = `${email}@${domain}`;

    try {
      const response = await fetch('/api/auth/find-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: fullEmail }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push(
          `/email-confirmation?email=${encodeURIComponent(fullEmail)}&status=registered`,
        );
      } else {
        router.push(
          `/email-confirmation?email=${encodeURIComponent(fullEmail)}&status=not_registered`,
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버와의 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="w-full max-w-[320px] mx-auto flex flex-col items-center min-h-[636px] bg-[#fafafa] mt-10 px-4">
      <div className="w-full">
        <h2 className="text-xl text-center font-headline-04  text-[20px] mb-[40px] font-bold">
          아이디 비밀번호 찾기
        </h2>
        <div
          className="flex justify-center p-1 bg-[#fafafa] border border-gray-300 rounded-lg mb-[37px] shadow-sm"
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
            className="w-[141px] h-[44px] bg-black text-white rounded-lg text-[14px] font-normal font-KR-button"
            style={{
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
            }}
          >
            아이디
          </button>

          <button
            type="button"
            className="w-[141px] h-[44px] bg-white text-text-default rounded-lg font-normal text-[14px] font-KR-button hover:bg-black-100 hover:text-semantic-color-bg-brand-b active:bg-[#E0E0E0] active:text-blue-400"
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
          <h3 className="not-italic font-bold lineHeight-130% font-subtitle-KR-medium text-base ">
            아이디 찾기
          </h3>
          <p className="text-gray-600 mb-9 font-body-KR-small text-[14px] mt-1.5">
            이메일을 입력하시면 가입된 이메일인지 확인이 가능합니다
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-text-default font-subtitle-KR-small mb-1.5 font-semibold not-italic text-sm leading-5 tracking-tight"
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
            className={`w-full py-2 rounded-lg font-button ${
              email && domain !== 'select'
                ? 'bg-black text-white hover:bg-blue-400 active:bg-[#73aee7]'
                : 'bg-black-100 text-black-300'
            }`}
            disabled={!email || domain === 'select'}
            style={{ width: '288px', height: '49px' }}
          >
            계정 확인
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindIdForm;

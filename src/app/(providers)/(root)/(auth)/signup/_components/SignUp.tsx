'use client';

import { createClient } from '@/supabase/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { emailDomains } from '@/utils/emailDomains';
import { useSignUpForm } from 'hooks/useSignUpForm';

function SingUp() {
  const {
    nickname,
    emailId,
    emailDomain,
    customEmailDomain,
    password,
    passwordConfirm,
    isOver14,
    error,
    isNicknameValid,
    isNicknameChecked,
    nicknameMessage,
    isLoading,
    setEmailId,
    setEmailDomain,
    setCustomEmailDomain,
    setIsOver14,
    handleChange,
    handleEmailDomainChange,
    checkNickname,
    isFormValid,
  } = useSignUpForm();

  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isNicknameChecked) {
      alert('닉네임 중복 확인을 해주세요.');
      return;
    }
    if (
      emailId === '' ||
      (emailDomain === '직접 입력' && customEmailDomain === '') ||
      password === '' ||
      passwordConfirm === ''
    ) {
      alert('모든 항목을 입력 해 주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    const email = `${emailId}@${emailDomain === '직접 입력' ? customEmailDomain : emailDomain}`;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname: nickname,
        },
      },
    });

    if (error) {
      return alert(error.message);
    }

    alert('회원가입이 완료 되었습니다.');

    router.replace('/singUpDone');
  };

  return (
    <main className="container h-full flex flex-col items-center justify-center bg-white">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          회원가입
        </h1>
        <div className="mb-4">
          <label className="block text-lg text-black mb-2">닉네임</label>
          <div className="flex">
            <input
              type="text"
              maxLength={10}
              onChange={handleChange('nickname')}
              value={nickname}
              placeholder="닉네임을 입력해 주세요"
              className={`flex-grow h-10 px-3 rounded-l-lg border ${error.nickname ? 'border-red-500' : 'border-gray-300'}`}
            />
            <button
              type="button"
              onClick={() => checkNickname(nickname)}
              disabled={!isNicknameValid || isLoading}
              className={`w-24 h-10 rounded-r-lg text-white ${isNicknameValid && !isLoading ? 'bg-black' : 'bg-gray-200'}`}
            >
              {isLoading ? '확인 중...' : '중복확인'}
            </button>
          </div>
          {error.nickname && (
            <p className="text-red-500 mt-2">{error.nickname}</p>
          )}
          {!error.nickname && isNicknameChecked && (
            <p className="text-green-500 mt-2">{nicknameMessage}</p>
          )}
          {!error.nickname && !isNicknameChecked && (
            <p className="text-gray-500 mt-2">최대 10글자</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-lg text-black mb-2">이메일</label>
          <div className="flex">
            <input
              type="text"
              onChange={(e) => {
                setEmailId(e.target.value);
                handleChange('email')(e);
              }}
              value={emailId}
              placeholder="아이디"
              className="flex-grow h-10 px-3 rounded-l-lg border border-gray-300"
            />
            <span className="self-center px-2">@</span>
            {emailDomain === '직접 입력' ? (
              <input
                type="text"
                onChange={(e) => {
                  setCustomEmailDomain(e.target.value);
                  handleChange('email')(e);
                }}
                value={customEmailDomain}
                placeholder="도메인 입력"
                className="w-40 h-10 px-3 rounded-r-lg border border-gray-300"
              />
            ) : (
              <select
                title="email select"
                onChange={handleEmailDomainChange}
                value={emailDomain}
                className="w-40 h-10 px-3 rounded-r-lg border border-gray-300"
              >
                {emailDomains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
                <option value="직접 입력">직접 입력</option>
              </select>
            )}
          </div>
          {error.email && <p className="text-red-500 mt-2">{error.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-lg text-black mb-2">비밀번호</label>
          <input
            type="password"
            onChange={handleChange('password')}
            value={password}
            placeholder="비밀번호"
            className="w-full h-10 px-3 rounded-lg border border-gray-300"
          />
          {error.password && (
            <p className="text-red-500 mt-2">{error.password}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-lg text-black mb-2">비밀번호 확인</label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={handleChange('passwordConfirm')}
            placeholder="비밀번호 확인"
            className="w-full h-10 px-3 rounded-lg border border-gray-300"
          />
          {error.passwordConfirm && (
            <p className="text-red-500 mt-2">{error.passwordConfirm}</p>
          )}
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="over14"
            checked={isOver14}
            onChange={(e) => setIsOver14(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="over14" className="text-gray-700">
            [필수] 만 14세 이상입니다.
          </label>
        </div>
        <button
          type="submit"
          className={`w-full h-10 rounded-lg text-white ${isFormValid ? 'bg-black' : 'bg-gray-200'}`}
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </form>
    </main>
  );
}

export default SingUp;

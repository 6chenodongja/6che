'use client';

import { createClient } from '@/supabase/client';
import { useRouter } from 'next/navigation';
import { emailDomains } from '@/utils/emailDomains';
import { useSignUpForm } from 'hooks/useSignUpForm';
import { useUserStore } from '@/zustand/store/useUserStore';

function SingUp() {
  const {
    nickname,
    emailId,
    emailDomain,
    customEmailDomain,
    password,
    passwordConfirm,
    isOver,
    error,
    isNicknameValid,
    isNicknameChecked,
    nicknameMessage,
    setEmailId,
    setEmailDomain,
    setCustomEmailDomain,
    setIsOver,
    handleChange,
    handleEmailDomainChange,
    checkNickname,
    isFormValid,
  } = useSignUpForm();

  const supabase = createClient();
  const router = useRouter();
  const { setUser } = useUserStore();

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
          name: nickname,
          avatar: '/images/Weather/sun.svg',
        },
      },
    });
    if (data.user) {
      setUser({
        id: data.user.id,
        nickname: data.user.user_metadata.name,
        email: data.user.user_metadata.email,
        provider: '',
        profileImage: data.user.user_metadata.avatar,
      });
    }

    if (error) {
      return alert('이미 가입한 계정의 이메일이에요');
    }

    alert('회원가입이 완료 되었습니다.');

    router.replace('/signUpDone');
  };

  return (
    <main className="container flex flex-col items-center w-full py-8 px-4">
      <form onSubmit={onSubmit} className="flex flex-col">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          회원가입
        </h1>
        <div className="">
          <label className="text-lg text-black mb-2">닉네임</label>
          <div className="flex gap-1">
            <input
              type="text"
              maxLength={10}
              onChange={handleChange('nickname')}
              value={nickname}
              placeholder="닉네임을 입력해주세요"
              className={`flex-grow h-12 p-4 rounded-lg border border-[#808080] `}
            />
            <button
              type="button"
              onClick={() => checkNickname(nickname)}
              className={`w-[54px] font-xs h-12 rounded-lg text-white ${isNicknameValid ? 'bg-black' : 'bg-black-100 text-black-300'}`}
            >
              {isNicknameValid ? '재확인' : '중복확인'}
            </button>
          </div>
          {error.nickname && (
            <p className="text-red-500 mt-2">{error.nickname}</p>
          )}
          {!error.nickname && isNicknameChecked && (
            <p className="text-black-700 mt-2">{nicknameMessage}</p>
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
            {emailDomain === '직접 입력' ? (
              <input
                type="text"
                onChange={(e) => {
                  setCustomEmailDomain(e.target.value);
                  handleChange('email')(e);
                }}
                value={customEmailDomain}
                placeholder="도메인 입력"
                className={`w-40 h-10 px-3 rounded-r-lg border border-gray-300 <span className="self-center px-2">@</span>`}
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
            checked={isOver}
            onChange={(e) => setIsOver(e.target.checked)}
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

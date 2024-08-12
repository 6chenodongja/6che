'use client';

import { createClient } from '@/supabase/client';
import { useRouter } from 'next/navigation';
import { emailDomains } from '@/utils/emailDomains';
import { useSignUpForm } from 'hooks/useSignUpForm';
import { useUserStore } from '@/zustand/store/useUserStore';
import Image from 'next/image';

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
        id: '',
        nickname: data.user.user_metadata.name,
        email: '',
        provider: '',
        profileImage: '',
      });
    }

    if (error) {
      return alert('이미 가입한 계정의 이메일이에요');
    }

    alert('회원가입이 완료 되었습니다.');

    router.replace('/signUpDone');
  };

  return (
    <main className="flex items-center space-x-2 bg-white bg-opacity-30 pt-[64px] pb-[100px] px-4">
      <form onSubmit={onSubmit} className="">
        <h1 className="text-[20px] text-center text-[#121212] font-bold leading-[130%] tracking-[-0.4px] mb-5">
          회원가입
        </h1>
        <div className="">
          <div className="grid grid-cols-3 gap-2">
            <label className="col-span-2 text-[14px] leading-[150%] ml-[2px] text-[#4D4D4D]">
              닉네임
            </label>
            <input
              type="text"
              maxLength={10}
              onChange={handleChange('nickname')}
              value={nickname}
              className="col-span-2 w-[288px] h-[48px] border border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4"
            />
            {/* <button
              type="button"
              onClick={() => checkNickname(nickname)}
              className={`col-span-1 w-[56px] h-[48px] text-[12px]  text-center text-[#B3B3B3] rounded-lg ml-[35px]  ${isNicknameValid ? 'bg-[#121212] text-white' : 'bg-[#E6E6E6]'}`}
            >
              {isNicknameValid ? '재확인' : '중복확인'}
            </button> */}
          </div>
          {error.nickname && (
            <p className="text-red-950 mt-2">{error.nickname}</p>
          )}
          {!error.nickname && isNicknameChecked && (
            <p className="text-red-950 mt-2">{nicknameMessage}</p>
          )}
          {!error.nickname && !isNicknameChecked && (
            <p className="text-black-700 mt-[7px] text-[12px] flex">
              <Image
                src="images/ExclamationMarks/ExclamationMarks.svg"
                alt=""
                width={12}
                height={12}
                className="mr-[3px]"
              />
              최대 10글자
            </p>
          )}
        </div>
        <div className="">
          <label className="font-medium text-sm leading-[21px] tracking-[-0.02em] text-[#4d4d4d]">
            이메일
          </label>
          <div className="">
            <input
              type="text"
              onChange={(e) => {
                setEmailId(e.target.value);
                handleChange('email')(e);
              }}
              value={emailId}
              className="w-[141px] h-[48px] p-2 border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4 mr-[6px]"
            />
            {emailDomain === '직접 입력' ? (
              <input
                type="text"
                onChange={(e) => {
                  setCustomEmailDomain(e.target.value);
                  handleChange('email')(e);
                }}
                value={customEmailDomain}
                className="w-[141px] h-[48px] p-2 border-1 border-black-500 rounded-lg font-[16px] hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              />
            ) : (
              <select
                title="email select"
                onChange={handleEmailDomainChange}
                value={emailDomain}
                className="w-[141px] h-[48px] p-2 border-1 border-black-500 text-bl rounded-lg font-[16px] hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              >
                {emailDomains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            )}
          </div>
          {/* {error.email && <p className="text-red-500 mt-2">{error.email}</p>} */}
        </div>
        <div className="mt-2 text-[#4D4D4D]">
          <label className="w-[39px] h-[21px] text-[14px] leading-[150%]">
            비밀번호
          </label>
          <input
            type="password"
            onChange={handleChange('password')}
            value={password}
            className="w-[288px] h-[48px] border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4"
          />
          {error.password && <p className="">{error.password}</p>}
        </div>
        <div className="mt-2 text-[#4D4D4D]">
          <label className="w-[39px] h-[21px] text-[14px] leading-[150%]">
            비밀번호 확인
          </label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={handleChange('passwordConfirm')}
            className="w-[288px] h-[48px] border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4"
          />
          {error.passwordConfirm && (
            <p className="text-red-500 mt-2">{error.passwordConfirm}</p>
          )}
        </div>
        <div className="mt-[49px] mb-[10px] flex">
          <input
            type="checkbox"
            id="over14"
            checked={isOver}
            onChange={(e) => setIsOver(e.target.checked)}
            className="w-[18px] h-[18px]"
          />
          <label htmlFor="over14" className="text-[14px] ml-[6px]">
            [필수] 만 14세 이상입니다.
          </label>
        </div>
        <button
          type="submit"
          className={`w-[288px] h-[49px] rounded-lg ${isFormValid ? 'bg-[#121212] text-white' : 'bg-black-100 text-black-300'}`}
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </form>
    </main>
  );
}

export default SingUp;

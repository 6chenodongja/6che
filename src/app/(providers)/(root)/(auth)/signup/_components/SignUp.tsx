'use client';
import { useRouter } from 'next/navigation';
import { useSignUpForm } from 'hooks/useSignUpForm';
import Image from 'next/image';
import axios from 'axios';
import { useUserStore } from '@/zustand/store/useUserStore';
import { useEffect, useState } from 'react';

function SingUp() {
  // const [isDesktop, setIsDesktop] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktop(window.innerWidth >= 768);
  //   };
  //   handleResize();
  // }, []);

  const {
    nickname,
    emailId,
    emailDomain,
    customEmailDomain,
    password,
    passwordConfirm,
    isOver,
    error,
    // isNicknameValid,
    isNicknameChecked,
    // nicknameMessage,
    setEmailId,
    setEmailDomain,
    setCustomEmailDomain,
    setIsOver,
    handleChange,
    // handleEmailDomainChange,
    // checkNickname,
    isFormValid,
  } = useSignUpForm();
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

    const selectedEmailDomain =
      emailDomain === '직접 입력' ? customEmailDomain : emailDomain;
    const email = `${emailId}@${selectedEmailDomain}`;

    try {
      const response = await axios.post('/api/auth/email/sign-up', {
        email,
        password,
        nickname,
      });

      if (response.data) {
        const { user } = response.data;

        setUser({
          id: user.id,
          nickname: user.user_metadata.name,
          email: user.email,
          provider: user.app_metadata.provider,
        });
        router.replace('/signUpDone');
      }
    } catch (error) {
      console.error('회원가입을 실패 했어요', error);
    }
  };

  return (
    <main className=" flex flex-col justify-center items-center w-full min-h-screen">
      <form
        onSubmit={onSubmit}
        className=" auth-mb-container auth-pc-container w-full h-full flex-col rounded-3xl"
      >
        <h1 className="mem-text text-[20px] text-center text-[#121212] font-bold leading-[130%] tracking-[-0.4px]">
          회원가입
        </h1>
        <div className=" flex flex-col items-center">
          <div className="nickbox">
            <label
              className={`nick-inputbox  text-[14px] leading-[150%] ml-[2px] ${
                error.nickname ? 'text-[#FF4732]/85' : 'text-[#808080]'
              }`}
            >
              닉네임
            </label>
            <input
              type="text"
              onChange={handleChange('nickname')}
              value={nickname}
              className={`nick-inputbox w-full h-[48px] border hover:border-blue-500 ${
                error.nickname ? 'border-[#FF4732]/85' : 'border-[#808080]'
              } rounded-lg focus:outline-none pl-4`}
            />
          </div>
          {error.nickname && (
            <p className="unavailable-text mt-2 text-[12px] flex text-[#FF4732]/85">
              <Image
                src="images/ExclamationMarks/Unavailable.svg"
                alt=""
                width={12}
                height={12}
                className=""
              />
              {error.nickname}
            </p>
          )}
          {/* {!error.nickname && isNicknameChecked && (
            <p className="ten-text mt-2 text-[12px] text-black-700">
              {nicknameMessage}
            </p>
          )} */}
          {!error.nickname && (
            <p className="ten-text text-black-700 mt-[7px] text-[12px] flex">
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
          <div className="meilbox flex flex-col">
            <label className="emailtext w-full font-medium text-sm leading-[21px] tracking-[-0.02em] text-[#4d4d4d]">
              이메일
            </label>
            <div className="meilinputbox flex items-center justify-center">
              <input
                type="text"
                onChange={(e) => {
                  setEmailId(e.target.value);
                  handleChange('email')(e);
                }}
                value={emailId}
                className="w-full h-[48px] py-3 px-4 border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none pl-4 mr-[6px]"
              />
              {emailDomain === '직접 입력' ? (
                <input
                  type="text"
                  onChange={(e) => {
                    setCustomEmailDomain(e.target.value);
                    handleChange('email')(e);
                  }}
                  value={customEmailDomain}
                  placeholder="example.com"
                  className="   border-1 border-black-500 text-bl rounded-lg font-[16px] hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                />
              ) : (
                <select
                  title="이메일 선택"
                  onChange={(e) => setEmailDomain(e.target.value)}
                  value={emailDomain}
                  className="w-full h-[48px] py-3 px-4 border-1 border-black-500 text-bl rounded-lg font-[16px] hover:border-blue-500 focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="gmail.com" className="cursor-pointer">
                    @gmail.com
                  </option>
                  <option value="naver.com" className="cursor-pointer">
                    @naver.com
                  </option>
                  <option value="daum.net" className="cursor-pointer">
                    @daum.net
                  </option>
                  <option value="nate.com" className="cursor-pointer">
                    @nate.com
                  </option>
                  <option value="icloud.com" className="cursor-pointer">
                    @icloud.com
                  </option>
                  <option value="hanmail.net" className="cursor-pointer">
                    @hanmail.net
                  </option>
                  <option value="직접 입력" className="">
                    직접 입력
                  </option>
                </select>
              )}
            </div>
          </div>
          <div className="passwordbox">
            <label
              className={`text-[14px] leading-[150%] ml-[2px] ${
                error.password ? 'text-[#FF4732]/85' : 'text-[#808080]'
              }`}
            >
              비밀번호
            </label>
            <input
              type="password"
              onChange={handleChange('password')}
              value={password}
              className={`password-input-box w-full h-[48px] py-3 px-4 border hover:border-blue-500 ${
                error.password ? 'border-[#FF4732]/85' : 'border-[#808080]'
              } rounded-lg focus:outline-none pl-4`}
            />
          </div>
          {error.password && (
            <p className="pass-error mt-2 text-[12px] flex text-[#FF4732]/85">
              {error.password}
            </p>
          )}
          {/* {!error.password && password && (
            <p className="mt-2 text-[12px] text-black-700">{error.password}</p>
          )} */}
          {!error.password && !password && (
            <p className="pass-text text-black-700 mt-[7px] text-[12px] flex">
              <Image
                src="images/ExclamationMarks/ExclamationMarks.svg"
                alt=""
                width={12}
                height={12}
                className="mr-[3px]"
              />
              특수문자,대문자 포함 8자 이상
            </p>
          )}
          <div className="password2-input-box mt-2 text-[#4D4D4D]">
            <label
              className={`unavailable-text text-[14px] leading-[150%] ml-[2px] ${error.passwordConfirm ? 'text-[#FF4732]/85' : 'text-[#808080]'}`}
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              value={passwordConfirm}
              onChange={handleChange('passwordConfirm')}
              className={`py-3 px-4 w-full h-[48px] border hover:border-blue-500 ${
                error.passwordConfirm
                  ? 'border-[#FF4732]/85'
                  : 'border-[#808080]'
              } rounded-lg focus:outline-none pl-4`}
            />
            {error.passwordConfirm && (
              <p className="text-[#FF4732]/85 text-[12px] mt-[7px]">
                {error.passwordConfirm}
              </p>
            )}
          </div>
          <div className="check-box flex items-center justify-center px-1 py-2 cursor-pointer">
            <input
              type="checkbox"
              id="over14"
              checked={isOver}
              onChange={(e) => setIsOver(e.target.checked)}
              className="w-[18px] h-[18px]"
            />
            <label
              htmlFor="over14"
              className="text-[14px] pl-[6px] text-[#808080] focus:text-[#121212]"
            >
              [필수] 만 14세 이상입니다.
            </label>
          </div>
          <button
            type="submit"
            className={`next-btn py-3 px-4 w-full h-[49px] rounded-lg ${isFormValid ? 'bg-[#121212] text-white' : 'bg-black-100 text-black-300'}`}
            disabled={!isFormValid}
          >
            회원가입
          </button>
        </div>
      </form>
    </main>
  );
}

export default SingUp;

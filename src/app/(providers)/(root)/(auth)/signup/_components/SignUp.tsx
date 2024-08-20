'use client';
import { useRouter } from 'next/navigation';
import { useSignUpForm } from 'hooks/useSignUpForm';
import Image from 'next/image';
import axios from 'axios';
import { useUserStore } from '@/zustand/store/useUserStore';
import { emailDomains } from '@/utils/emailDomains';

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
    isNicknameChecked,
    nicknameMessage,
    setIsOver,
    handleChange,
    isFormValid,
    isEmailChecked,
    emailMessage,
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
    const email = `${emailId}${selectedEmailDomain}`;

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
    <main className="block px-4 items-center justify-center space-x-2 md:py-10 md:flex md:w-full md:h-full">
      <form
        onSubmit={onSubmit}
        className="h-full w-full md:w-[480px] md:h-[742px] md:bg-white md:px-10 md:rounded-3xl md:py-14"
      >
        <h1 className="md:font-body-KR-medium text-[20px] md:text-[24px] md:pb-[24px] text-center text-[#121212] font-bold leading-[130%] tracking-[-0.4px] md:tracking-[-0.48px]">
          회원가입
        </h1>
        <div className="w-full">
          <div className="tracking-[-0.02px] py-[6px]">
            <label
              className={`pl-[2px] font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02 ${
                error.nickname
                  ? 'pl-[2px] font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02 text-[#FF4732]/85'
                  : 'pl-[2px] font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02 text-[#4d4d4d]'
              }`}
            >
              닉네임
            </label>
            <input
              type="text"
              onChange={handleChange('nickname')}
              value={nickname}
              className={`py-3 px-4 w-full h-full border hover:border-blue-500 ${
                error.nickname
                  ? 'border-[#FF4732]/85 font-KR font-medium text-xs md:text-sm'
                  : 'border-[#808080] font-KR font-medium text-xs md:text-sm'
              } rounded-lg focus:outline-none pl-4`}
            />
            {error.nickname && (
              <p className="font-KR py-[6px] text-[12px] flex gap-0.5 text-[#FF4732]/85">
                <Image
                  src="images/ExclamationMarks/Unavailable.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="flex"
                />
                {error.nickname}
              </p>
            )}
            {!error.nickname && isNicknameChecked && (
              <p className="py-[6px] text-[12px] text-black-700 font-KR font-medium text-xs tracking--0.02 md:text-sm leading-[21px]">
                {nicknameMessage}
              </p>
            )}
            {!error.nickname && (
              <p className="font-KR tracking--0.02font-KR font-medium text-xs leading-[21px] tracking--0.02 text-black-700 text-[12px] flex gap-0.5 pt-[6px]">
                <Image
                  src="images/ExclamationMarks/ExclamationMarks.svg"
                  alt=""
                  width={12}
                  height={12}
                  className=""
                />
                최대 8글자
              </p>
            )}
          </div>
          <div className="">
            <p className="pl-[2px] md:text-sm  tracking--0.02 font-KR w-full text-sm pb-[6px] leading-[21px] font-semibold tracking-[-0.02em] text-[#4d4d4d]">
              이메일
            </p>
            <div className="flex flex-row items-center justify-center gap-[6px]">
              <input
                type="text"
                onChange={(e) => {
                  handleChange('email')(e);
                }}
                value={emailId}
                className="w-full h-[48px] py-3 px-4 border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              />
              <select
                title="이메일 선택"
                onChange={(e) => {
                  handleChange('domain')(e);
                }}
                value={emailDomain}
                className="w-full h-[48px] py-3 px-4 box-border border-1 border-black-500 rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              >
                {emailDomains.map((emailDomain, emails) => {
                  return (
                    <option
                      key={emails}
                      value={emailDomain}
                      className="cursor-pointer"
                    >
                      {emailDomain}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              {error.email && (
                <p className="py-[6px] text-[12px] flex gap-0.5 pb-2 pt-[7px] text-[#FF4732]/85">
                  <Image
                    src="images/ExclamationMarks/Unavailable.svg"
                    alt=""
                    width={12}
                    height={12}
                    className=""
                  />
                  {error.email}
                </p>
              )}
              {error.verificationMessage && emailDomain === '직접 입력' && (
                <p className="py-[6px] text-[12px] flex gap-0.5 pb-2 pt-[7px] text-[#FF4732]/85">
                  <Image
                    src="images/ExclamationMarks/Unavailable.svg"
                    alt=""
                    width={12}
                    height={12}
                    className=""
                  />
                  {error.verificationMessage}
                </p>
              )}
              {!error.email && isEmailChecked && (
                <p className="py-[6px] text-[12px] text-black-700">
                  {emailMessage}
                </p>
              )}
              {error.email && (
                <p className="font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02 text-black-700 text-[12px] flex gap-0.5 pt-[6px]">
                  <Image
                    src="images/ExclamationMarks/ExclamationMarks.svg"
                    alt=""
                    width={12}
                    height={12}
                    className=""
                  />
                  최대 8글자
                </p>
              )}
            </div>
          </div>
          <div className="font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02 py-[6px]">
            <label
              className={`text-[14px] font-semibold leading-[150%] ml-[2px] ${
                error.password ? 'text-[#FF4732]/85' : 'text-[#4d4d4d]'
              }`}
            >
              비밀번호
            </label>
            <input
              type="password"
              onChange={handleChange('password')}
              value={password}
              className={`w-full h-[48px] py-3 px-4 border hover:border-blue-500 ${
                error.password ? 'border-[#FF4732]/85' : 'border-[#808080]'
              } rounded-lg focus:outline-none pl-4`}
            />
            {error.password && (
              <p className="text-[12px] flex text-[#FF4732]/85 pt-[6px]">
                {error.password}
              </p>
            )}
            {!error.password && password && (
              <p className="mt-2 text-[12px] text-black-700">
                {error.password}
              </p>
            )}
            {!error.password && !password && (
              <p className="text-black-700 text-[12px] flex gap-1 pt-[6px]">
                <Image
                  src="images/ExclamationMarks/ExclamationMarks.svg"
                  alt=""
                  width={12}
                  height={12}
                  className=""
                />
                특수문자,대문자 포함 8자 이상
              </p>
            )}
          </div>
          <div className="text-[#4D4D4D] py-[6px] font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02">
            <p>
              <label
                className={`pl-[2px] font-KR text-xs md:text-sm tracking--0.02 text-[14px] leading-[150%] font-semibold ${error.passwordConfirm ? 'text-[#FF4732]/85' : 'text-[#4d4d4d]'}`}
              >
                비밀번호 확인
              </label>
            </p>
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
              <p className="text-[#FF4732]/85 text-[12px] pt-[6px]">
                {error.passwordConfirm}
              </p>
            )}
          </div>
          <div className="flex items-center px-1 py-2 cursor-pointer mt-[37px] mb-[10px]">
            <input
              type="checkbox"
              id="over14"
              checked={isOver}
              onChange={(e) => setIsOver(e.target.checked)}
              className="w-[18px] h-[18px]"
            />
            <label
              htmlFor="over14"
              className="text-[14px] pl-[6px] text-[#808080] focus:text-[#121212] font-KR font-medium text-xs md:text-sm leading-[21px] tracking--0.02"
            >
              [필수] 만 14세 이상입니다.
            </label>
          </div>
          <div className="mb-[100px]">
            <button
              type="submit"
              className={`py-3 px-4 w-full h-[49px] rounded-lg pl-[2px] font-KR font-medium text-xs md:text-base leading-[20.8px] tracking--0.02 text-[#4d4d4d] ${isFormValid ? 'bg-[#121212] text-white' : 'bg-black-100 text-black-300 active:bg-[#5EB0FF]/80'}`}
              disabled={!isFormValid}
            >
              회원가입
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default SingUp;

'use client';
import { useRouter } from 'next/navigation';
import { useSignUpForm } from 'hooks/useSignUpForm';
import Image from 'next/image';
import axios from 'axios';
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
    // handleEmailDomainChange,
    checkNickname,
    isFormValid,
  } = useSignUpForm();
  const router = useRouter();
  const { setUser, user } = useUserStore();
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
        options: {
          data: {
            name: nickname,
          },
        },
      });

      if (response.data) {
        setUser({
          id: '',
          nickname: '',
          email: '',
          provider: '',
          profileImage: '',
        });
        alert('회원가입이 완료 되었습니다.');
        router.replace('/signUpDone');
      }
    } catch (error) {
      console.error('회원가입을 실패 했어요', error);
      alert('이미 가입한 계정의 이메일이에요');
    }
  };

  return (
    <main className="">
      <form onSubmit={onSubmit} className="flex flex-col">
        <h1 className="text-[20px] text-center text-[#121212] font-bold leading-[130%] tracking-[-0.4px] mb-5">
          회원가입
        </h1>
        <div className="">
          <label
            className={`text-[14px] leading-[150%] ml-[2px] ${
              error.nickname ? 'text-[#FF4732]/85' : 'text-[#808080]'
            }`}
          >
            닉네임
          </label>
          <input
            type="text"
            maxLength={10}
            onChange={handleChange('nickname')}
            value={nickname}
            className={`w-[288px] h-[48px] border hover:border-blue-500 ${
              error.nickname ? 'border-[#FF4732]/85' : 'border-[#808080]'
            } rounded-lg focus:outline-none pl-4`}
          />
        </div>
        {error.nickname && (
          <p className="mt-2 text-[12px] flex text-[#FF4732]/85">
            <Image
              src="images/ExclamationMarks/Unavailable.svg"
              alt=""
              width={12}
              height={12}
              className="mr-[3px]"
            />
            {error.nickname}
          </p>
        )}
        {!error.nickname && isNicknameChecked && (
          <p className="mt-2 text-[12px] text-black-700">{nicknameMessage}</p>
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
                placeholder="example.com"
                className="w-[160px] h-[48px] p-2 border-1 border-black-500 text-bl rounded-lg font-[16px] hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              />
            ) : (
              <select
                title="이메일 선택"
                onChange={(e) => setEmailDomain(e.target.value)}
                value={emailDomain}
                className="w-[160px] h-[48px] p-2 border-1 border-black-500 text-bl rounded-lg font-[16px] hover:border-blue-500 focus:border-blue-500 focus:outline-none cursor-pointer"
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
          {error.email && (
            <p className="text-[#FF4732]/85 text-[12px] mt-2">{error.email}</p>
          )}
        </div>

        <div className="">
          <label
            className={`text-[14px] leading-[150%] ml-[2px] ${
              error.password ? 'text-[#FF4732]/85' : 'text-[#808080]'
            }`}
          >
            비밀번호
          </label>
          <input
            type="password"
            // maxLength={10}
            onChange={handleChange('password')}
            value={password}
            className={`w-[288px] h-[48px] border hover:border-blue-500 ${
              error.password ? 'border-[#FF4732]/85' : 'border-[#808080]'
            } rounded-lg focus:outline-none pl-4`}
          />
        </div>
        {error.password && (
          <p className="mt-2 text-[12px] flex text-[#FF4732]/85">
            <Image
              src="images/ExclamationMarks/Unavailable.svg"
              alt=""
              width={12}
              height={12}
              className="mr-[3px]"
            />
            {/* {error.password} */}
          </p>
        )}
        {!error.password && password && (
          <p className="mt-2 text-[12px] text-black-700">{error.password}</p>
        )}
        {!error.password && !password && (
          <p className="text-black-700 mt-[7px] text-[12px] flex">
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
            <p className="text-[#FF4732]/85 text-[12px] mt-[7px]">
              {error.passwordConfirm}
            </p>
          )}
        </div>
        <div className="mt-[49px] mb-[10px] flex">
          <input
            type="checkbox"
            id="over14"
            checked={isOver}
            onChange={(e) => setIsOver(e.target.checked)}
            className="w-[18px] h-[18px] cursor-pointer"
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

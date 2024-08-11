import { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import { ErrorState, verifyField, checkNicknameDuplication } from '@/utils/verification';
import { emailDomains } from '@/utils/emailDomains';

export const useSignUpForm = () => {
  const [nickname, setNickname] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [emailDomain, setEmailDomain] = useState<string>(emailDomains[0]);
  const [customEmailDomain, setCustomEmailDomain] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isOver, setIsOver] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false);
  const [nicknameMessage, setNicknameMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debounceCheckNickname = useCallback(
    debounce(async (nickname: string) => {
      if (nickname.trim() === '') {
        setError((prevState) => ({
          ...prevState,
          nickname: '최대 10글자.',
        }));
        setNicknameMessage('');
        return;
      }
      const isAvailable = await checkNicknameDuplication(nickname);
      if (!isAvailable) {
        setError((prevState) => ({
          ...prevState,
          nickname: '사용 불가능한 닉네임입니다.',
        }));
        setIsNicknameValid(false);
        setNicknameMessage('');
      } else {
        setError((prevState) => ({
          ...prevState,
          nickname: '',
        }));
        setIsNicknameValid(true);
        setNicknameMessage('사용 가능한 닉네임입니다.');
      }
      setIsNicknameChecked(true);
    }, 200),
    []
  );

  const handleChange = (name: keyof ErrorState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let newState: ErrorState = { ...error };

    switch (name) {
      case 'nickname':
        setNickname(value);
        newState.nickname = verifyField(name, value);
        setIsNicknameChecked(false);
        setNicknameMessage('');
        debounceCheckNickname(value);
        break;
      case 'email':
        if (!value.includes('@')) {
          setEmailId(value);
        }
        const email = `${emailId}@${emailDomain === '직접 입력' ? customEmailDomain : emailDomain}`;
        newState.email = verifyField(name, email);
        break;
      case 'password':
        setPassword(value);
        newState.password = verifyField(name, value);
        break;
      case 'passwordConfirm':
        setPasswordConfirm(value);
        newState.passwordConfirm = verifyField(name, value, { password });
        break;
      default:
        break;
    }

    setError(newState);
  };

  const handleEmailDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setEmailDomain(value);
    if (value !== '직접 입력') {
      setCustomEmailDomain('');
    }
    handleChange('email')({
      target: {
        value: emailId,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  useEffect(() => {
    setIsNicknameValid(nickname.length > 0 && error.nickname === '');
  }, [nickname, error.nickname]);

  const isFormValid = isNicknameChecked && error.nickname === '' && emailId !== '' && (emailDomain !== '직접 입력' || customEmailDomain !== '') && password !== '' && passwordConfirm !== '' && password === passwordConfirm && isOver;

  return {
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
    isLoading,
    setEmailId,
    setEmailDomain,
    setCustomEmailDomain,
    setIsOver,
    handleChange,
    handleEmailDomainChange,
    checkNickname: debounceCheckNickname,
    isFormValid,
  };
};

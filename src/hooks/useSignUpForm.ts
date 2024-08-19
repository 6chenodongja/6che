import { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import { ErrorState, verifyField, checkNicknameDuplication, checkEmailDuplication } from '@/utils/verification';
import { emailDomains } from '@/utils/emailDomains';

// TODO: 
/**
 * 1. 이메일 도메인 input 창 만들기 
 * 2. 
 */

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
    verificationMessage:'',
  });
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false);
  const [isEmailChecked, setIsEmailChecked] = useState<boolean>(false)
  const [nicknameMessage, setNicknameMessage] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);




  const debounceCheckNickname = useCallback(
    debounce(async (nickname: string) => {
      if (nickname.trim() === '') {
        setError((prevState) => ({
          ...prevState,
          nickname: '',
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
  //이메일
  const debounceCheckEmail = useCallback(
    debounce(async (email: string) => {
      if (email.trim() === '') {
        setError((prevState) => ({
          ...prevState,
          email: '',
        }));
        setEmailMessage('');
        return;
      }
      
      let emailAddress;
      if (emailDomain === '직접 입력') {
        emailAddress = email
      } else {
        emailAddress = `${email}${emailDomain}`
      }
      // TODO: 도메인도 같이 체크해야 함
      const isDuplicate = await checkEmailDuplication(emailAddress);
      if (isDuplicate) {
        setError((prevState) => ({
          ...prevState,
          email: '사용 불가능한 이메일입니다.',
        }));
        setIsEmailValid(false);
        setEmailMessage('');
      } else {
        setError((prevState) => ({
          ...prevState,
          email: '',
        }));
        setIsEmailValid(true);
        setEmailMessage('사용 가능한 이메일입니다.');
      }
      setIsEmailChecked(true);
    }, 200),
    [emailDomain]
  );
  

  //도메인
  const debounceCheckDomain = useCallback( 
    debounce(async (domain: string) => {
      if(emailDomain === '직접 입력') return
      if (domain.trim() === '') {
        setError((prevState) => ({
          ...prevState,
          domain: '',
        }));
        setEmailMessage('');
        return;
      }
      const emailAddress = `${emailId}${domain}`
      const isDuplicate = await checkEmailDuplication(emailAddress);
      if (isDuplicate) {
        setError((prevState) => ({
          ...prevState,
          email: '사용 불가능한 이메일입니다.',
        }));
        setEmailMessage('');
      } else {
        setError((prevState) => ({
          ...prevState,
          email: '',
        }));
        setEmailMessage('사용 가능한 이메일입니다.');
      }
      setIsEmailChecked(true);
    }, 200),
    [emailId]
  );

  const handleChange = (name: keyof ErrorState) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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
        setEmailId(value);
        setEmailMessage('');
        debounceCheckEmail(value);

        if(emailDomain === '직접 입력') {
          newState.email = verifyField(name, value);
        }
        break;
      case 'domain':
        setEmailDomain(value);
        setEmailMessage('');
        debounceCheckDomain(value);
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
    setCustomEmailDomain,
    setIsOver,
    handleChange,
    checkNickname: debounceCheckNickname,
    isFormValid,
    checkEmail: debounceCheckEmail,
    checkDomain:debounceCheckDomain,
    isEmailChecked,
    emailMessage,
  };
};

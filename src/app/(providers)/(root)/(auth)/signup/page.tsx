import Header from 'app/(providers)/(components)/Header';
import SingUp from './_components/SignUp';
import Footer from 'app/(providers)/(components)/Footer';
import Header from 'app/(providers)/(components)/Header';

const SignUpPage: React.FC = () => {
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
          name: nickname,
        },
      },
    });

    if (error) {
      return alert(error.message);
    }

    alert('회원가입이 완료 되었습니다.');

    router.replace('/login');
  };

  return (
    <main className="">
      <Header />
      <div className="">
        <SingUp />
      </div>
      <Footer />
    </main>
  );
};
export default SignUpPage;

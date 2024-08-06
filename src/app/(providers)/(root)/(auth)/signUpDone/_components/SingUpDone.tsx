import Image from 'next/image';
import Link from 'next/link';
import BottomSheet from './BottomSheet';

function SingUpDone() {
  // const [isDropdownView, setDropdownView] = useState(false);
  // const [user, setUser] = useState();
  // const handleClickContainer = () => {
  //   setDropdownView(!isDropdownView);
  // };
  // const [profileIcon, setProfileIcon] = useState<string>('');

  return (
    <main className="h-auto justify-center m-auto">
      <div className="mt-[150px]">
        <div className="text-center mb-[20px]">
          <p>닉네임님! 환영합니다.</p>
          <p>이메일로 발송된 이메일 주소 확인을 완료해주세요</p>
        </div>
        <div className="mb-5">
          <BottomSheet />
        </div>
        <button className="bg-black text-white rounded-lg w-[288px] h-[49px] hover:bg-blue-400 mb-[77px]">
          <Link href={'/login'}>로그인 하기</Link>
        </button>
      </div>
    </main>
  );
}

export default SingUpDone;

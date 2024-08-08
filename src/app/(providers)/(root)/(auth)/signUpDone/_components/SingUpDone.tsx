'use client';

import { useUserStore } from '@/zustand/store/useUserStore';
import Link from 'next/link';

function SingUpDone() {
  const { user, setUser } = useUserStore();
  // console.log(user);
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
          <div>
            <p>{user?.nickname}</p>님! 환영합니다.
          </div>
          <p>이메일로 발송된 이메일 주소 확인을 완료해주세요</p>
        </div>
        <div className="mb-5"></div>
        <div className="flex justify-center items-center">
          <button className="bg-black text-white rounded-lg w-[288px] h-[49px] hover:bg-blue-400 mb-[77px]">
            <Link href={'/login'}>로그인 하기</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default SingUpDone;

import Link from 'next/link';
import { useState } from 'react';

function SingUpDone() {
  //   const [isDropdownView, setDropdownView] = useState(false);
  //   const [user, setUser] = useState();

  //   const handleClickContainer = () => {
  //     setDropdownView(!isDropdownView);
  //   };

  return (
    <main className="w-[80px] min-w-[320px]">
      <div>
        <button className="">
          <Link href={'/login'}>로그인 홈페이지로 이동</Link>
        </button>
      </div>
    </main>
  );
}

export default SingUpDone;

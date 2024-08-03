import Image from 'next/image';
import { useState } from 'react';

function Profile() {
  // const [nickname, setNickname] = useState('');

  // const onChangeNickName = (e:) => {
  //   setNickname(e.target.value);
  // };
  return (
    <main className="w-80 h-[633px] relative overflow-hidden bg-neutral-50 m-auto">
      <div className="">
        <header className="flex justify-between items-center w-80 h-14 relative px-4 py-1.5 bg-white/50 border border-white/60 backdrop-blur-[10px]">
          <h1 className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black drop-shadow-2xl">
            닉네임 / 프로필 수정
          </h1>
          <Image src={''} alt="X-icon"></Image>
        </header>
        <section>
          <article>
            <form action="">
              <label htmlFor="">닉네임</label>
              <input type="text" placeholder="최대 8글자" />
              <Image src={''} alt=""></Image>
              <button></button>
            </form>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Profile;

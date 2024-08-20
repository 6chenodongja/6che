'use client';

import { useUserStore } from '@/zustand/store/useUserStore';
import Link from 'next/link';
import ProfileSelect from './ProfileSelect';
import Image from 'next/image';

function SingUpDone() {
  const { user } = useUserStore();

  return (
    <>
      <div className="relative text-center flex flex-col justify-between h-full">
        <Image
          src="/images/signUpDone/SingUpDonePage.png"
          alt=""
          width={480}
          height={544}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full">
          <p className="text-[24px] font-[700] leading-[31.2px] tracking-[-0.02em]">
            {user?.nickname}
            <span className="text-[24px] font-[400] leading-[31.2px] tracking-[-0.02em] text-[#4d4d4d]">
              님
            </span>
          </p>
          <p className="text-[34px] font-[400] leading-[39.1px] tracking-[-0.02em]">
            환영합니다!
          </p>
          <p className="text-[#4d4d4d] text-[12px] font-[400] pt-3 leading-[15.6px] tracking-[-0.02em] flex flex-col">
            <span>프로필과 닉네임은 마이페이지에서</span>
            <span>변경할 수 있습니다</span>
          </p>
        </div>
      </div>
      <div className="pb-4">
        <button className="bg-black text-white w-full rounded-lg py-[14px] px-3 hover:bg-blue-400 mt-[42px] md:mt-0">
          <Link href={'/'}>홈으로</Link>
        </button>
      </div>
      <ProfileSelect />
    </>
  );
}

export default SingUpDone;

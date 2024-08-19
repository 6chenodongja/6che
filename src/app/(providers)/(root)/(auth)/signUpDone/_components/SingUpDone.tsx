'use client';

import { useUserStore } from '@/zustand/store/useUserStore';
import Link from 'next/link';
import ProfileSelect from './ProfileSelect';
import Image from 'next/image';

function SingUpDone() {
  const { user } = useUserStore();

  return (
    <main className="flex flex-col justify-center items-center md:w-[480px] md:h-[724px] md:bg-white md:shadow-boxShadowPc md:rounded-3xl">
      <div className="flex flex-col w-full">
        <div className="text-center">
          <div className="w-full h-full flex justify-center items-center top-0 left-0">
            <Image
              src="/images/signUpDone/CelebrationConfettiEffect.svg"
              alt=""
              width={292}
              height={330}
              className="absolute top-[92px] left-2"
              className="absolute top-[92px] left-2"
            />
            <Image
              src="/images/signUpDone/SignupConfirmationGlow.svg"
              alt=""
            <Image
              src="/images/signUpDone/SignupConfirmationGlow.svg"
              alt=""
              width={292}
              height={330}
              className="absolute top-[92px] left-2"
            />
          </div>
          <div className="flex flex-col mb-[165px] w-full">
            <div className="">
              <p className="text-[24px] font-[700] leading-[31.2px] tracking-[-0.02em] relative pb-[1px]">
                {user?.nickname}
                <span className="text-[24px] font-[400] leading-[31.2px] tracking-[-0.02em] text-[#4d4d4d]">
                  님
                </span>
              </p>
              <p className="text-[34px] font-[400] leading-[39.1px] tracking-[-0.02em] relative">
                환영합니다!
              </p>
              <p className="text-[#4d4d4d] text-[12px] font-[400] pt-3 leading-[15.6px] tracking-[-0.02em] flex flex-col">
                <span>프로필과 닉네임은 마이페이지에서</span>
                <span>변경할 수 있습니다</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <button className="bg-black text-white rounded-lg w-[264px] h-full py-[14px] px-3 hover:bg-blue-400">
            <Link href={'/'}>홈으로</Link>
          </button>
        </div>
      </div>
      <ProfileSelect />
    </main>
  );
}

export default SingUpDone;

'use client';

import { useUserStore } from '@/zustand/store/useUserStore';
import Image from 'next/image';
import Link from 'next/link';

function SingUpDone() {
  const { user } = useUserStore();

  return (
    <main className="">
      <div className="">
        <div className="text-center">
          <div className="w-80 h-[344px] relative">
            <Image
              src="/images/signUpDone/CelebrationConfettiEffect.svg"
              alt=""
              width={292}
              height={330}
              className="w-[292px] h-[330px] left-[14px] top-[5px] absolute"
            />
            <Image
              src="/images/signUpDone/SignupConfirmationGlow.svg"
              alt=""
              width={292}
              height={330}
              className="w-[292px] h-[330px] left-[14px] top-0 absolute"
            />
          </div>
          <div className="flex flex-col">
            <div className="">
              <p className="text-[24px] font-[700] leading-[31.2px] tracking-[-0.02em]">
                {user?.nickname}
                <span className="text-[24px] font-[400] leading-[31.2px] tracking-[-0.02em] text-[#4d4d4d]">
                  님
                </span>
              </p>
              <p className="text-[34px] font-[400] leading-[39.1px] tracking-[-0.02em]">
                환영합니다!
              </p>
              <p className="text-[#4d4d4d] text-[12px] font-[400] leading-[15.6px] tracking-[-0.02em]">
                프로필과 닉네임은 마이페이지에서
                <br />
                변경할 수 있습니다
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <button className="bg-black text-white rounded-lg w-[288px] h-[49px] hover:bg-blue-400">
            <Link href={'/'}>홈으로</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default SingUpDone;

'use client';

import { useUserStore } from '@/zustand/store/useUserStore';
import Image from 'next/image';
import Link from 'next/link';

function SingUpDone() {
  const { user } = useUserStore();

  return (
    <main className="">
      <div className="">
        <div className="text-center mb-[20px]">
          <div className="absolute top-[-1]">
            <Image
              src="/images/signUpDone/SignupConfirmationGlow.svg"
              alt=""
              width={320}
              height={344}
              className="absolute"
            />
            <Image
              src="/images/signUpDone/CelebrationConfettiEffect.svg"
              alt=""
              width={320}
              height={344}
              className=""
            />
          </div>
          <div className="flex flex-col z-10 relative mt-[100px]">
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
              <p className="mt-[17px] mb-[134px] text-[#4d4d4d] text-[12px] font-[400] leading-[15.6px] tracking-[-0.02em]">
                이메일로 발송된 이메일 주소 확인을
                <br />
                완료해주세요
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center z-10 relative">
          <button className="bg-black text-white rounded-lg w-[288px] h-[49px] hover:bg-blue-400 mb-[77px]">
            <Link href={'/login'}>로그인 하기</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default SingUpDone;

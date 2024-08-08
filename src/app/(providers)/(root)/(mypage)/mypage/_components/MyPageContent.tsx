'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUserStore } from '@/zustand/store/useUserStore';

const MyPageContent: React.FC = () => {
  const { user } = useUserStore();

  return (
    <div className="container h-[1381px] overflow-hidden bg-neutral-50">
      <div className="flex flex-col justify-start items-start w-72 drop-shadow-xl m-auto">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 py-5 rounded-[14px] bg-white">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 pb-1.5">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[32px] h-[32px] gap-2">
              <Image
                src={user?.profileImage || '/images/Weather/sun.svg'}
                alt="profile-icon"
                width={28}
                height={28}
                className="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-lg shadow-md"
              />
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#121212]">
                  {user?.nickname}
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#121212]">
                  님
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0  overflow-hidden gap-1 px-3 py-1.5 rounded-lg bg-[#121212]">
              <Link href={'/profile'} passHref>
                <button className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
                  수정
                </button>
              </Link>
            </div>
          </div>
          <nav className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
            <Link
              href={'/postLike'}
              className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0  overflow-hidden px-1.5 py-2.5 rounded-lg"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                좋아요한 게시글
              </p>
              <Image
                src="/images/icons/arrow_down.svg"
                alt="arrow-icon"
                width={18}
                height={18}
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
              />
            </Link>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0  overflow-hidden px-1.5 py-2.5 rounded-lg">
              <Link href={'/myStyle'}>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#4d4d4d]">
                  내 스타일
                </p>
                <Image
                  src="/images/icons/arrow_down.svg"
                  alt="arrow-icon"
                  width={18}
                  height={18}
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] "
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MyPageContent;

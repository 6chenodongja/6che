import Image from 'next/image';
import Link from 'next/link';

function Profile() {
  return (
    <main className="w-80 h-[633px] relative overflow-hidden bg-neutral-50 m-auto">
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[82px] gap-1.5 py-1.5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            닉네임
          </p>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex justify-start items-center flex-grow relative overflow-hidden gap-2 px-4 py-3 rounded-lg bg-white/50 border border-[#808080]">
            <form>
              <label htmlFor="nickname"></label>
              <input
                type="text"
                className="flex-grow w-[196px] text-base text-left text-[#b3b3b3]"
              />
            </form>
          </div>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-14 relative overflow-hidden gap-1 p-1.5 rounded-lg bg-[#e6e6e6]/60">
            <button className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#b3b3b3]">
              중복확인
            </button>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
          <p className="flex-grow w-[268px] text-xs text-left text-[#4d4d4d]">
            현재 닉네임 : 닉네임
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start absolute left-4 top-[219px] gap-2 py-1.5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            프로필
          </p>
        </div>
        <div className="grid  flex-grow-0 flex-shrink-0 w-72 h-56 relative gap-2.5 pl-[19px] pr-[19px] pt-[16px]  pb-[16px] rounded-2xl bg-white">
          <Image
            src={'/images/Weather/sun.svg'}
            alt=""
            width={34}
            height={34}
            className="border rounded-sm"
          ></Image>
        </div>
        <button className="bg-black text-white p-4 w-[288px] border rounded-xl">
          완료
        </button>
      </div>
      <div className="flex justify-between items-center w-80 h-14 absolute left-0 top-0 px-4 py-1.5 bg-white/50 border border-white/60 backdrop-blur-[10px]">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black text-">
          닉네임 / 프로필 수정
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-10 h-10">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-[1000px]">
            <Link href={'/mypage'}>
              <button>X</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;

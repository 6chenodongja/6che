import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Profile() {
  // const [nickname, setNickname] = useState('');

  // const onChangeNickName = (e:) => {
  //   setNickname(e.target.value);
  // };
  return (
    <div className="w-80 h-[633px] relative overflow-hidden bg-neutral-50 m-auto">
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[82px] gap-1.5 py-1.5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            닉네임
          </p>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex justify-start items-center flex-grow relative overflow-hidden gap-2 px-4 py-3 rounded-lg bg-white/50 border border-[#808080]">
            <input
              type="text"
              className="flex-grow w-[196px] text-base text-left text-[#b3b3b3]"
            />
          </div>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-14 relative overflow-hidden gap-1 p-1.5 rounded-lg bg-[#e6e6e6]/60">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#b3b3b3]">
              중복확인
            </p>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.6667 9C13.6667 11.5773 11.5773 13.6667 9 13.6667C6.42267 13.6667 4.33333 11.5773 4.33333 9C4.33333 6.42267 6.42267 4.33333 9 4.33333C11.5773 4.33333 13.6667 6.42267 13.6667 9ZM15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9ZM9 5C9.36819 5 9.66667 5.29848 9.66667 5.66667V10.3333C9.66667 10.7015 9.36819 11 9 11C8.63181 11 8.33333 10.7015 8.33333 10.3333V5.66667C8.33333 5.29848 8.63181 5 9 5ZM9 11.6667C9.36819 11.6667 9.66667 11.9651 9.66667 12.3333V12.3334C9.66667 12.7016 9.36819 13.0001 9 13.0001C8.63181 13.0001 8.33333 12.7016 8.33333 12.3334V12.3333C8.33333 11.9651 8.63181 11.6667 9 11.6667Z"
              fill="#4D4D4D"
            />
          </svg>
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
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-72 h-56 relative gap-2.5 pl-[19px] pr-4 rounded-2xl bg-white">
          아이콘 넣는 곳
        </div>
      </div>

      <div
        className="flex justify-between items-center w-80 h-14 absolute left-0 top-0 px-4 py-1.5 bg-white/50 border border-white/60 backdrop-blur-[10px]"
        style={{ boxShadow: '0px 2px 5px 0 rgba(0,0,0,0.05)' }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black text-">
          닉네임 / 프로필 수정
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-10 h-10">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-[1000px]"
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
          >
            <Link href={'/mypage'}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.14822 5.85198C6.79024 5.494 6.20984 5.494 5.85186 5.85198C5.49388 6.20996 5.49388 6.79036 5.85186 7.14834L10.7037 12.0002L5.85186 16.852C5.49388 17.21 5.49388 17.7904 5.85186 18.1483C6.20984 18.5063 6.79024 18.5063 7.14822 18.1483L12 13.2965L16.8519 18.1483C17.2098 18.5063 17.7902 18.5063 18.1482 18.1483C18.5062 17.7904 18.5062 17.21 18.1482 16.852L13.2964 12.0002L18.1482 7.14834C18.5062 6.79036 18.5062 6.20996 18.1482 5.85198C17.7902 5.494 17.2098 5.494 16.8519 5.85198L12 10.7038L7.14822 5.85198Z"
                  fill="#121212"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/supabase/client';

const ProfileForm: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [currentNickname, setCurrentNickname] = useState('');
  const [profileIcon, setProfileIcon] = useState<string>('');
  const [nicknameAvailable, setNicknameAvailable] = useState(true);

  const profileIcons = [
    '/images/Weather/sun.svg', // 1
    '/images/Weather/night.svg', // 2
    '/images/Weather/once_cloudy.svg', // 3
    '/images/Weather/once_cloudy_night.svg', // 4
    '/images/Weather/snow.svg', // 5
    '/images/Weather/drizzling.svg', // 6
    '/images/Weather/downpour.svg', // 7
    '/images/Weather/sleet.svg', // 8
    '/images/Weather/sunrise.svg', // 9
    '/images/Weather/sunset.svg', // 10
    '/images/Weather/blur.svg', // 11
    '/images/Weather/heavy_snow.svg', // 12
    '/images/Weather/thunderstorm.svg', // 13
    '/images/Weather/wind.svg', // 14
    '/images/Weather/thread_fog.svg', // 15
    '/images/Weather/drizzling_night.svg', // 16
    '/images/Weather/fog.svg', // 17
    '/images/Weather/rain.svg', // 18
  ];

  const checkNicknameAvailability = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('users')
      .select('nick_name')
      .eq('nick_name', nickname);

    if (error) {
      console.error('Error checking nickname:', error);
    } else {
      setNicknameAvailable(data.length === 0);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setNickname(e.target.value);
    }
  };

  const handleProfileIconSelect = (icon: string) => {
    setProfileIcon(icon);
  };

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
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="flex-grow w-[196px] text-base text-left text-[#b3b3b3]"
              placeholder="최대 8글자"
            />
          </div>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-14 relative overflow-hidden gap-1 p-1.5 rounded-lg bg-[#e6e6e6]/60">
            <button
              onClick={checkNicknameAvailability}
              className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#b3b3b3]"
            >
              중복확인
            </button>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
          <p className="flex-grow w-[268px] text-xs text-left text-[#4d4d4d]">
            현재 닉네임 : {currentNickname}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start absolute left-4 top-[219px] gap-2 py-1.5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            프로필
          </p>
        </div>
        <div className="grid grid-cols-5 gap-2.5 w-72 h-56 relative pl-[19px] pr-[19px] pt-[16px] pb-[16px] rounded-2xl bg-white">
          {profileIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`profile-icon-${index}`}
              width={34}
              height={34}
              className={`border-2 rounded-md ${profileIcon === icon ? 'border-blue-200' : ''}`}
              onClick={() => handleProfileIconSelect(icon)}
            />
          ))}
        </div>
        <button className="bg-black text-white p-4 w-[288px] border rounded-xl">
          완료
        </button>
      </div>
      <div className="flex justify-between items-center w-80 h-14 absolute left-0 top-0 px-4 py-1.5 bg-white/50 border border-white/60 backdrop-blur-[10px]">
        <p className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-black">
          닉네임 / 프로필 수정
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-10 h-10">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-[1000px]">
            <Link href={'/mypage'} legacyBehavior>
              <a>
                <Image src="x.svg" alt="close" width={24} height={24} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileForm;

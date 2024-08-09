'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUserStore } from '@/zustand/store/useUserStore';
import { supabase } from '@/supabase/client';
import { checkNicknameDuplication } from '@/utils/verification';

const ProfileForm: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [currentNickname, setCurrentNickname] = useState('');
  const [profileIcon, setProfileIcon] = useState<string>('');
  const [nicknameAvailable, setNicknameAvailable] = useState(true);
  const { user, setUser } = useUserStore();

  const profileIcons = [
    '/images/Weather/sun.svg',
    '/images/Weather/night.svg',
    '/images/Weather/once_cloudy.svg',
    '/images/Weather/once_cloudy_night.svg',
    '/images/Weather/snow.svg',
    '/images/Weather/drizzling.svg',
    '/images/Weather/downpour.svg',
    '/images/Weather/sleet.svg',
    '/images/Weather/sunrise.svg',
    '/images/Weather/sunset.svg',
    '/images/Weather/blur.svg',
    '/images/Weather/heavy_snow.svg',
    '/images/Weather/thunderstorm.svg',
    '/images/Weather/wind.svg',
    '/images/Weather/thread_fog.svg',
    '/images/Weather/drizzling_night.svg',
    '/images/Weather/fog.svg',
    '/images/Weather/rain.svg',
  ];

  const handleCheckNickname = async () => {
    const isAvailable = await checkNicknameDuplication(nickname);
    setNicknameAvailable(isAvailable);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setNickname(e.target.value);
    }
  };

  const handleProfileIconSelect = (icon: string) => {
    setProfileIcon(icon);
  };

  const updateUserProfile = async (
    updates: Record<string, any>,
    userId: string,
  ) => {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .single();

    if (error) {
      console.error('프로필 수정이 되지 않았어요.', error);
      return null;
    }

    return alert('프로필 또는 닉네임이 변경 되었어요.');
  };

  const handleSubmit = async () => {
    const updates: Record<string, any> = {};
    if (nickname && nickname !== currentNickname) {
      updates['nick_name'] = nickname;
    }
    if (profileIcon) {
      updates['avatar'] = profileIcon;
    }
    if (!user) return;
    setUser({
      ...user,
      nickname: updates.nick_name || user.nickname,
      profileImage: updates.avatar || user.profileImage,
    });
    await updateUserProfile(updates, user.id);
  };

  return (
    <main className="w-80 h-[633px] overflow-hidden bg-neutral-50">
      <section className="flex flex-col justify-start items-start w-72 absolute left-4 top-[82px] gap-1.5 py-1.5">
        <header className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <h1 className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            닉네임
          </h1>
        </header>
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
              onClick={handleCheckNickname}
              className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#b3b3b3]"
            >
              중복확인
            </button>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
          <p className="flex-grow w-[268px] text-xs text-left text-[#4d4d4d]">
            현재 닉네임 : {user?.nickname}
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-start items-start absolute left-4 top-[219px] gap-2 py-1.5">
        <header className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pl-0.5">
          <h2 className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#4d4d4d]">
            프로필
          </h2>
        </header>
        <div className="grid grid-cols-5 gap-2.5 w-72 h-56 relative pl-[19px] pr-[19px] pt-[16px] pb-[16px] rounded-2xl bg-white">
          {profileIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`profile-icon-${index}`}
              width={34}
              height={34}
              className={`border-2 rounded-md  ${profileIcon === icon ? 'border-blue-200' : 'border-transparent'}`}
              onClick={() => handleProfileIconSelect(icon)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-black text-white p-4 w-[288px] border rounded-xl"
        >
          <Link href={'/mypage'}>완료</Link>
        </button>
      </section>
      <header className="flex justify-between items-center w-80 h-14 absolute left-0 top-0 px-4 py-1.5 bg-white/50 border border-white/60 backdrop-blur-[10px]">
        <h1 className="flex-grow-0 flex-shrink-0 text-base font-black text-left text-black">
          닉네임 / 프로필 수정
        </h1>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-10 h-10">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-[1000px]">
            <Link href={'/mypage'} legacyBehavior>
              <a>
                <Image src="x.svg" alt="close" width={24} height={24} />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
};

export default ProfileForm;

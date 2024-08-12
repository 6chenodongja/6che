'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { debounce } from 'lodash';
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

  const debounceCheckNickname = useCallback(
    debounce(async (nickname: string) => {
      if (nickname.trim() === '') {
        setNicknameAvailable(true);
        return;
      }
      const isAvailable = await checkNicknameDuplication(nickname);
      setNicknameAvailable(isAvailable);
    }, 200),
    [],
  );

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    if (newNickname.length <= 8) {
      setNickname(newNickname);
      debounceCheckNickname(newNickname);
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
    <main className="">
      <section className="flex flex-col justify-start items-start w-72 gap-1.5 py-1.5">
        <header className="flex justify-between items-center w-80 h-14 px-4 py-1.5 bg-white/50 shadow-xl">
          <h1 className="flex-grow-0 flex-shrink-0 font-black text-left text-black text-[16px] leading-[20.8px] tracking-[-0.02em]">
            닉네임 / 프로필 수정
          </h1>
          <div className="">
            <div className="">
              <Link href={'/mypage'} legacyBehavior>
                <a>
                  <Image src="x.svg" alt="close" width={24} height={24} />
                </a>
              </Link>
            </div>
          </div>
        </header>
        <div className="grid grid-flow-row ml-4 mt-[26px]">
          <div className="mb-[6px]">
            <header className="flex justify-start items-center self-stretch flex-grow-0 gap-2 pl-0.5">
              <h1 className="flex-grow-0 flex-shrink-0 font-bold mb-[6px] text-[14px] leading-[21px] tracking-[-0.02em] text-left text-[#4d4d4d]">
                닉네임
              </h1>
            </header>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <div className="flex justify-start items-center flex-grow overflow-hidden rounded-lg bg-white/50 border border-[#808080]">
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  className="flex-grow w-[288px] h-[48px] text-left text-[#b3b3b3] pl-3"
                  placeholder="최대 8글자"
                />
              </div>
            </div>
            {!nicknameAvailable && nickname && (
              <p className="text-red-500 mt-2">
                이미 사용하고 있는 닉네임입니다.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0  gap-0.5">
          <div className="flex gap-1 flex-grow w-[268px] text-xs text-left text-[#4d4d4d]">
            <span className="ml-[16px]">
              <Image
                src="images/ExclamationMarks/ExclamationMarks.svg"
                alt=""
                width={12}
                height={12}
              />
            </span>
            <p>현재 닉네임 : {user?.nickname}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-start items-center gap-2 py-1.5 mt-[32px]">
        <header className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2 pl-0.5">
          <h2 className="flex-grow-0 flex-shrink-0 text-sm font-medium ml-4 mb-[8px] text-[#4d4d4d]">
            프로필
          </h2>
        </header>
        <div className="grid grid-cols-5 gap-2.5 w-72 h-56 pl-[19px] pr-[19px] pt-[16px] pb-[16px] rounded-2xl bg-white shadow-[0_0_2px_0_rgba(0, 0, 0, 0.151),0_2px_20px_0_rgba(18, 18, 18, 0.178)]">
          {profileIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`profile-icon-${index}`}
              width={34}
              height={34}
              className={`border-2 rounded-md ${profileIcon === icon ? 'border-blue-200' : 'border-transparent'}`}
              onClick={() => handleProfileIconSelect(icon)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-black text-white p-4 mt-[52px] w-[288px] border rounded-xl hover:bg-blue-400"
          disabled={!nicknameAvailable}
        >
          <Link href={'/mypage'} className="w-full h-full">
            완료
          </Link>
        </button>
      </section>
    </main>
  );
};

export default ProfileForm;

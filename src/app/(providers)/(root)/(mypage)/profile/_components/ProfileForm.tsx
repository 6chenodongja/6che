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
    <main className="md:flex flex-col md:w-[480px] md:h-[724px] md:bg-white md:shadow-boxShadowPc md:backdrop-blur-sm md:rounded-3xl md:p-10 p-4 sm:p-6 lg:p-8">
      <header className="fixed top-0 left-0 w-full h-[44px] py-[6px] px-4 flex justify-between items-center bg-white/50 shadow-xl">
        <h1 className="text-[16px] font-semibold leading-[130%] tracking-[-0.32px] font-sans">
          닉네임 / 프로필 수정
        </h1>
        <div className="">
          <Link href={'/mypage'} legacyBehavior>
            <a>
              <Image src="x.svg" alt="close" width={24} height={24} />
            </a>
          </Link>
        </div>
      </header>
      <section className="flex flex-col w-full gap-1.5 py-1.5">
        <div className="grid grid-flow-row ml-4 mt-[26px]">
          <div className="mb-[6px]">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <div className="flex-col justify-start items-start flex-grow bg-white/50">
                <label className="flex-grow-0 flex-shrink-0 font-medium text-[14px] pl-[2px] leading-[21px] tracking-[-0.02em] text-[#4d4d4d]">
                  닉네임
                </label>
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  className="w-full py-3 px-4 text-[#b3b3b3] pl-3 border border-[#808080] rounded-lg hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="최대 8글자"
                />
              </div>
            </div>
            {!nicknameAvailable && nickname && (
              <p className="text-[#FF4732]/85 text-[12px] ml-1 mt-2">
                이미 사용하고 있는 닉네임입니다.
              </p>
            )}
            {nicknameAvailable && nickname && (
              <p className="text-red-500 text-[12px] ml-1 mt-2">
                사용 가능한 닉네임이에요.
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
        <header className="flex justify-start self-stretch flex-grow-0 flex-shrink-0 gap-2 pl-0.5">
          <h2 className="flex-grow-0 flex-shrink-0 text-sm font-medium text-[#4d4d4d]">
            프로필
          </h2>
        </header>
        <div className="grid grid-cols-5 gap-2.5 w-full h-full pl-[19px] pr-4 py-4 rounded-2xl bg-white shadow-[0_0_2px_0_rgba(0, 0, 0, 0.151),0_2px_20px_0_rgba(18, 18, 18, 0.178)] cursor-pointer">
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
          className="bg-black text-white w-full p-4 mt-[52px] border rounded-xl hover:bg-blue-400"
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

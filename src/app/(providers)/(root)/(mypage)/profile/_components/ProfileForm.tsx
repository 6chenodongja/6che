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
    alert(
      isAvailable
        ? '사용 가능한 닉네임 입니다.'
        : '이미 사용하고 있는 닉네임 입니다.',
    );
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
    <main className="">
      <h1 className="">닉네임 / 프로필 수정</h1>
      <header className="">
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
      <section className="">
        <label className="">
          <h1 className="">닉네임</h1>
        </label>
        <div className="">
          <div className="">
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className=""
              placeholder="최대 8글자"
            />
          </div>
          <div className="">
            <button
              onClick={handleCheckNickname}
              className=""
              disabled={!nickname}
            >
              중복확인
            </button>
          </div>
        </div>

        <div className="">
          <p className="">
            <span>
              <Image
                src="images/ExclamationMarks/ExclamationMarks.svg"
                alt=""
                width={12}
                height={12}
              />
            </span>
            현재 닉네임 : {user?.nickname}
          </p>
        </div>
      </section>
      <section className="">
        <header className="">
          <h2 className="">프로필</h2>
        </header>
        <div className="">
          {profileIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`profile-icon-${index}`}
              width={34}
              height={34}
              className=""
              onClick={() => handleProfileIconSelect(icon)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className=""
          disabled={!nicknameAvailable}
        >
          <Link href={'/mypage'}>완료</Link>
        </button>
      </section>
    </main>
  );
};

export default ProfileForm;

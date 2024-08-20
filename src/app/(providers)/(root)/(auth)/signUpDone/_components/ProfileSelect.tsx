'use client';

import { createClient } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FormEventHandler, useState } from 'react';

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

const ProfileSelect = () => {
  const [profileIcon, setProfileIcon] = useState<string>('');
  const supabase = createClient();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const { user, setUser } = useUserStore();

  const handleClose = () => {
    setIsClosing((prev) => !prev);
  };

  const handleProfileIconSelect = (icon: string) => {
    setProfileIcon(icon);
  };

  const updateUserProfile = async (profileImage: string, userId: string) => {
    const { data, error } = await supabase
      .from('users')
      .update({ avatar: profileImage })
      .eq('id', userId)
      .single();

    if (error) {
      console.error('선택한 프로필이 수정되지 않았어요.', error);
      return;
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!user) return;
    setUser({
      ...user,
      profileImage: profileIcon,
    });

    await updateUserProfile(profileIcon, user.id);

    handleClose();
  };

  return (
    <main
      className={`hidden absolute top-0 left-0 flex-col justify-center items-center rounded-3xl py-14 px-10 md:bg-white md:w-full md:h-full md:flex ${isClosing ? 'md:!hidden' : ''}`}
    >
      {/* <div className="flex flex-col justify-center rounded-t-2xl py-14 px-10 bg-white/70 backdrop-blur-[10px] md:w-full md:h-full md:bg-white"> */}
      <div className="flex flex-col w-full h-full justify-between">
        <div className="text-center">
          <h1 className="text-[18px] font-bold font-headline-03 md:text-[24px] pb-3">
            프로필 선택
          </h1>
          <h2 className="text-[14px] font-normal font-body-KR-small">
            프로필은 마이페이지에서 변경할 수 있습니다
          </h2>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 py-4 pl-[19px] pr-4 gap-y-8 rounded-2xl w-full cursor-pointer mb-[134px]">
            {profileIcons.map((icon, index) => (
              <div
                key={index}
                className="w-[52px] h-[52px] justify-self-center"
              >
                <Image
                  src={icon}
                  alt={`profile-icon-${index}`}
                  width={34}
                  height={34}
                  className={`border-4 rounded-md p-1 w-full ${profileIcon === icon ? 'border-[#7EC5FF]/60' : 'border-transparent'}`}
                  onClick={() => handleProfileIconSelect(icon)}
                />
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center items-center"> */}
          <button
            type="submit"
            className="font-button text-[16px] w-full py-[16px] px-3 rounded-lg shadow-sm text-center font-medium text-[white] bg-[#121212] hover:bg-[#5EB0FF]/80 active:bg-[#73aee7]"
          >
            선택 완료
          </button>
          {/* </div> */}
        </form>
      </div>
      {/* </div> */}

      {/* <button onClick={handleClose}>선택</button> */}
    </main>
  );
};

export default ProfileSelect;

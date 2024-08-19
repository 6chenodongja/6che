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
      className={`hidden absolute left-0 top-0 flex-col justify-center items-center lg:w-full lg:h-full lg:flex ${isClosing ? 'lg:!hidden' : ''}`}
    >
      <div className="flex flex-col justify-center rounded-t-2xl py-[30px] px-4 bg-white/70 backdrop-blur-[10px] lg:w-full lg:h-full lg:bg-white">
        <div className="flex flex-col w-full gap-0.5">
          <div className="text-center">
            <h1 className="text-[18px] font-semibold">프로필 선택</h1>
            <h2 className="text-[14px] font-normal">
              프로필은 마이페이지에서 변경할 수 있습니다
            </h2>
          </div>
          <form className="w-full h-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 h-full py-4 pl-[19px] pr-4 rounded-2xl w-full cursor-pointer">
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
                    className={`border-2 rounded-md p-1 w-full ${profileIcon === icon ? 'border-[#7EC5FF]/60' : 'border-transparent'}`}
                    onClick={() => handleProfileIconSelect(icon)}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center pt-[134px]">
              <button
                type="submit"
                className="font-sans w-full py-[16px] px-3 rounded-lg shadow-sm text-center font-semibold text-[white] bg-[#121212] hover:bg-[#5EB0FFCC]"
              >
                선택 완료
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <button onClick={handleClose}>선택</button> */}
    </main>
  );
};

export default ProfileSelect;

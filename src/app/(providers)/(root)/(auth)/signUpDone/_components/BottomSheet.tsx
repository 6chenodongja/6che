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

const BottomSheet = () => {
  const [profileIcon, setProfileIcon] = useState<string>('');
  const { user, setUser } = useUserStore();
  const supabase = createClient();
  const [isVisible, setIsVisible] = useState<boolean>(true);

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
      console.error('선택한 프로필이 수정되지 않았어요.', error);
      return;
    }

    alert('선택하신 프로필로 변경되었어요!');
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const updates: Record<string, any> = {};
    if (profileIcon) {
      updates['avatar'] = profileIcon;
    }
    if (!user) return;
    setUser({
      ...user,
      profileImage: updates.avatar || user.profileImage,
    });
    await updateUserProfile(updates, user.id);
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-500 ${isVisible ? 'bg-black bg-opacity-50' : 'bg-transparent'}`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isVisible ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 40 }}
        className="flex flex-col justify-center rounded-t-2xl bg-white"
      >
        <div className="">
          <div className="text-center mt-[30px] mb-1">
            <h2 className="text-xl font-semibold">프로필 선택</h2>
          </div>
          <form className="h-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-5 gap-2.5 w-72 h-56 relative pl-[19px] pr-[19px] pt-[16px] pb-[16px] rounded-2xl bg-white">
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
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => handleSubmit}
                className="w-[288px] h-[49px] py-2 px-4 rounded-md shadow-sm text-center font-medium text-white bg-[#121212] hover:bg-blue-400"
              >
                선택 완료
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default BottomSheet;

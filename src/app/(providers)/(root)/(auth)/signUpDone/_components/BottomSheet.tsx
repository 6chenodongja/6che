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
  const supabase = createClient();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const { user, setUser } = useUserStore();

  const handleProfileIconSelect = (icon: string) => {
    setProfileIcon(icon);
  };

  const updateUserProfile = async (profileImage: string, userId: string) => {
    const { data, error } = await supabase
      .from('users')
      .update({ avatar: profileImage })
      .eq('id', userId)
      .single();
    console.log('확인용', data);
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

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // 애니메이션 지속 시간 후에 컴포넌트를 숨김
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center w-full ${isVisible ? 'bg-black bg-opacity-50' : 'bg-transparent'} transition-opacity duration-500`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        initial={{ y: '500%' }}
        animate={{ y: isClosing ? '500%' : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 40 }}
        className="flex flex-col justify-center rounded-t-2xl p-6 bg-white bg-opacity-70"
      >
        <div className="">
          <div className="text-center mt-[30px] mb-1">
            <h2 className="text-xl font-semibold">프로필 선택</h2>
          </div>
          <form className="h-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-5 gap-2  h-56 pl-[19px] pr-[19px] pt-[16px] pb-[16px] rounded-2xl">
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
            <div className="flex justify-center items-center mb-3">
              <button
                type="submit"
                className="w-[288px] h-[49px] py-2 px-4 rounded-md shadow-sm text-center font-medium text-[white] bg-[#121212] hover:bg-blue-400"
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

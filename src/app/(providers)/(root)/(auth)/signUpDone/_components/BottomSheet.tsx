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
      className={`md:hidden flex fixed inset-0 z-50 items-end w-full ${isVisible ? 'bg-black bg-opacity-50' : 'bg-transparent'} transition-opacity duration-500`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        initial={{ y: '500%' }}
        animate={{ y: isClosing ? '500%' : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 40 }}
        className="fixed bottom-0 w-full flex flex-col justify-center rounded-t-2xl py-[30px] px-4 bg-white/70 backdrop-blur-[10px] lg:w-full lg:h-full lg:bg-white"
      >
        <div className="flex flex-col gap-0.5">
          <div className="text-center">
            <h1 className="text-[18px] font-semibold li">프로필 선택</h1>
          </div>
          <form className="w-full h-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-5 h-full gap-y-2 py-4 pl-[19px] pr-4 rounded-2xl w-full cursor-pointer">
              {profileIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-[42px] h-[42px] justify-self-center"
                >
                  <Image
                    key={index}
                    src={icon}
                    alt={`profile-icon-${index}`}
                    width={22}
                    height={22}
                    className={`border-2 rounded-md p-1 w-full bg-white ${profileIcon === icon ? 'border-[#7EC5FF]/60' : 'border-transparent'}`}
                    onClick={() => handleProfileIconSelect(icon)}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center pt-1">
              <button
                type="submit"
                className="font-sans h-[49px] px-3 w-full rounded-lg shadow-sm text-center font-semibold text-[white] bg-[#121212] hover:bg-[#5EB0FFCC]"
              >
                선택 완료
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      {/* <BottomSheetPopup show={} onClose={} /> */}
    </div>
  );
};

export default BottomSheet;

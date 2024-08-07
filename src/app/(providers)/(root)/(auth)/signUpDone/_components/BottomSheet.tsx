'use client';

import { supabase } from '@/supabase/client';
import { useUserStore } from '@/zustand/store/useUserStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FormEventHandler, useState } from 'react';

const BottomSheet = () => {
  const { setUser } = useUserStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };
  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * profileIcons.length);
    setSelectedImage(profileIcons[randomIndex]);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * profileIcons.length);
    const imageToSave = selectedImage || profileIcons[randomIndex];
    setSelectedImage(imageToSave);
  };
  return (
    <motion.div
      initial={{ y: '500%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 40 }}
      className="flex flex-col justify-center rounded-t-2xl bg-white"
    >
      <div className="">
        <div className="text-center mt-[30px] mb-1">
          <h2 className="text-xl font-semibold">프로필 선택</h2>
        </div>
        <form onSubmit={handleSubmit} className="h-full">
          <div className="grid grid-cols-5">
            {profileIcons.map((icon, index) => {
              return (
                <div
                  key={icon}
                  className="grid grid-cols-5 w-72 h-auto rounded-2xl"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={34}
                    height={34}
                    onClick={() => handleImageClick(icon)}
                    className={`border-2 rounded-md ${selectedImage === icon ? 'border-blue-200' : 'border-transparent'}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
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
  );
};

export default BottomSheet;

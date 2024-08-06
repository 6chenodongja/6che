'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FormEventHandler } from 'react';

function BottomSheet() {
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
  // const randomIcon = () => {
  //   return Math.random();
  // };
  // const selectUserProfile = async () => {
  //   if (profileIcon) {
  //   }
  // };
  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (selectedImage) {
      alert(selectedImage);
    } else {
      alert('No image selected.');
    }
  };

  return (
    <>
      <div className="flex flex-col drop-shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-5 gap-3 h-full rounded-t-xl bg-white m-auto mt-[61px] px-5 py-4">
            {profileIcons.map((icon, index) => (
              <div
                key={icon}
                className={`flex justify-center items-center ${selectedImage === icon ? 'border border-2 rounded-[3px] border-blue-300' : 'border-transparent'}`}
              >
                <Image
                  src={icon}
                  alt=""
                  width={34}
                  height={34}
                  onClick={() => handleImageClick(icon)}
                />
              </div>
            ))}
          </div>
          <button className="bg-black text-white rounded-lg w-[288px] h-[49px] hover:bg-blue-400 mb-[77px]">
            선택 완료
          </button>
        </form>
      </div>
    </>
  );
}

export default BottomSheet;

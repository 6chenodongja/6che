import Image from 'next/image';
import { useState } from 'react';

function BottomSheet() {
  // const [profileIcon, setProfileIcon] = useState();

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

  return (
    <>
      <div className="flex flex-col drop-shadow-lg">
        <form className="grid grid-cols-5 gap-3 h-full rounded-t-xl bg-white m-auto mt-[61px] px-5 py-4">
          {profileIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt=""
              width={34}
              height={34}
              className={``}
            />
          ))}
        </form>
      </div>
    </>
  );
}

export default BottomSheet;

{
  /* <button className="bg-black text-white rounded-lg w-[288px] h-[49px] hover:bg-blue-400">
  선택 완료
</button> */
}

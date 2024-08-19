import React, { useState, useEffect } from 'react';
import LoginModalProps from '@/components/Modal/LoginModal';
import { useUserStore } from '@/zustand/store/useUserStore';
import { useRouter } from 'next/navigation';

function ListHeader() {
  const [temperature, setTemperature] = useState<string | null>(null);
  // 모달 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useUserStore();
  const router = useRouter();
  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          },
        );

        const { latitude, longitude } = position.coords;
        console.log('Current Position:', latitude, longitude); // 위치 정보 로그

        // `/api/weather`로 현재 위치의 기온을 가져오는 로직
        const response = await fetch(
          `/api/weather?lat=${latitude}&lon=${longitude}`,
        );
        const weatherData = await response.json();

        if (weatherData && weatherData.current) {
          const currentTemp = `${Math.round(weatherData.current.Temperature.Metric.Value)}`;
          setTemperature(currentTemp);
        } else {
          throw new Error('현재 온도를 가져올 수 없습니다.');
        }
      } catch (error) {
        console.error('Error fetching location or weather:', error);
        setTemperature('N/A');
      }
    };

    fetchLocationAndWeather();
  }, []);

  // 모달 오픈/닫기 함수
  const openModal = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    } else {
      router.replace('/postform');
    }
  };
  const closeModal = () => setIsModalOpen(false);

  const handlerLoginModal = () => {
    closeModal();
  };
  return (
    <div
      className="flex justify-between items-center w-[288px] px-1 py-1.5 rounded-lg bg-white/50 border border-white/60 mx-auto mt-[16px] z-[5000]"
      style={{
        boxShadow:
          '0px 0px 2px 0px rgba(0, 0, 0, 0.05), 0px 2px var(--Blur-8, 8px) 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-0.5 px-1.5">
        <p className="flex-grow-0 flex-shrink-0 font-KR font-normal text-[14px] text-[#666] leading-[21px] tacking-[-0.28px]">
          현재
        </p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6"
            preserveAspectRatio="xMidYMid meet"
          >
            <g filter="url(#filter0_b_3033_4449)">
              <rect width={24} height={24} rx={2} fill="white" />
              <rect
                x={1}
                y={1}
                width={22}
                height={22}
                rx={4}
                fill="white"
                fillOpacity="0.6"
              />
              <g filter="url(#filter1_f_3033_4449)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2281 9.18925C20.3362 8.93728 20.0195 8.73765 19.7719 8.85551C19.4097 9.02799 19.0043 9.12453 18.5764 9.12453C17.0385 9.12453 15.7918 7.87782 15.7918 6.33992C15.7918 5.91212 15.8883 5.50685 16.0607 5.14469C16.1785 4.89713 15.9788 4.58043 15.7269 4.68853C14.5054 5.21261 13.6499 6.42616 13.6499 7.83953C13.6499 9.73233 15.1843 11.2667 17.077 11.2667C18.4905 11.2667 19.7042 10.411 20.2281 9.18925Z"
                  fill="#FFC329"
                  fillOpacity="0.8"
                />
              </g>
              <g filter="url(#filter2_d_3033_4449)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2281 9.18925C20.3362 8.93728 20.0195 8.73765 19.7719 8.85551C19.4097 9.02799 19.0043 9.12453 18.5764 9.12453C17.0385 9.12453 15.7918 7.87782 15.7918 6.33992C15.7918 5.91212 15.8883 5.50685 16.0607 5.14469C16.1785 4.89713 15.9788 4.58043 15.7269 4.68853C14.5054 5.21261 13.6499 6.42616 13.6499 7.83953C13.6499 9.73233 15.1843 11.2667 17.077 11.2667C18.4905 11.2667 19.7042 10.411 20.2281 9.18925Z"
                  fill="#FFC329"
                  fillOpacity="0.8"
                  shapeRendering="crispEdges"
                />
              </g>
              <g filter="url(#filter3_bd_3033_4449)">
                <path
                  d="M15.8824 17.8668C18.2945 17.8668 20.25 16.2047 20.25 14.1543C20.25 12.2162 18.5027 10.6249 16.2741 10.4566C15.8311 8.56639 13.8686 7.14185 11.5147 7.14185C8.8345 7.14185 6.66176 8.98867 6.66176 11.2668C6.66176 11.3015 6.66227 11.336 6.66327 11.3705C4.98802 11.7364 3.75 13.0287 3.75 14.5668C3.75 16.3894 5.48819 17.8668 7.63235 17.8668H15.8824Z"
                  fill="#CCCCCC"
                  fillOpacity="0.7"
                  shapeRendering="crispEdges"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_b_3033_4449"
                x={-20}
                y={-20}
                width={64}
                height={64}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_3033_4449"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_3033_4449"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_f_3033_4449"
                x="12.6499"
                y="3.66675"
                width="8.6001"
                height="8.6001"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.5"
                  result="effect1_foregroundBlur_3033_4449"
                />
              </filter>
              <filter
                id="filter2_d_3033_4449"
                x="13.1499"
                y="4.16675"
                width="8.6001"
                height="8.6001"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.5" dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3033_4449"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3033_4449"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_bd_3033_4449"
                x="1.75"
                y="5.14185"
                width="20.5"
                height="14.7251"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_3033_4449"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.5" dy="-0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect2_dropShadow_3033_4449"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_3033_4449"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#121212]">
            {temperature !== null ? `${temperature}°` : 'N/A'}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-shrink-0  gap-1 p-2 rounded-lg bg-[#121212]">
        <button
          onClick={openModal}
          className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
        >
          등록
        </button>
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] "
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.6665 4.33341C9.6665 3.96522 9.36803 3.66675 8.99984 3.66675C8.63165 3.66675 8.33317 3.96522 8.33317 4.33341V8.33341H4.33317C3.96498 8.33341 3.6665 8.63189 3.6665 9.00008C3.6665 9.36827 3.96498 9.66675 4.33317 9.66675H8.33317V13.6667C8.33317 14.0349 8.63165 14.3334 8.99984 14.3334C9.36803 14.3334 9.6665 14.0349 9.6665 13.6667V9.66675H13.6665C14.0347 9.66675 14.3332 9.36827 14.3332 9.00008C14.3332 8.63189 14.0347 8.33341 13.6665 8.33341H9.6665V4.33341Z"
            fill="white"
          />
        </svg>
      </div>
      {isModalOpen && (
        <LoginModalProps
          isOpen={isModalOpen}
          onConfirm={handlerLoginModal}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default ListHeader;

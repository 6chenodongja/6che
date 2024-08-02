'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getWeather, getWeeklyWeather } from '../../../api/weather/route';
import '../../../../app/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '@/icons/LogoText';
import { IconLogin } from '@/icons/IconLogin';
import { IconLocation } from '@/icons/IconLocation';
import { IconHeart } from '@/icons/IconHeart';
import { motion, AnimatePresence } from 'framer-motion';

// 날짜와 요일을 포맷팅하는 함수 추가
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const day = dayNames[date.getDay()];
  const formattedDate = `${day} ${date.getMonth() + 1}.${date.getDate()}`;
  return formattedDate;
};

// 화씨 온도를 섭씨로 변환하는 함수
const convertFahrenheitToCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

// 강수확률에 따른 이미지를 반환하는 함수
const getPrecipitationImage = (probability: number) => {
  const precipitationValue = Math.min(Math.floor(probability / 10) * 10, 100);
  return `/images/Precipitation-probability/${precipitationValue}.svg`;
};

// 미세먼지 상태에 따른 이미지를 반환하는 함수
const getAirQualityImage = (phrase: string) => {
  const imageName = ['Excellent', 'Fair', 'Poor'].includes(phrase)
    ? phrase
    : 'Excellent';
  return `/images/AirQuality/${imageName}.svg`;
};

// 습도에 따른 이미지를 반환하는 함수 추가
const getHumidityImage = (humidity: number | null) => {
  const range = humidity !== null ? Math.floor(humidity / 10) * 10 : 0;
  return `/images/Humidity/${range}.svg`;
};

// WeatherIcon에 따라 적절한 이미지 경로를 반환하는 함수 추가
const getWeatherIconImage = (iconNumber: number) => {
  const iconMap: { [key: number]: string } = {
    1: '/images/Weather/sun.svg',
    2: '/images/Weather/sun.svg',
    3: '/images/Weather/sun.svg',
    4: '/images/Weather/once_cloudy.svg',
    5: '/images/Weather/thread_fog.svg',
    6: '/images/Weather/thread_fog.svg',
    7: '/images/Weather/blur.svg',
    8: '/images/Weather/blur.svg',
    11: '/images/Weather/fog.svg',
    12: '/images/Weather/drizzling.svg',
    13: '/images/Weather/drizzling.svg',
    14: '/images/Weather/drizzling.svg',
    41: '/images/Weather/drizzling.svg',
    42: '/images/Weather/drizzling.svg',
    15: '/images/Weather/thunderstorm.svg',
    16: '/images/Weather/thunderstorm.svg',
    17: '/images/Weather/thunderstorm.svg',
    18: '/images/Weather/rain.svg',
    19: '/images/Weather/snow.svg',
    20: '/images/Weather/snow.svg',
    21: '/images/Weather/snow.svg',
    22: '/images/Weather/heavy_snow.svg',
    23: '/images/Weather/heavy_snow.svg',
    43: '/images/Weather/heavy_snow.svg',
    44: '/images/Weather/heavy_snow.svg',
    24: '/images/Weather/sleet.svg',
    25: '/images/Weather/sleet.svg',
    26: '/images/Weather/sleet.svg',
    29: '/images/Weather/sleet.svg',
    31: '/images/Weather/wind.svg',
    32: '/images/Weather/wind.svg',
    33: '/images/Weather/night.svg',
    34: '/images/Weather/night.svg',
    35: '/images/Weather/once_cloudy_night.svg',
    36: '/images/Weather/once_cloudy_night.svg',
    37: '/images/Weather/once_cloudy.svg',
    38: '/images/Weather/once_cloudy.svg',
    39: '/images/Weather/drizzling_night.svg',
    40: '/images/Weather/drizzling_night.svg',
  };
  return iconMap[iconNumber] || '/images/Weather/default.svg';
};

const MainPage = () => {
  const [weather, setWeather] = useState<any>(null);
  const [difference, setDifference] = useState<number | null>(null);
  const [hourlyWeather, setHourlyWeather] = useState<any[]>([]);
  const [weeklyWeather, setWeeklyWeather] = useState<any[]>([]);
  const [extraWeatherInfo, setExtraWeatherInfo] = useState<any[]>([]);
  const [isWeeklyWeatherVisible, setIsWeeklyWeatherVisible] = useState(false);
  const router = useRouter();

  const handleCodiClick = () => {
    router.push('/surveypage');
  };

  // 날씨 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getWeather('226081'); // 서울의 위치 키 예시

        console.log('Weather Data:', weatherData);

        if (weatherData.current && weatherData.historical) {
          const currentTemp = weatherData.current?.Temperature?.Metric?.Value; // 현재 온도
          const historicalTemp =
            weatherData.historical?.Temperature?.Metric?.Value; // 어제 온도
          setWeather(weatherData.current);
          setDifference(parseFloat((currentTemp - historicalTemp).toFixed(1)));
          setHourlyWeather(weatherData.hourly || []);
          setExtraWeatherInfo([
            {
              label: '강수확률',
              value: `${weatherData.current?.PrecipitationProbability || '0'}%`,
              image: getPrecipitationImage(
                parseFloat(
                  weatherData.current?.PrecipitationProbability || '0',
                ),
              ),
            },
            {
              label: '습도',
              value: `${weatherData.current?.RelativeHumidity || 'N/A'}%`,
              image: getHumidityImage(
                weatherData.current?.RelativeHumidity || null,
              ),
            },
            {
              label: '미세먼지',
              value: `${weatherData.airQuality?.Category || 'N/A'}`,
              image: getAirQualityImage(
                weatherData.airQuality?.Category || 'Unhealthy',
              ),
            },
          ]);

          console.log(
            '강수확률:',
            weatherData.current?.PrecipitationProbability || '0%',
          );
          console.log('습도:', weatherData.current?.RelativeHumidity || 'N/A');
          console.log('미세먼지:', weatherData.airQuality?.Category || 'N/A');
        }
      } catch (error) {
        console.error('날씨 데이터 요청 오류:', error);
      }
    };

    fetchWeather();
  }, []);

  const handleWeeklyWeatherClick = async () => {
    if (!isWeeklyWeatherVisible) {
      try {
        const weeklyWeatherData = await getWeeklyWeather('226081'); //서울 위치 키
        setWeeklyWeather(weeklyWeatherData);
      } catch (error) {
        console.error('주간 날씨 데이터 요청 오류:', error);
      }
    }
    setIsWeeklyWeatherVisible(!isWeeklyWeatherVisible);
  };

  return (
    <div className="bg-neutral-50 flex flex-col justify-center items-center w-full">
      <header className="w-80 bg-white shadow-md py-4 flex justify-between items-center px-4">
        <Image src="/images/menu.png" alt="메뉴" width={24} height={24} />
        <LogoText className="w-24 h-8" />
        <IconLogin className="w-6 h-6" />
      </header>

      <main className="flex flex-col items-center w-80 bg-gradient-to-b from-blue-200 to-blue-400 text-white py-8 px-4">
        <div className="flex items-center space-x-2 rounded-full bg-white bg-opacity-30 py-1 px-4 backdrop-blur-lg mt-6">
          <span className="text-black">서울시 동작구</span>
          <IconLocation className="w-4 h-4" />
        </div>

        <div className="text-6xl font-bold mt-6 text-black">
          {weather ? `${Math.round(weather.Temperature.Metric.Value)}°` : 'N/A'}
        </div>
        <div className="text-lg text-black">
          어제 기온보다{' '}
          {difference !== null
            ? Math.abs(difference) <= 0.9
              ? '비슷해요'
              : `${Math.round(Math.abs(difference))}° ${difference > 0 ? '높아요' : '낮아요'}`
            : '정보 없음'}
        </div>

        <section className="w-full mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black text-center">
            오늘 옷차림
          </h2>
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-[88px] h-[100px] bg-white bg-opacity-30 rounded-2xl overflow-hidden border border-solid border-gray-300 shadow-md backdrop-blur-lg">
              <div className="absolute top-2 left-0 right-0 text-center text-black font-medium">
                반팔티
              </div>
              <Image
                src="/images/tshirt.png"
                alt="반팔티"
                className="relative mx-auto mt-8 object-contain"
                width={54}
                height={56}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="relative w-[88px] h-[100px] bg-white bg-opacity-30 rounded-2xl overflow-hidden border border-solid border-gray-300 shadow-md backdrop-blur-lg">
              <div className="absolute top-2 left-0 right-0 text-center text-black font-medium">
                반바지
              </div>
              <Image
                src="/images/shorts.png"
                alt="반바지"
                className="relative mx-auto mt-8 object-contain"
                width={54}
                height={56}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="relative w-[88px] h-[100px] bg-white bg-opacity-30 rounded-2xl overflow-hidden border border-solid border-gray-300 shadow-md backdrop-blur-lg">
              <div className="absolute top-2 left-0 right-0 text-center text-black font-medium">
                셔츠
              </div>
              <Image
                src="/images/shirt.png"
                alt="셔츠"
                className="relative mx-auto mt-8 object-contain"
                width={54}
                height={56}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </section>

        <section className="w-full mt-8">
          <div className="flex flex-col items-start gap-3.5 pt-4 pb-5 px-3 relative bg-white bg-opacity-30 rounded-2xl overflow-hidden border border-solid border-gray-300 shadow-md">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-auto items-center justify-center gap-2 px-2 py-0 relative">
                <div className="mt-[-1.00px] font-subtitle-KR-medium font-medium text-black text-center tracking-normal leading-normal relative w-fit whitespace-nowrap">
                  추천 코디
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 p-1.5 relative rounded-md overflow-hidden">
                <div className="font-caption font-medium text-black text-sm">
                  더보기
                </div>
                <Image
                  src="/images/arrow_right.png"
                  alt="더보기"
                  className="w-4 h-4"
                  width={16} // w-4 = 1rem = 16px
                  height={16} // h-4 = 1rem = 16px
                />
              </div>
            </div>
            <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden">
              <Image
                src="/images/recommend-1.png"
                alt="추천 코디 1"
                className="object-cover relative"
                width={112} // w-28 = 7rem = 112px
                height={160} // h-40 = 10rem = 160px
              />
              <div className="w-[114px] rounded-lg overflow-hidden bg-[url(/images/recommend-2.png)] bg-cover bg-[50%_50%] relative h-40">
                <div className="absolute w-6 h-6 top-[50%] left-[84px] transform -translate-y-1/2 overflow-hidden">
                  <IconHeart state="default" />
                </div>
                <div className="inline-flex items-center gap-0.5 px-1 py-px absolute top-[9px] left-[9px] bg-semantic-text-box rounded border border-solid border-semantic-bg-icon">
                  <div className="bg-white rounded-sm overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] relative w-4 h-4"></div>
                  <div className="font-temperature-14 font-medium text-black text-sm tracking-normal leading-normal relative w-fit whitespace-nowrap">
                    26°
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleCodiClick} // 클릭 시 페이지 이동
              className="all-[unset] box-border flex items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] relative self-stretch w-full flex-[0_0_auto] bg-palette-black rounded-md overflow-hidden"
            >
              <div
                style={{ cursor: 'pointer' }}
                className="font-button font-medium text-white text-sm tracking-normal leading-normal relative w-fit mt-[-1.00px] whitespace-nowrap"
              >
                취향 코디 찾기
              </div>
            </button>
          </div>
        </section>

        <section className="w-full mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black">날씨</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center bg-white rounded-[16px] shadow-md w-[88px] h-[100px] overflow-hidden">
              <span className="text-lg text-black mt-[10px]">강수확률</span>
              <Image
                src={`/images/Precipitation-probability/${Math.min(Math.floor((parseFloat(extraWeatherInfo[0]?.value || '0%') / 10) * 10), 100)}.svg`}
                alt="강수확률"
                className="w-[20px] h-[32px]"
                width={20}
                height={32}
              />
              <span className="text-xl text-black mt-[4px]">
                {extraWeatherInfo[0]?.value || '0%'}
              </span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[16px] shadow-md w-[88px] h-[100px] overflow-hidden">
              <span className="text-lg text-black mt-[10px]">미세먼지</span>
              <Image
                src={extraWeatherInfo[2]?.image}
                alt="미세먼지"
                className="w-[20px] h-[32px]"
                width={20}
                height={32}
              />
              <span className="text-xl text-black mt-[4px]">
                {extraWeatherInfo[2]?.value || 'N/A'}
              </span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[16px] shadow-md w-[88px] h-[100px] overflow-hidden">
              <span className="text-lg text-black mt-[10px]">습도</span>
              <Image
                src={extraWeatherInfo[1]?.image}
                alt="습도"
                className="w-[32px] h-[32px]"
                width={32}
                height={32}
              />
              <span className="text-xl text-black mt-[4px]">
                {extraWeatherInfo[1]?.value || 'N/A'}
              </span>
            </div>
          </div>
        </section>

        <section className="w-full mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black">
            시간대별 날씨
          </h2>
          <Swiper spaceBetween={10} slidesPerView={6}>
            {hourlyWeather.map((weather, index) => {
              // WeatherIcon 숫자에 따른 이미지 파일 이름 결정
              const getWeatherIconSrc = (iconNumber: number) => {
                switch (iconNumber) {
                  case 1:
                  case 2:
                  case 3:
                  case 30:
                    return '/images/Weather/sun.svg';
                  case 4:
                    return '/images/Weather/once_cloudy.svg';
                  case 5:
                  case 6:
                    return '/images/Weather/thread_fog.svg';
                  case 7:
                  case 8:
                    return '/images/Weather/blur.svg';
                  case 11:
                    return '/images/Weather/fog.svg';
                  case 12:
                  case 13:
                  case 14:
                  case 41:
                  case 42:
                    return '/images/Weather/drizzling.svg';
                  case 15:
                  case 16:
                  case 17:
                    return '/images/Weather/thunderstorm.svg';
                  case 18:
                    return '/images/Weather/rain.svg';
                  case 19:
                  case 20:
                  case 21:
                    return '/images/Weather/snow.svg';
                  case 22:
                  case 23:
                  case 43:
                  case 44:
                    return '/images/Weather/heavy_snow.svg';
                  case 24:
                  case 25:
                  case 26:
                  case 29:
                    return '/images/Weather/sleet.svg';
                  case 31:
                  case 32:
                    return '/images/Weather/wind.svg';
                  case 33:
                  case 34:
                    return '/images/Weather/night.svg';
                  case 35:
                  case 36:
                    return '/images/Weather/once_cloudy_night.svg';
                  case 37:
                  case 38:
                    return '/images/Weather/once_cloudy.svg';
                  case 39:
                  case 40:
                    return '/images/Weather/drizzling_night.svg';
                  default:
                    return '/images/Weather/default.svg'; // 기본 이미지
                }
              };

              // ISO8601 날짜 형식에서 시간만 추출
              const formatTime = (dateTime: string) => {
                const date = new Date(dateTime);
                const hours = date.getHours();
                return `${hours}시`; // 시간과 "시"를 같은 문자열로 반환
              };

              // 섭씨로 변환하는 함수
              const fahrenheitToCelsius = (fahrenheit: number) => {
                return ((fahrenheit - 32) * 5) / 9;
              };

              return (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center mx-2"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className="text-lg font-medium mt-2">
                      {formatTime(weather.DateTime)}
                    </span>
                  </div>
                  <Image
                    src={getWeatherIconSrc(weather.WeatherIcon)}
                    alt="날씨 아이콘"
                    className="w-12 h-12"
                    width={48} // w-12 = 3rem = 48px
                    height={48} // h-12 = 3rem = 48px
                  />
                  <span className="text-lg font-medium mt-1">
                    {Math.round(fahrenheitToCelsius(weather.Temperature.Value))}
                    °C
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <button
          onClick={handleWeeklyWeatherClick}
          className="bg-black text-white py-2 px-4 rounded-lg mt-4"
        >
          이번주 날씨 보기
        </button>

        <AnimatePresence>
          {isWeeklyWeatherVisible && (
            <motion.section
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full mt-8"
            >
              <h2 className="text-xl font-semibold mb-4">이번주 날씨</h2>
              <div className="grid grid-cols-1 gap-4">
                {weeklyWeather.map((weather, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <span className="font-semibold">
                        {formatDate(weather.Date)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/images/Weather/sunset.svg" // 최저기온 이미지
                        alt="sunset"
                        width={20}
                        height={20}
                      />
                      <span className="ml-2">
                        {Math.round(
                          convertFahrenheitToCelsius(
                            weather.Temperature.Minimum.Value,
                          ),
                        )}
                        °C
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/images/Weather/sunrise.svg" // 최고기온 이미지
                        alt="sunrise"
                        width={20}
                        height={20}
                      />
                      <span className="ml-2">
                        {Math.round(
                          convertFahrenheitToCelsius(
                            weather.Temperature.Maximum.Value,
                          ),
                        )}
                        °C
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <footer className="w-full bg-white py-4 flex flex-col items-center mt-8">
          <nav className="flex flex-col items-center space-y-2 mb-4">
            <Link href="/weather">날씨</Link>
            <Link href="/style">스타일</Link>
            <Link href="/outfit">기온 별 옷차림</Link>
            <Link href="/recommendations">취향 코디</Link>
            <Link href="/mypage">마이페이지</Link>
          </nav>
          <div className="text-left text-gray-500">
            <p>개발: 주현우 | 전은겸 | 김성구 | 석재영 | 한소영</p>
            <p>디자인: 김윤하</p>
            <p>© 2024 김윤하 all rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainPage;

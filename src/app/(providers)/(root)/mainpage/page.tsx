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
  const [isOpen, setIsOpen] = useState(false); // 상태 추가
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            '오늘의 강수확률 (Probability of Precipitation):',
            weatherData.current?.PrecipitationProbability !== undefined
              ? `${weatherData.current.PrecipitationProbability}%`
              : '데이터 없음',
          );
          console.log(
            '강수확률 (Probability of Precipitation):',
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
    setIsOpen(!isOpen); // 상태 반전
  };

  return (
    <div className="bg-neutral-50 flex flex-col justify-center items-center w-full">
      <header className="w-80 bg-white shadow-md py-4 flex justify-between items-center px-4">
        <button onClick={handleMenuToggle}>
          <Image src="/images/menu.png" alt="메뉴" width={24} height={24} />
        </button>
        <LogoText className="w-24 h-8" />
        <IconLogin className="w-6 h-6" />
      </header>

      {/* 네비게이션 바 메뉴 버튼 */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-close" onClick={handleMenuToggle}>
          &times;
        </div>
        <ul>
          <li>
            <Link href="/" onClick={handleMenuToggle}>
              홈
            </Link>
          </li>
          <li>
            <Link href="/style">스타일</Link>
          </li>
          <li>
            <Link href="/outfit">옷차림</Link>
          </li>
          <li>
            <Link href="/surveypage">취향 코디</Link>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col items-center w-80 bg-gradient-to-b from-blue-200 to-blue-400 text-white py-8 px-4">
        <div className="mt-[40px] flex items-center space-x-2 rounded-full bg-white bg-opacity-30 py-1 px-4 backdrop-blur-lg">
          <span className="text-black">서울시 동작구</span>
          <IconLocation className="w-4 h-4" />
        </div>
        <div className="mt-[24px] flex items-end flex-col">
          <div className="relative w-[75px] h-16">
            <div className="absolute top-0 left-0 font-temperature-60 font-[number:var(--temperature-60-font-weight)] text-black text-[length:var(--temperature-60-font-size)] tracking-[var(--temperature-60-letter-spacing)] leading-[var(--temperature-60-line-height)] whitespace-nowrap [font-style:var(--temperature-60-font-style)]">
              {weather
                ? `${Math.round(weather.Temperature.Metric.Value)}°`
                : 'N/A'}
            </div>
          </div>
        </div>
        <div className="mt-[23px] flex justify-center items-center">
          <span className="text-lg text-black">
            {difference !== null
              ? Math.abs(difference) <= 0.9
                ? '어제 기온과 비슷해요'
                : `어제 기온보다 ${Math.round(Math.abs(difference))}° ${difference > 0 ? '높아요' : '낮아요'}`
              : '정보 없음'}
          </span>
        </div>

        <section className="w-full mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black text-center">
            오늘 옷차림
          </h2>
          <div className="flex justify-between items-center mb-4">
            <div className="w-[88px] h-[100px] px-[17px] py-2.5 bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                반팔티
              </div>
              <div className="w-[54px] h-14 relative flex-col justify-start items-start flex">
                <div className="w-[53.04px] h-[55px] relative">
                  <Image
                    src="/images/tshirt.png"
                    alt="반팔티"
                    className="object-contain"
                    width={53.04}
                    height={55}
                  />
                </div>
              </div>
            </div>

            <div className="w-[88px] h-[100px] px-[17px] py-2.5 bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                반바지
              </div>
              <div className="w-[54px] h-14 relative flex-col justify-start items-start flex">
                <div className="w-[53.04px] h-[55px] relative">
                  <Image
                    src="/images/shorts.png"
                    alt="반바지"
                    className="object-contain"
                    width={53.04}
                    height={55}
                  />
                </div>
              </div>
            </div>

            <div className="w-[88px] h-[100px] px-[17px] py-2.5 bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                셔츠
              </div>
              <div className="w-[54px] h-14 relative flex-col justify-start items-start flex">
                <div className="w-[53.04px] h-[55px] relative">
                  <Image
                    src="/images/shirt.png"
                    alt="셔츠"
                    className="object-contain"
                    width={53.04}
                    height={55}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mt-8">
          <div className="w-[288px] h-[297px] px-3 pt-4 pb-5 bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="h-[21px] px-2 justify-center items-center gap-2 flex">
                <div className="text-center text-[#121212] text-base font-medium font-['Noto Sans KR'] leading-tight">
                  추천 코디
                </div>
              </div>
              <div className="p-1.5 rounded-lg justify-center items-center gap-1 flex">
                <div className="text-[#4d4d4d] text-xs font-normal font-['Noto Sans KR'] leading-none">
                  더보기
                </div>
                <div className="w-4 h-4 justify-center items-center flex">
                  <Image
                    src="/images/arrow_right.png"
                    alt="더보기"
                    className="w-4 h-4"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg justify-start items-start gap-2 inline-flex">
              <div className="w-28 h-40 relative rounded-lg">
                <Image
                  src="/images/test_look.svg"
                  alt="추천 코디 1"
                  className="w-[113.60px] h-40 left-0 top-0 absolute object-cover"
                  width={113.6}
                  height={160}
                />
                <div className="w-6 h-6 left-[84px] top-[132px] absolute justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative backdrop-blur-[20px] flex-col justify-start items-start flex" />
                </div>
                <div className="px-1 py-px left-[10px] top-[10px] absolute bg-white/50 rounded border border-white/60 justify-start items-center gap-0.5 inline-flex">
                  <div className="w-4 h-4 bg-white rounded-sm backdrop-blur-[20px] justify-center items-center flex">
                    <div className="w-4 h-4 p-0.5 bg-white/60 rounded justify-center items-center inline-flex">
                      <div className="w-3 h-3 relative" />
                    </div>
                  </div>
                  <div className="text-black text-sm font-normal font-['Varela'] leading-[18.20px]">
                    26°
                  </div>
                </div>
              </div>

              <div className="w-[114px] h-40 relative rounded-lg">
                <Image
                  src="/images/test_look.svg"
                  alt="추천 코디 2"
                  className="w-[114px] h-40 left-0 top-0 absolute object-cover"
                  width={114}
                  height={160}
                />
                <div className="w-6 h-6 left-[84px] top-[132px] absolute justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative backdrop-blur-[20px] flex-col justify-start items-start flex" />
                </div>
                <div className="px-1 py-px left-[10px] top-[10px] absolute bg-white/50 rounded border border-white/60 justify-start items-center gap-0.5 inline-flex">
                  <div className="w-4 h-4 bg-white rounded-sm backdrop-blur-[20px] justify-center items-center flex">
                    <div className="w-4 h-4 p-0.5 bg-white/60 rounded justify-center items-center inline-flex">
                      <div className="w-3 h-3 relative" />
                    </div>
                  </div>
                  <div className="text-black text-sm font-normal font-['Varela'] leading-[18.20px]">
                    26°
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleCodiClick}
              className="self-stretch p-3 bg-[#121212] rounded-lg justify-center items-center gap-2 inline-flex"
            >
              <div className="text-white text-base font-medium font-['Noto Sans KR'] leading-tight">
                취향 코디 찾기
              </div>
            </button>
          </div>
        </section>

        <section className="w-full mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black">날씨</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="w-[88px] h-[100px] relative bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex flex-col justify-center items-center">
              <span className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                강수확률
              </span>
              <Image
                src={`/images/Precipitation-probability/${Math.min(Math.floor((parseFloat(extraWeatherInfo[0]?.value || '0%') / 10) * 10), 100)}.svg`}
                alt="강수확률"
                className="w-5 h-8 mt-1"
                width={20}
                height={32}
              />
              <span className="text-center text-[#121212] text-base font-normal font-['Varela'] leading-tight mt-2">
                {extraWeatherInfo[0]?.value || '0%'}
              </span>
            </div>

            <div className="w-[88px] h-[100px] relative bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex flex-col justify-center items-center">
              <span className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                미세먼지
              </span>
              <Image
                src={extraWeatherInfo[2]?.image}
                alt="미세먼지"
                className="w-5 h-8 mt-1"
                width={20}
                height={32}
              />
              <span className="text-center text-[#121212] text-base font-normal font-['Varela'] leading-tight mt-2">
                {extraWeatherInfo[2]?.value || 'N/A'}
              </span>
            </div>

            <div className="w-[88px] h-[100px] relative bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex flex-col justify-center items-center">
              <span className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                습도
              </span>
              <Image
                src={extraWeatherInfo[1]?.image}
                alt="습도"
                className="w-5 h-8 mt-1"
                width={32}
                height={32}
              />
              <span className="text-center text-[#121212] text-base font-normal font-['Varela'] leading-tight mt-2">
                {extraWeatherInfo[1]?.value || 'N/A'}
              </span>
            </div>
          </div>
        </section>

        <section className="w-full mt-8">
          <div className="w-72 h-[148px] px-2 pt-4 pb-5 bg-white/40 rounded-2xl shadow border border-white/50 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="px-2 justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#1a1a1a] text-xs font-normal font-['Noto Sans KR'] leading-none">
                시간대별 날씨
              </div>
            </div>
            <div className="self-stretch justify-start items-center inline-flex overflow-x-auto">
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
                      className="flex flex-col items-center justify-center mx-2"
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="justify-start items-end inline-flex">
                          <span className="text-center text-[#121212] text-sm font-normal font-['Varela'] leading-[18.20px]">
                            {formatTime(weather.DateTime)}
                          </span>
                        </div>
                        <div className="w-[42px] h-[42px] p-1 justify-center items-center inline-flex">
                          <div className="w-[34px] h-[34px] px-[2.83px] py-[7.08px] bg-white/60 rounded justify-center items-center inline-flex">
                            <div className="relative w-[28.33px] h-[19.83px]">
                              <Image
                                src={getWeatherIconSrc(weather.WeatherIcon)}
                                alt="날씨 아이콘"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>
                        </div>
                        <span className="self-stretch text-center text-[#121212] text-base font-normal font-['Varela'] leading-tight">
                          {Math.round(
                            fahrenheitToCelsius(weather.Temperature.Value),
                          )}
                          °
                        </span>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>

        <button
          onClick={handleWeeklyWeatherClick}
          className="px-3 py-2 bg-white/40 rounded-full shadow border border-white backdrop-blur-[20px] flex justify-center items-center gap-2 mt-4"
        >
          <div className="text-[#4d4d4d] text-sm font-normal font-['Noto Sans KR'] leading-[18.20px]">
            이번주 날씨
          </div>
          <div className="w-[18px] h-[18px] p-px justify-center items-center flex">
            <div className="w-4 h-4 relative flex-col justify-start items-start flex">
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
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
              <div className="w-full h-[348px] px-2.5 py-5 bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex-col justify-start items-start inline-flex">
                {weeklyWeather.slice(1, 7).map((weather, index) => (
                  <div
                    key={index}
                    className="self-stretch px-2 py-1.5 justify-between items-center inline-flex"
                  >
                    <div className="justify-start items-center gap-1 flex">
                      <div
                        className="w-[26px] text-center text-black text-sm font-medium font-['Noto Sans KR'] leading-[21px]"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {index === 0
                          ? '내일'
                          : formatDate(weather.Date).split(' ')[0]}
                      </div>
                      <div className="text-center text-[#7f7f7f] text-sm font-normal font-['Noto Sans KR'] leading-[21px]">
                        {formatDate(weather.Date).split(' ')[1]}
                      </div>
                    </div>
                    <div className="justify-center items-center gap-[11px] flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-8 h-8 p-0.5 justify-center items-center flex">
                          <div className="w-7 h-7 px-[2.33px] py-[5.83px] bg-white/60 rounded justify-center items-center inline-flex">
                            <div className="relative w-[23.33px] h-[16.33px]">
                              <Image
                                src="/images/Weather/sunset.svg"
                                alt="sunset"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-center text-black text-base font-normal font-['Varela'] leading-tight">
                          {Math.round(
                            convertFahrenheitToCelsius(
                              weather.Temperature.Minimum.Value,
                            ),
                          )}
                          °
                        </div>
                      </div>
                      <div className="w-0.5 h-6 bg-[#e6e6e6]/60 rounded-sm" />
                      <div className="justify-start items-center gap-1.5 flex">
                        <div className="w-8 h-8 p-0.5 justify-center items-center flex">
                          <div className="w-7 h-7 px-[3.50px] pt-[3.50px] pb-[3.28px] bg-white/60 rounded justify-center items-center inline-flex">
                            <div className="relative w-[21px] h-[21.22px]">
                              <Image
                                src="/images/Weather/sunrise.svg"
                                alt="sunrise"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-center text-black text-base font-normal font-['Varela'] leading-tight">
                          {Math.round(
                            convertFahrenheitToCelsius(
                              weather.Temperature.Maximum.Value,
                            ),
                          )}
                          °
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <footer className="w-full bg-white py-4 flex flex-col items-start mt-8">
          <nav className="flex flex-col items-start space-y-2 mb-4">
            <LogoText className="w-24 h-8 mb-4" />
            <Link
              href="/"
              className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
            >
              날씨
            </Link>
            <Link
              href="/style"
              className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
            >
              스타일
            </Link>
            <Link
              href="/outfit"
              className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
            >
              기온 별 옷차림
            </Link>
            <Link
              href="/surveypage"
              className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
            >
              취향 코디
            </Link>
            <Link
              href="/mypage"
              className="text-[#4d4d4d] text-sm font-medium leading-[21px] font-['Noto Sans KR']"
            >
              마이페이지
            </Link>
            <Link
              href="/liked"
              className="text-[#4d4d4d] text-xs font-normal leading-none font-['Noto Sans KR']"
            >
              좋아요한 게시글
            </Link>
            <Link
              href="/myposts"
              className="text-[#4d4d4d] text-xs font-normal leading-none font-['Noto Sans KR']"
            >
              내가 쓴 게시글
            </Link>
            <Link
              href="/settings"
              className="text-[#4d4d4d] text-xs font-normal leading-none font-['Noto Sans KR']"
            >
              설정
            </Link>
          </nav>
          <hr className="w-full border-t border-[#e6e6e6] mb-4" />{' '}
          {/* 가로 일자 바 반영 */}
          <div className="flex flex-col items-start text-gray-500">
            <div className="flex items-center mb-2">
              <Image
                src="/images/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-base font-medium text-[#4d4d4d] leading-tight font-['Noto Sans KR']">
                6체노동자
              </span>
            </div>
            <p className="text-left flex flex-wrap">
              <span className="text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                개발:
              </span>
              <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                주현우
              </span>
              <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                전은겸
              </span>
              <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                김성구
              </span>
              <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                석재영
              </span>
              <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                한소영
              </span>
              <br />
              <span className="text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                디자인:
              </span>
              <span className="ml-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
                김윤하
              </span>
            </p>
            <p className="text-left mt-2 text-sm font-normal text-[#4d4d4d] leading-[14px] font-['Noto Sans KR']">
              © 2024. 김윤하 all rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainPage;

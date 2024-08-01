'use client';

import React, { useEffect, useState } from 'react';
import { getWeather, getWeeklyWeather } from '../../../api/weather/route';
import '../../../../app/globals.css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '@/icons/LogoText';
import { IconLogin } from '@/icons/IconLogin';
import { WeatherPieceSun } from '@/components/WeatherPieceSun';
import { IconLocation } from '@/icons/IconLocation';
import { IconHeart } from '@/icons/IconHeart';
import { IconWeatherThunderstorm } from '@/icons/IconWeatherThunderstorm';
import { Component3533 } from '@/components/Component3533';
import { IconFrame } from '@/components/IconFrame';
import { IconArrowDown2 } from '@/icons/IconArrowDown2';

// 화씨 온도를 섭씨로 변환하는 함수
const convertFahrenheitToCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

// 강수확률에 따른 이미지를 반환하는 함수
const getPrecipitationImage = (probability: number) => {
  const range = Math.floor(probability / 10) * 10;
  return `/images/Precipitation-probability/${range}.svg`;
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

const MainPage = () => {
  const [weather, setWeather] = useState<any>(null); // 현재 날씨 상태
  const [difference, setDifference] = useState<number | null>(null); // 온도 차이
  const [hourlyWeather, setHourlyWeather] = useState<any[]>([]); // 시간별 날씨 상태
  const [weeklyWeather, setWeeklyWeather] = useState<any[]>([]); // 주간 날씨 상태
  const [extraWeatherInfo, setExtraWeatherInfo] = useState<any[]>([]); // 추가 날씨 정보 상태
  const [isWeeklyWeatherVisible, setIsWeeklyWeatherVisible] = useState(false); // 주간 날씨 표시 여부

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
          setDifference(parseFloat((currentTemp - historicalTemp).toFixed(1))); // 온도 차이 계산, 소수점 한 자리까지 표시
          setHourlyWeather(weatherData.hourly || []); // 시간별 날씨 데이터 설정
          setExtraWeatherInfo([
            {
              label: '강수확률',
              value: `${weatherData.current?.PrecipitationProbability || '0'}%`,
              image: getPrecipitationImage(
                weatherData.current?.PrecipitationProbability || 0,
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
        <img src="/images/menu.png" alt="메뉴" className="w-6 h-6" />
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
              <img
                src="/images/tshirt.png"
                alt="반팔티"
                className="relative w-[54px] h-14 mx-auto mt-8 object-contain"
              />
            </div>
            <div className="relative w-[88px] h-[100px] bg-white bg-opacity-30 rounded-2xl overflow-hidden border border-solid border-gray-300 shadow-md backdrop-blur-lg">
              <div className="absolute top-2 left-0 right-0 text-center text-black font-medium">
                반바지
              </div>
              <img
                src="/images/shorts.png"
                alt="반바지"
                className="relative w-[54px] h-14 mx-auto mt-8 object-contain"
              />
            </div>
            <div className="relative w-[88px] h-[100px] bg-white bg-opacity-30 rounded-2xl overflow-hidden border border-solid border-gray-300 shadow-md backdrop-blur-lg">
              <div className="absolute top-2 left-0 right-0 text-center text-black font-medium">
                셔츠
              </div>
              <img
                src="/images/shirt.png"
                alt="셔츠"
                className="relative w-[54px] h-14 mx-auto mt-8 object-contain"
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
              <div className="inline-flex items-center justify-center gap-1 p-1.5 relative flex-[0_0_auto] rounded-md overflow-hidden items-center">
                <div className="font-caption font-medium text-black text-sm tracking-normal leading-normal relative w-fit mt-[-1.00px] whitespace-nowrap">
                  더보기
                </div>
                <img
                  src="/images/arrow_right.png"
                  alt="더보기"
                  className="w-4 h-4"
                />
              </div>
            </div>
            <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden">
              <img
                className="w-28 object-cover relative h-40"
                alt="추천 코디 1"
                src="/images/recommend-1.png"
              />
              <div className="w-[114px] rounded-lg overflow-hidden bg-[url(/images/recommend-2.png)] bg-cover bg-[50%_50%] relative h-40">
                <div className="absolute w-6 h-6 top-[50%] left-[84px] transform -translate-y-1/2 overflow-hidden">
                  <IconHeart state="default" />
                </div>
                <div className="inline-flex items-center gap-0.5 px-1 py-px absolute top-[9px] left-[9px] bg-semantic-text-box rounded border border-solid border-semantic-bg-icon">
                  <div className="bg-white rounded-sm overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] relative w-4 h-4">
                    <Component3533
                      property1="one"
                      iconFrameIcon={
                        <IconArrowDown2 className="!absolute !w-4 !h-4 !top-px !left-px" />
                      }
                      className="!w-2 !absolute !h-4 !top-0 !left-0"
                    />
                  </div>
                  <div className="font-temperature-14 font-medium text-black text-sm tracking-normal leading-normal relative w-fit whitespace-nowrap">
                    26°
                  </div>
                </div>
              </div>
            </div>
            <button className="all-[unset] box-border flex items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] relative self-stretch w-full flex-[0_0_auto] bg-palette-black rounded-md overflow-hidden">
              <div className="font-button font-medium text-white text-sm tracking-normal leading-normal relative w-fit mt-[-1.00px] whitespace-nowrap">
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
              <img
                src={`/images/Precipitation-probability/${Math.min(Math.floor((parseFloat(extraWeatherInfo[0]?.value || '0%') / 10) * 10, 100))}.svg`}
                alt="강수확률"
                className="w-[20px] h-[32px]"
              />
              <span className="text-xl text-black mt-[4px]">
                {extraWeatherInfo[0]?.value || '0%'}
              </span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[16px] shadow-md w-[88px] h-[100px] overflow-hidden">
              <span className="text-lg text-black mt-[10px]">미세먼지</span>
              <img
                src={`${extraWeatherInfo[2]?.image}`}
                alt="미세먼지"
                className="w-[20px] h-[32px]"
              />
              <span className="text-xl text-black mt-[4px]">
                {extraWeatherInfo[2]?.value || 'N/A'}
              </span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[16px] shadow-md w-[88px] h-[100px] overflow-hidden">
              <span className="text-lg text-black mt-[10px]">습도</span>
              <img
                src={`${extraWeatherInfo[1]?.image}`}
                alt="습도"
                className="w-[32px] h-[32px]"
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
          <div className="flex overflow-x-scroll">
            {hourlyWeather.map((weather, index) => (
              <div key={index} className="flex flex-col items-center mx-2">
                <span>{weather.time}</span>
                <img
                  src="/images/weather-icon.png"
                  alt="날씨 아이콘"
                  className="w-12 h-12"
                />
                <span>{weather.temperature}°</span>
              </div>
            ))}
          </div>
        </section>

        <button
          onClick={handleWeeklyWeatherClick}
          className="bg-black text-white py-2 px-4 rounded-lg mt-4"
        >
          이번주 날씨 보기
        </button>

        {isWeeklyWeatherVisible && (
          <section className="w-full mt-8">
            <h2 className="text-xl font-semibold mb-4">이번주 날씨</h2>
            <div className="grid grid-cols-2 gap-4">
              {weeklyWeather.map((weather, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span>{weather.day}</span>
                  <img
                    src="/images/weather-icon.png"
                    alt="날씨 아이콘"
                    className="w-12 h-12"
                  />
                  <span>
                    {weather.temperatureMin}° - {weather.temperatureMax}°
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="w-full bg-white py-4 flex flex-col items-center mt-8">
          <nav className="flex flex-col items-center space-y-2 mb-4">
            <Link href="/weather">날씨</Link>
            <Link href="/style">스타일</Link>
            <Link href="/outfit">기온 별 옷차림</Link>
            <Link href="/recommendations">취향 코디</Link>
            <Link href="/mypage">마이페이지</Link>
          </nav>
          <div className="text-left text-gray-500">
            <p>개발: 주현우 | 전은겸 | 김성구 | 석재영 | 김성구</p>
            <p>디자인: 김윤하</p>
            <p>© 2024 김윤하 all rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainPage;

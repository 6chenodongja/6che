'use client';

import React, { useEffect, useState } from 'react';
import { getWeather } from '../../../api/weather/weather';
import '../../../../app/globals.css';

const MainPage = () => {
  const [weather, setWeather] = useState<any>(null); // 현재 날씨 상태
  const [difference, setDifference] = useState<number | null>(null); // 온도 차이

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // 날씨 데이터 요청
        const weatherData = await getWeather('226081'); // 서울의 위치 키 예시
        if (weatherData.current && weatherData.historical) {
          const currentTemp = weatherData.current.Temperature.Metric.Value; // 현재 온도
          const historicalTemp =
            weatherData.historical.Temperature.Metric.Value; // 어제 온도
          setWeather(weatherData.current);
          setDifference(currentTemp - historicalTemp); // 온도 차이 계산
        }
      } catch (error) {
        console.error('날씨 데이터 요청 오류:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="w-80 h-[1926px] relative overflow-hidden bg-white">
      <div className="w-80 h-14 absolute left-0 top-0 bg-[#a2a2a2] flex items-center justify-between px-3">
        <div className="w-[30px] h-[30px] bg-[#d9d9d9]" />
        <div className="flex space-x-3 text-white">
          <p className="text-sm">날씨</p>
          <p className="text-sm">코디</p>
          <p className="text-sm">기온 별 옷차림</p>
          <p className="text-sm">취향 코디</p>
        </div>
        <svg
          width={30}
          height={30}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30px] h-[30px]"
          preserveAspectRatio="none"
        >
          <rect width={30} height={30} fill="#F7F7F7" />
          <circle cx={13} cy={14} r={7} stroke="black" strokeWidth={2} />
          <path d="M18 19L25 26" stroke="black" strokeWidth={2} />
        </svg>
      </div>

      <div className="w-80 h-[294px] absolute left-0 top-14 bg-[#d7d7d7] flex flex-col items-center justify-center">
        <div className="flex items-center">
          <p className="text-6xl text-black">
            {weather ? weather.Temperature.Metric.Value : '...'}
          </p>
          <p className="text-4xl text-black ml-2">°</p>{' '}
          {/* 현재 온도와 기호를 같은 줄에 배치 */}
        </div>
        <div className="flex items-center pt-3.5 pb-[62px]">
          {/* 여기에 있는 원형 기호 제거 */}
        </div>
        <p className="text-lg text-black">
          {difference !== null
            ? `어제보다 ${difference.toFixed(1)}° ${difference > 0 ? '높아요' : '낮아요'}`
            : '...'}
        </p>
      </div>

      <div className="flex justify-start items-center w-[280px] absolute left-4 top-[318px] gap-2">
        <div
          className="w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div
          className="w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div
          className="w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div
          className="w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div className="w-[30px] h-[30px] bg-[#d9d9d9]" />
      </div>

      <p className="absolute left-[118px] top-[478px] text-xl font-medium text-center text-black">
        오늘 하루
      </p>

      <div className="flex justify-start items-center w-72 absolute left-4 top-[524px] gap-2">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative px-3.5 py-1.5"
            >
              <p className="text-sm text-center text-black">00시</p>
              <div className="h-8 bg-[#d9d9d9]" />
              <p className="text-base text-center text-black">00°</p>
            </div>
          ))}
      </div>

      <div className="flex justify-start items-center absolute left-[88px] top-[665px] gap-[5px] px-3.5 py-2 bg-[#c2c2c2]">
        <p className="text-lg font-medium text-center text-black">
          이번주 날씨
        </p>
        <div className="w-6 h-6 bg-[#d9d9d9]" />
      </div>

      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[760px] gap-3">
        <p className="text-lg font-medium text-left text-black">오늘 옷차림</p>
        <p className="text-xs font-medium text-left text-black">
          옷을 선택하면 코디를 볼 수 있어요
        </p>
        <div className="flex justify-start items-center relative gap-2">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="w-20 h-28 bg-[#d9d9d9]" />
            ))}
          <div className="w-[45px] h-16 bg-white" />
        </div>
      </div>

      <div className="flex justify-center items-center w-72 h-12 absolute left-4 top-[900px] rounded-lg bg-[#d9d9d9]">
        <p className="text-lg font-medium text-center text-black">
          내 취향 코디 추천받기
        </p>
      </div>
    </div>
  );
};

export default MainPage;

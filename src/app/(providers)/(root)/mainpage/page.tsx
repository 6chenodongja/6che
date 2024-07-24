'use client';

import React, { useEffect, useState } from 'react';
import { getWeather, getWeeklyWeather } from '../../../api/weather/route'; // route.ts에서 가져옵니다
import '../../../../app/globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { motion, AnimatePresence } from 'framer-motion';

SwiperCore.use([Navigation, Pagination]);

const convertFahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const MainPage = () => {
  const [weather, setWeather] = useState<any>(null); // 현재 날씨 상태
  const [difference, setDifference] = useState<number | null>(null); // 온도 차이
  const [hourlyWeather, setHourlyWeather] = useState<any[]>([]); // 시간별 날씨 상태
  const [weeklyWeather, setWeeklyWeather] = useState<any[]>([]); // 주간 날씨 상태
  const [isWeeklyWeatherVisible, setIsWeeklyWeatherVisible] = useState(false); // 주간 날씨 표시 여부

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getWeather('226081'); // 서울의 위치 키 예시
        if (weatherData.current && weatherData.historical) {
          const currentTemp = weatherData.current?.Temperature?.Metric?.Value; // 현재 온도
          const historicalTemp =
            weatherData.historical?.Temperature?.Metric?.Value; // 어제 온도
          setWeather(weatherData.current);
          setDifference(parseFloat((currentTemp - historicalTemp).toFixed(1))); // 온도 차이 계산, 소수점 한 자리까지 표시
          setHourlyWeather(weatherData.hourly || []); // 시간별 날씨 데이터 설정
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
        const weeklyWeatherData = await getWeeklyWeather('226081'); // 서울의 위치 키 예시
        setWeeklyWeather(weeklyWeatherData);
      } catch (error) {
        console.error('주간 날씨 데이터 요청 오류:', error);
      }
    }
    setIsWeeklyWeatherVisible(!isWeeklyWeatherVisible);
  };

  return (
    <div className="w-80 h-[1926px] relative overflow-hidden bg-white">
      <div className="w-80 h-14 absolute left-0 top-0 overflow-hidden bg-[#a2a2a2]">
        <div className="w-[30px] h-[30px] absolute left-[15px] top-3 bg-[#d9d9d9]" />
        <div className="w-[30px] h-[30px] absolute left-[273px] top-3 bg-[#d9d9d9]" />
        <div className="flex justify-start items-center h-[30px] absolute left-[46px] top-[13px] gap-3 pl-3.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-1 py-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              날씨
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              코디
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              기온 별 옷차림
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-1">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
              취향 코디
            </p>
          </div>
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
      <div className="w-80 h-[294px] absolute left-0 top-14 overflow-hidden bg-[#d7d7d7]">
        <div className="flex flex-col justify-center items-center w-full absolute left-0 top-[102px]">
          <p className="text-6xl text-black">
            {weather ? weather.Temperature.Metric.Value.toFixed(1) : 'N/A'}°
          </p>
          <p className="text-lg font-medium text-center text-black">
            어제보다 {difference}°{' '}
            {difference && difference > 0 ? '높아요' : '낮아요'}
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center w-[280px] absolute left-4 top-[318px] gap-2">
        <div
          className="flex-grow-0 flex-shrink-0 w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div
          className="flex-grow-0 flex-shrink-0 w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div
          className="flex-grow-0 flex-shrink-0 w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div
          className="flex-grow-0 flex-shrink-0 w-[76px] h-[100px] relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-2xl"
          style={{ boxShadow: '4px 4px 20px 0 rgba(0,0,0,0.05)' }}
        />
        <div className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] bg-[#d9d9d9]" />
      </div>
      <p className="absolute left-[118px] top-[478px] text-xl font-medium text-center text-black">
        오늘 하루
      </p>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation={{ nextEl: null, prevEl: null }}
        className="w-72 absolute left-4 top-[524px]"
      >
        {hourlyWeather.map((hour, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <p className="text-sm text-center text-black">{`${new Date(hour.DateTime).getHours()}시`}</p>
            <img
              src={`https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon < 10 ? '0' + hour.WeatherIcon : hour.WeatherIcon}-s.png`}
              alt={hour.IconPhrase}
              className="h-8"
            />
            <p className="text-base text-center text-black">
              {convertFahrenheitToCelsius(hour.Temperature.Value).toFixed(1)}°C
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-start items-center absolute left-[88px] top-[665px] gap-[5px] px-3.5 py-2 bg-[#c2c2c2]">
        <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-black">
          이번주 날씨
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-6 h-6 bg-[#d9d9d9] cursor-pointer"
          onClick={handleWeeklyWeatherClick}
        />
      </div>
      <AnimatePresence>
        {isWeeklyWeatherVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start items-start w-72 py-2 rounded-2xl bg-[#ededed] mx-auto"
            style={{ position: 'relative', top: '665px', zIndex: 10 }}
          >
            {weeklyWeather.map((day, index) => (
              <div
                key={index}
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative px-4 py-2"
              >
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[30px] relative gap-px">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[30px] text-base font-medium text-left text-black">
                    {new Date(day.Date).toLocaleDateString('ko-KR', {
                      weekday: 'short',
                    })}
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[30px] opacity-70 text-xs font-medium text-center text-black">
                    {new Date(day.Date).getMonth() + 1}.
                    {new Date(day.Date).getDate()}
                  </p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <div className="flex-grow-0 flex-shrink-0 w-[38px] h-[38px] bg-[#d9d9d9]" />
                  <div className="flex-grow-0 flex-shrink-0 w-[38px] h-[38px] bg-[#d9d9d9]" />
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                  {convertFahrenheitToCelsius(
                    day.Temperature.Minimum.Value,
                  ).toFixed(1)}
                  ° /
                  {convertFahrenheitToCelsius(
                    day.Temperature.Maximum.Value,
                  ).toFixed(1)}
                  °
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[760px] gap-3">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg font-medium text-left text-black">
          오늘 옷차림
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-xs font-medium text-left text-black">
          옷을 선택하면 코디를 볼 수 있어요
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-20 h-28 bg-[#d9d9d9]" />
          <div className="flex-grow-0 flex-shrink-0 w-20 h-28 bg-[#d9d9d9]" />
          <div className="flex-grow-0 flex-shrink-0 w-20 h-28 bg-[#d9d9d9]" />
          <div className="flex-grow-0 flex-shrink-0 w-20 h-28 bg-[#d9d9d9]" />
          <div className="flex-grow-0 flex-shrink-0 w-[45px] h-16 bg-white" />
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
            반팔티
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-80 absolute left-0 top-[1320px] px-8 pt-[60px] pb-[100px] bg-[#a8a8a8]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pr-9 pt-5">
          <div className="flex-grow-0 flex-shrink-0 w-[38px] h-[38px] bg-[#d9d9d9]" />
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-0.5 py-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-base font-medium text-left text-white">
            날씨
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative py-5">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pb-2.5">
            <p className="flex-grow w-40 text-base font-medium text-left text-white">
              코디
            </p>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            코디 올리기
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative gap-0.5 py-5">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-base font-medium text-left text-white">
            기온 별 옷차림
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-40 relative py-5">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 pb-2.5">
            <p className="flex-grow w-40 text-base font-medium text-left text-white">
              마이페이지
            </p>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            좋아요한 게시글
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            내가 쓴 게시글
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-40 opacity-70 text-base text-left text-white">
            설정
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center absolute left-[17px] top-[1022px] gap-1.5">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[105px] relative gap-[3.75px]">
          <div className="flex-grow-0 flex-shrink-0 w-[105px] h-[142.5px]">
            <div className="w-[105px] h-[142.5px] absolute left-[-0.37px] top-[-0.37px] rounded-md bg-[#d9d9d9]" />
            <svg
              width={18}
              height={19}
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px] absolute left-[81px] top-[118.5px]"
              preserveAspectRatio="none"
            >
              <path
                d="M9.075 14.4125L9 14.4875L8.9175 14.4125C5.355 11.18 3 9.0425 3 6.875C3 5.375 4.125 4.25 5.625 4.25C6.78 4.25 7.905 5 8.3025 6.02H9.6975C10.095 5 11.22 4.25 12.375 4.25C13.875 4.25 15 5.375 15 6.875C15 9.0425 12.645 11.18 9.075 14.4125ZM12.375 2.75C11.07 2.75 9.8175 3.3575 9 4.31C8.1825 3.3575 6.93 2.75 5.625 2.75C3.315 2.75 1.5 4.5575 1.5 6.875C1.5 9.7025 4.05 12.02 7.9125 15.5225L9 16.5125L10.0875 15.5225C13.95 12.02 16.5 9.7025 16.5 6.875C16.5 4.5575 14.685 2.75 12.375 2.75Z"
                fill="black"
              />
            </svg>
            <div className="flex justify-start items-center absolute left-1.5 top-1.5 rounded-md">
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[13.5px] h-[13.5px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M3.65625 11.5C2.80312 11.5 2.07431 11.2047 1.46981 10.6141C0.865312 10.0234 0.562875 9.30156 0.5625 8.44844C0.5625 7.71719 0.782812 7.06563 1.22344 6.49375C1.66406 5.92188 2.24063 5.55625 2.95312 5.39687C3.1875 4.53437 3.65625 3.83594 4.35938 3.30156C5.0625 2.76719 5.85938 2.5 6.75 2.5C7.84688 2.5 8.77744 2.88213 9.54169 3.64638C10.3059 4.41063 10.6879 5.341 10.6875 6.4375C11.3344 6.5125 11.8712 6.7915 12.2979 7.2745C12.7247 7.7575 12.9379 8.32225 12.9375 8.96875C12.9375 9.67188 12.6915 10.2696 12.1995 10.762C11.7075 11.2544 11.1097 11.5004 10.4062 11.5H3.65625ZM3.65625 10.375H10.4062C10.8 10.375 11.1328 10.2391 11.4047 9.96719C11.6766 9.69531 11.8125 9.3625 11.8125 8.96875C11.8125 8.575 11.6766 8.24219 11.4047 7.97031C11.132 10.1828 3.1125 10.375 3.65625 10.375Z"
                  fill="black"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-[10.5px] text-left text-black">
                26°
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute left-[17px] top-[983px] text-base font-medium text-left text-black">
        추천 코디
      </p>
      <div className="w-72 h-[46px] absolute left-[15px] top-[1200px] rounded-lg bg-[#d9d9d9]" />
      <p className="absolute left-[79px] top-[1210px] text-lg font-medium text-left text-black">
        내 취향 코디 추천받기
      </p>
      <p className="absolute left-[266px] top-[990px] text-sm font-medium text-left text-black">
        더보기
      </p>
    </div>
  );
};

export default MainPage;

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // next/router 대신 next/navigation 사용
import '../../../../app/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoText } from '../../../../icons/LogoText';
import { IconLogin } from '../../../../icons/IconLogin';
import { IconLocation } from '../../../../icons/IconLocation';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
import { supabase } from '@/supabase/client';

// 강수확률에 따른 이미지를 반환하는 함수
const getPrecipitationImage = (probability: number) => {
  const precipitationValue = Math.min(Math.floor(probability / 10) * 10, 100);
  return `/images/Precipitation-probability/${precipitationValue}.svg`;
};

// 습도에 따른 이미지를 반환하는 함수
const getHumidityImage = (humidity: number | null) => {
  const range = humidity !== null ? Math.floor(humidity / 10) * 10 : 0;
  return `/images/Humidity/${range}.svg`;
};

// 미세먼지 상태에 따른 이미지를 반환하는 함수
const getAirQualityImage = (phrase: string) => {
  const imageName = ['Excellent', 'Fair', 'Poor'].includes(phrase)
    ? phrase
    : 'Excellent';
  return `/images/AirQuality/${imageName}.svg`;
};

// 자외선 지수에 따른 이미지를 반환하는 함수
const getUVIndexImage = (uvIndex: number) => {
  if (uvIndex >= 0 && uvIndex <= 2) {
    return `/images/UVIndex/low.svg`;
  } else if (uvIndex >= 3 && uvIndex <= 5) {
    return `/images/UVIndex/moderate.svg`;
  } else if (uvIndex >= 6 && uvIndex <= 7) {
    return `/images/UVIndex/high.svg`;
  } else if (uvIndex >= 8 && uvIndex <= 10) {
    return `/images/UVIndex/very_high.svg`;
  } else {
    return `/images/UVIndex/extreme.svg`;
  }
};

// 날짜 포맷 함수
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

interface Post {
  id: string;
  user_id: string;
  created_at: string | null;
  image_url: string | null;
  comment: string | null;
  like: number | null;
  gender: string | null;
  weather: string | null;
}

const fetchAndFilterPosts = async (currentTemp: number): Promise<Post[]> => {
  const { data: posts, error } = await supabase
    .from('posts')
    .select(
      'id, user_id, created_at, image_url, comment, like, gender, weather',
    );

  if (error) {
    console.error('Failed to fetch posts', error);
    return [];
  }

  return posts
    .map((post) => {
      const postTempMatch = post.weather?.match(/(\d+)(?=°C)/);
      const postTemp = postTempMatch ? parseInt(postTempMatch[1], 10) : null;
      const tempDifference =
        postTemp !== null ? Math.abs(postTemp - currentTemp) : Number.MAX_VALUE;
      return { ...post, tempDifference };
    })
    .sort((a, b) => a.tempDifference - b.tempDifference)
    .slice(0, 2);
};

const MainPage = () => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [weather, setWeather] = useState<any>(null);
  const [difference, setDifference] = useState<number | null>(null);
  const [hourlyWeather, setHourlyWeather] = useState<any[]>([]);
  const [weeklyWeather, setWeeklyWeather] = useState<any[]>([]);
  const [extraWeatherInfo, setExtraWeatherInfo] = useState<any[]>([]);
  const [isWeeklyWeatherVisible, setIsWeeklyWeatherVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCodiClick = () => {
    router.push('/survey');
  };

  const fetchWeatherData = async () => {
    try {
      // 먼저 weatherData API를 호출
      const response = await fetch('/api/weather?locationKey=226081');
      const weatherData = await response.json();

      // 기본 weather 데이터를 설정
      setWeather(weatherData.current);
      setDifference(
        parseFloat(
          (
            weatherData.current.Temperature.Metric.Value -
            weatherData.historical.Temperature.Metric.Value
          ).toFixed(1),
        ),
      );
      setHourlyWeather(weatherData.hourly || []);

      // 강수확률 데이터를 별도의 API에서 가져오기
      const precipitationResponse = await fetch(
        'https://dataservice.accuweather.com/forecasts/v1/daily/5day/226081?apikey=U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR&language=ko-kr&details=true&metric=true',
      );
      const precipitationData = await precipitationResponse.json();
      const precipitationProbability =
        precipitationData.DailyForecasts[0].Day.PrecipitationProbability;

      // 자외선 지수 가져오기
      const uvIndex = precipitationData.DailyForecasts[0].AirAndPollen[5].Value;

      // extraWeatherInfo 상태 설정
      setExtraWeatherInfo([
        {
          label: '강수확률',
          value: `${precipitationProbability || '0'}%`,
          image: getPrecipitationImage(precipitationProbability || 0),
        },
        {
          label: '습도',
          value: `${weatherData.current.RelativeHumidity || 'N/A'}%`,
          image: getHumidityImage(weatherData.current.RelativeHumidity || null),
        },
        {
          label: '미세먼지',
          value: `${weatherData.airQuality?.Category || 'N/A'}`,
          image: getAirQualityImage(
            weatherData.airQuality?.Category || 'Unhealthy',
          ),
        },
        {
          label: '자외선',
          value: `${uvIndex || 'N/A'}`,
          image: getUVIndexImage(uvIndex || 0),
        },
      ]);

      // 추천 코디 데이터 가져오기
      const currentTemp = Math.round(
        weatherData.current?.Temperature?.Metric?.Value,
      );
      const posts = await fetchAndFilterPosts(currentTemp);
      setFilteredPosts(posts);
    } catch (error) {
      console.error('Failed to fetch weather data', error);
    }
  };

  // 이미지 URL이 유효한지 확인하는 함수
  const isValidImageUrl = (url: string | null) => {
    if (!url) return false;
    return url.startsWith('https://') && !url.includes('InvalidKey');
  };

  useEffect(() => {
    fetchWeatherData(); // 컴포넌트가 마운트될 때 데이터 가져오기
  }, []);

  const fetchWeeklyWeatherData = async () => {
    try {
      const response = await fetch(
        '/api/weather?locationKey=226081&type=weekly',
      );
      const weeklyWeatherData = await response.json();
      setWeeklyWeather(weeklyWeatherData);
    } catch (error) {
      console.error('Failed to fetch weekly weather data', error);
    }
  };

  const handleWeeklyWeatherClick = async () => {
    if (!isWeeklyWeatherVisible) {
      await fetchWeeklyWeatherData();
    }
    setIsWeeklyWeatherVisible(!isWeeklyWeatherVisible);
    setIsOpen(!isOpen);
  };

  const getBackgroundByTime = (hours: number) => {
    if (hours >= 7 && hours < 9) {
      return 'linear-gradient(180deg, rgba(41,140,255,1) 0%, rgba(95,163,243,0.6) 34%, rgba(255,149,24,0.3) 69%, rgba(255,205,30,0.1) 100%)';
    } else if (hours >= 9 && hours < 13) {
      return 'linear-gradient(180deg, rgba(41,140,255,0.8) 0%, rgba(95,163,243,0.5) 34%, rgba(156,190,229,0.2) 69%, rgba(255,255,255,0) 100%)';
    } else if (hours >= 13 && hours < 16) {
      return 'linear-gradient(180deg, rgba(41,140,255,1) 0%, rgba(81,158,248,0.7) 34%, rgba(95,163,243,0.3) 69%, rgba(95,163,243,0) 100%)';
    } else if (hours >= 16 && hours < 18) {
      return 'linear-gradient(180deg, rgba(41,140,255,1) 0%, rgba(81,108,248,0.6) 34%, rgba(255,149,24,0.3) 69%, rgba(255,205,30,0.1) 100%)';
    } else if (hours >= 18 && hours < 20) {
      return 'linear-gradient(180deg, rgba(7,39,122,1) 0%, rgba(20,80,183,0.6) 47%, rgba(183,25,34,0.3) 87%, rgba(255,178,30,0.1) 100%)';
    } else {
      return 'linear-gradient(180deg, rgba(17,25,47,1) 0%, rgba(26,35,66,0.6) 60%, rgba(34,45,92,0) 100%)';
    }
  };

  const currentHours = new Date().getHours();
  const backgroundStyle = { background: getBackgroundByTime(currentHours) };

  return (
    <div className="container bg-neutral-50 flex flex-col justify-center items-center w-full">
      <Header />

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
            <Link href="/list" onClick={handleMenuToggle}>
              스타일
            </Link>
          </li>
          <li>
            <Link href="/list" onClick={handleMenuToggle}>
              옷차림
            </Link>
          </li>
          <li>
            <Link href="/survey">취향 코디</Link>
          </li>
        </ul>
      </nav>

      <main
        className="container flex flex-col items-center w-full text-white py-8 px-4"
        style={backgroundStyle}
      >
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
                : `어제 기온보다 ${Math.round(Math.abs(difference))}° ${
                    difference > 0 ? '높아요' : '낮아요'
                  }`
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
          <div className="w-full max-w-[320px] h-[297px] px-4 pt-4 pb-5 bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="h-[21px] px-2 justify-center items-center gap-2 flex">
                <div className="section-box text-center text-[#121212] text-base font-medium font-['Noto Sans KR'] leading-tight">
                  추천 코디
                </div>
              </div>
              <div
                className="p-1.5 rounded-lg justify-center items-center gap-1 flex cursor-pointer"
                onClick={() => router.push('/list')}
              >
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
              <Swiper
                spaceBetween={8}
                slidesPerView={2}
                pagination={{ clickable: true }}
                navigation={false} // 스와이퍼 네비게이션 화살표 제거
              >
                {filteredPosts.map((post, index) => {
                  // 이미지 URL이 유효한지 검사
                  const validImageUrl = isValidImageUrl(post.image_url);

                  // 기본 이미지를 설정하거나, 유효한 이미지 URL을 사용
                  const imageUrl = validImageUrl
                    ? post.image_url
                    : '/images/default_image.png'; // 기본 이미지 경로 설정

                  // 해당 게시물의 온도 추출
                  const postTempMatch = post.weather?.match(/(\d+)(?=°C)/);
                  const postTemperature = postTempMatch
                    ? parseInt(postTempMatch[1], 10)
                    : 'N/A';

                  return (
                    <SwiperSlide key={index}>
                      <div
                        className="w-28 h-40 relative rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => router.push(`/detail/${post.id}`)} // 카드 클릭 시 해당 포스트 디테일 페이지로 이동
                      >
                        <Image
                          src={imageUrl as string}
                          alt={`추천 코디 ${index + 1}`}
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
                            {postTemperature}°
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
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
          <Swiper spaceBetween={4} slidesPerView={3}>
            {extraWeatherInfo.map((info, index) => (
              <SwiperSlide key={index} className="weather-slide">
                <div className="w-[88px] h-[100px] relative bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex flex-col justify-center items-center">
                  <span className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                    {info.label}
                  </span>
                  <Image
                    src={info.image}
                    alt={info.label}
                    className="w-5 h-8 mt-1"
                    width={20}
                    height={32}
                  />
                  <span className="text-center text-[#121212] text-base font-normal font-['Varela'] leading-tight mt-2">
                    {info.value}
                  </span>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className="weather-slide">
              <div className="w-[88px] h-[100px] relative bg-white/40 rounded-2xl shadow border border-white backdrop-blur-[20px] flex flex-col justify-center items-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full h-full flex justify-center items-center"
                >
                  <span className="text-[#121212] text-xl">+</span>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="w-full mt-8">
          <div className="w-full max-w-[320px] h-[148px] px-4 pt-4 pb-5 bg-white/40 rounded-2xl shadow border border-white/50 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="px-2 justify-center items-center gap-2 inline-flex">
              <div className=" section-box text-center text-[#1a1a1a] text-xs font-normal font-['Noto Sans KR'] leading-none">
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
                  isOpen ? 'rotate-[180deg]' : 'rotate-[-360deg]'
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
      </main>
      <Footer />

      {/* 요소 추가 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">날씨 요소 추가</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* 추가 가능한 요소 버튼 */}
              <button
                onClick={() => {
                  // 추가하고 싶은 요소에 따라 상태 업데이트
                  setShowModal(false);
                }}
                className="p-2 bg-gray-200 rounded-md"
              >
                예: 자외선 지수
              </button>
              {/* 다른 요소 버튼들도 추가 가능 */}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 p-2 bg-blue-500 text-white rounded-md"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;

'use client';

import React, { useEffect, useState, useCallback } from 'react';
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

// Post 타입 정의
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

// Weather 타입 정의
type Weather = {
  Date: string;
  Temperature: {
    Minimum: { Value: number };
    Maximum: { Value: number };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
  };
};

type WeatherData = Weather[];

// 강수확률에 따른 이미지를 반환하는 함수!
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

// 게시글 데이터를 가져오고 필터링하는 함수
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
      // 이미지 URL에서 첫 번째 링크만 사용
      const firstImageUrl = post.image_url
        ? post.image_url.split(',')[0]
        : null;

      const postTempMatch = post.weather?.match(/(\d+)(?=°C)/);
      const postTemp = postTempMatch ? parseInt(postTempMatch[1], 10) : null;
      const tempDifference =
        postTemp !== null ? Math.abs(postTemp - currentTemp) : Number.MAX_VALUE;
      return { ...post, image_url: firstImageUrl, tempDifference };
    })
    .sort((a, b) => a.tempDifference - b.tempDifference)
    .slice(0, 5);
};

// LocationInput 컴포넌트
const LocationInput = ({
  setWeather,
}: {
  setWeather: (weatherData: any) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [location, setLocation] = useState('서울시 동작구');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  type GeocodeAddressComponent = {
    long_name: string;
    short_name: string;
    types: string[];
  };

  // 위치 데이터를 가져오는 함수
  const fetchLocationData = async (lat: number, lon: number) => {
    try {
      // 날씨 데이터를 먼저 가져옵니다.
      const weatherResponse = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);

      // 위치 이름을 가져옵니다.
      const geocodeResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&language=ko&key=AIzaSyDVa-q7hV1cCNDYTKyhV5Mbef_ydoYOyzo`,
      );
      const geocodeData = await geocodeResponse.json();

      if (geocodeData.status === 'OK' && geocodeData.results.length > 0) {
        const result = geocodeData.results[0];
        const addressComponents = result.address_components;

        const locality = addressComponents.find(
          (component: GeocodeAddressComponent) =>
            component.types.includes('locality'),
        );

        const sublocality = addressComponents.find(
          (component: GeocodeAddressComponent) =>
            component.types.includes('sublocality_level_1'),
        );

        const locationName =
          `${locality?.long_name || ''} ${sublocality?.long_name || ''}`.trim();

        if (locationName) {
          setLocation(locationName);
        } else {
          setLocation('위치 정보 없음');
        }
      } else {
        setLocation('위치 정보 없음');
      }

      setIsEditing(false);
    } catch (error) {
      console.error('Failed to fetch location data', error);
      setLocation('위치 정보 없음');
    }
  };

  // 위치 정보를 가져오는 함수
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationData(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location', error);
          alert('위치를 가져올 수 없습니다. 위치 권한을 확인해주세요.');
        },
      );
    } else {
      alert('현재 브라우저에서 위치 정보를 사용할 수 없습니다.');
    }
  };

  return (
    <>
      <div
        className="absolute"
        style={{
          top: '-86px',
          right: '-44px',
          width: '94px',
          height: '94px',
          zIndex: 0, // Sun.svg의 z-index를 0으로 설정하여 뒤로 보냄
        }}
      >
        <Image
          src="/images/Sun.svg"
          alt="Sun"
          className="object-contain"
          width={94}
          height={94}
        />
      </div>

      <div
        className="h-[26px] px-2 py-1 bg-white/40 rounded-full shadow border border-white/50 linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] justify-center items-center inline-flex"
        style={{ zIndex: 1 }} // 위치 박스 z-index를 1로 설정하여 앞으로 보냄
      >
        <div className="justify-start items-center gap-0.5 flex">
          {isEditing ? (
            <input
              type="text"
              value={location}
              onChange={handleInputChange}
              onBlur={handleBlur}
              autoFocus
              className="text-[#121212] text-xs font-normal font-['Noto Sans KR'] leading-none bg-transparent border-none outline-none"
              style={{ whiteSpace: 'nowrap', lineHeight: '1' }}
            />
          ) : (
            <span
              className="text-[#121212] text-xs font-normal font-['Noto Sans KR'] leading-none"
              onClick={handleEditClick}
              style={{ whiteSpace: 'nowrap', lineHeight: '1' }}
            >
              {location}
            </span>
          )}
        </div>
        <div className="w-[18px] h-[18px] p-px justify-center items-center flex">
          <IconLocation
            className="w-4 h-4 cursor-pointer"
            onClick={handleLocationClick}
          />
        </div>
      </div>
    </>
  );
};

// MainPage 컴포넌트
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

  // 날씨 데이터를 업데이트하는 함수
  const updateWeatherData = useCallback((data: any) => {
    console.log(data);
    if (data && data.current) {
      setWeather(data.current);

      setDifference(
        parseFloat(
          (
            data.current.Temperature.Metric.Value -
            data.historical.Temperature.Metric.Value
          ).toFixed(1),
        ),
      );
      setHourlyWeather(data.hourly || []);

      const uvIndex =
        data.current?.UVIndex ?? data.dailyForecasts?.[0]?.UVIndex ?? 'N/A';
      console.log('UV Index:', uvIndex);

      setExtraWeatherInfo([
        {
          label: '강수확률',
          value: `${data.current.Day?.PrecipitationProbability || '0'}%`,
          image: getPrecipitationImage(
            data.current.Day?.PrecipitationProbability || 0,
          ),
        },
        {
          label: '습도',
          value: `${data.current.RelativeHumidity || 'N/A'}%`,
          image: getHumidityImage(data.current.RelativeHumidity || null),
        },
        {
          label: '미세먼지',
          value: `${data.airQuality?.Category || 'N/A'}`,
          image: getAirQualityImage(data.airQuality?.Category || 'Unhealthy'),
        },
        {
          label: '자외선',
          value: `${uvIndex !== 'N/A' ? uvIndex : 'N/A'}`,
          image: getUVIndexImage(uvIndex !== 'N/A' ? uvIndex : 0),
        },
      ]);
    }
  }, []);

  // 날씨 데이터를 가져오는 함수
  const fetchWeatherData = useCallback(
    async (locationKey = '226081') => {
      try {
        const response = await fetch(`/api/weather?locationKey=${locationKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const weatherData = await response.json();

        if (!weatherData || !weatherData.current) {
          throw new Error('Invalid weather data received');
        }

        updateWeatherData(weatherData);

        const currentTemp = Math.round(
          weatherData.current.Temperature.Metric.Value,
        );
        const posts = await fetchAndFilterPosts(currentTemp);
        setFilteredPosts(posts);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather(null);
        setDifference(null);
        setHourlyWeather([]);
        setWeeklyWeather([]);
        setExtraWeatherInfo([]);
        setFilteredPosts([]);
      }
    },
    [updateWeatherData],
  );

  // 초기 로드 시 날씨 데이터를 가져옴
  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  // 유효한 이미지 URL인지 확인하는 함수
  const isValidImageUrl = (url: string | null) => {
    if (!url) return false;
    return url.startsWith('https://') && !url.includes('InvalidKey');
  };

  // 주간 날씨 데이터를 가져오는 함수
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

  // 주간 날씨 버튼 클릭 핸들러
  const handleWeeklyWeatherClick = async () => {
    if (!isWeeklyWeatherVisible) {
      await fetchWeeklyWeatherData();
    }
    setIsWeeklyWeatherVisible(!isWeeklyWeatherVisible);
    setIsOpen(!isOpen);
  };

  // 오늘 이후의 주간 날씨만 필터링하는 함수
  const filterWeeklyWeather = (weatherData: WeatherData): Weather[] => {
    const today = new Date();
    return weatherData.filter((weather) => {
      const weatherDate = new Date(weather.Date);
      return weatherDate > today;
    });
  };

  // 시간대에 따른 배경색을 반환하는 함수
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

  // 텍스트 색상 시간에 따라 동적으로 설정
  const isNightTime = currentHours >= 18 || currentHours < 7;
  const textColor = isNightTime ? 'text-white' : 'text-[#121212]';

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
        style={{
          ...backgroundStyle, // 기존 배경 스타일을 유지하고
          paddingTop: '64px', // 헤더 높이만큼 패딩을 추가
        }}
      >
        <LocationInput setWeather={updateWeatherData} />

        <div className="mt-[24px] flex items-end flex-col relative">
          <div
            className="absolute"
            style={{
              top: '-78px',
              right: '-84px',
              width: '94px',
              height: '94px',
            }}
          >
            <Image
              src="/images/Sun.svg"
              alt="Sun"
              className="object-contain"
              width={94}
              height={94}
            />
          </div>

          <div
            className="absolute"
            style={{
              top: '-27px', // 구름 이미지의 위치 조정
              right: '-208px', // 구름 이미지의 위치 조정
              width: '200px',
              height: '120px',
              zIndex: 1, // 구름 이미지의 z-index를 1로 설정하여 Sun.svg보다 앞에 위치
            }}
          >
            <Image
              src="/images/up_cloud.svg"
              alt="Cloud"
              className="object-contain"
              width={146}
              height={86}
            />
          </div>

          <div
            className="absolute"
            style={{
              top: '35px', // 새로운 구름 이미지의 위치 조정
              right: '9px', // 새로운 구름 이미지의 위치 조정
              width: '189px',
              height: '115px',
              zIndex: 1, // 뒤쪽에 배치
            }}
          >
            <Image
              src="/images/down_cloud.svg"
              alt="Down Cloud"
              className="object-contain"
              width={143}
              height={83}
            />
          </div>

          <div
            className="relative w-[75px] h-[64px] mt-[15px]"
            style={{ top: '-15px' }}
          >
            <div
              className={`absolute top-0 left-0 ${textColor} text-[63.6px] font-[400] tracking-[0] leading-[63.6px] whitespace-nowrap z-10`}
            >
              {weather && weather.Temperature && weather.Temperature.Metric ? (
                <>
                  {Math.round(weather.Temperature.Metric.Value)}
                  <span
                    style={{
                      position: 'relative',
                      top: '-15px', // ° 기호를 위로 올리기 위해 top 속성 사용
                    }}
                  >
                    °
                  </span>
                </>
              ) : (
                'N/A'
              )}
            </div>
          </div>
        </div>

        <div
          className="relative flex justify-center items-center"
          style={{ top: '12px', zIndex: 10, marginBottom: '24px' }}
        >
          {weather ? (
            <span
              className={`${textColor} text-sm font-semibold font-['Noto Sans KR'] leading-[18.20px]`}
            >
              {difference !== null
                ? Math.abs(difference) <= 0.9
                  ? '어제 기온과 비슷해요'
                  : `어제 기온보다 ${Math.round(Math.abs(difference))}° ${
                      difference > 0 ? '높아요' : '낮아요'
                    }`
                : '정보 없음'}
            </span>
          ) : (
            <div className="text-center text-red-500">
              날씨 정보를 불러오는데 실패했습니다. 나중에 다시 시도해주세요.
            </div>
          )}
        </div>

        <h2
          className={`${textColor} text-base font-black font-['Noto Sans KR'] leading-tight mt-[34px]`}
        >
          오늘 옷차림
        </h2>

        <section className="w-full mt-3.5">
          <div className="flex justify-between items-center mb-4">
            <div className="w-[88px] h-[100px] px-[17px] py-2.5 bg-white/40 rounded-2xl shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                반팔티
              </div>
              <div className="w-[54px] h-14 relative flex-col justify-start items-start flex">
                <div className="w-[53.04px] h-[55px] relative">
                  <Image
                    src="/images/tshirt.svg"
                    alt="반팔티"
                    className="object-contain"
                    width={53.04}
                    height={55}
                  />
                </div>
              </div>
            </div>

            <div className="w-[88px] h-[100px] px-[17px] py-2.5 bg-white/40 rounded-2xl shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                반바지
              </div>
              <div className="w-[54px] h-14 relative flex-col justify-start items-start flex">
                <div className="w-[53.04px] h-[55px] relative">
                  <Image
                    src="/images/shorts.svg"
                    alt="반바지"
                    className="object-contain"
                    width={53.04}
                    height={55}
                  />
                </div>
              </div>
            </div>

            <div className="w-[88px] h-[100px] px-[17px] py-2.5 bg-white/40 rounded-2xl shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#121212]/70 text-xs font-normal font-['Noto Sans KR'] leading-none">
                셔츠
              </div>
              <div className="w-[54px] h-14 relative flex-col justify-start items-start flex">
                <div className="w-[53.04px] h-[55px] relative">
                  <Image
                    src="/images/shirt.svg"
                    alt="셔츠"
                    className="object-contain"
                    width={55}
                    height={55}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mt-[5px]">
          <div className="w-full max-w-[320px] h-[297px] px-4 pt-4 pb-5 bg-white/40 rounded-2xl shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="h-[21px] px-2 justify-center items-center gap-[129px] flex">
                <div className="text-[#121212] text-base font-semibold font-['NotoSansKR'] leading-tight">
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
                  const validImageUrl = isValidImageUrl(post.image_url);

                  const imageUrl = validImageUrl
                    ? post.image_url
                    : '/images/default_image.png';

                  const postTempMatch = post.weather?.match(/(\d+)(?=°C)/);
                  const postTemperature = postTempMatch
                    ? parseInt(postTempMatch[1], 10)
                    : 'N/A';

                  return (
                    <SwiperSlide key={index}>
                      <div
                        className="w-28 h-40 relative rounded-lg overflow-hidden cursor-pointer linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255)"
                        onClick={() => router.push(`/detail/${post.id}`)}
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

        <section className="w-full mt-[58px]">
          <h2
            className={`box-sizing-[20.8px] text-[16px] text-center font-semibold mb-4 ${textColor}`}
          >
            날씨
          </h2>
          <Swiper spaceBetween={4} slidesPerView={3}>
            {extraWeatherInfo.map((info, index) => (
              <SwiperSlide key={index} className="weather-slide">
                <div className="w-[88px] h-[100px] relative bg-white/40 rounded-2xl shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex flex-col justify-center items-center">
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
              <div className="w-[88px] h-[100px] relative bg-white/40 rounded-2xl shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex flex-col justify-center items-center">
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

        <section className="w-full mt-[18px]">
          <div className="w-full max-w-[320px] h-[148px] px-2 pt-4 pb-5 bg-white/40 rounded-2xl shadow border border-white/50 linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="px-2 justify-center items-center gap-2 inline-flex">
              <div className="text-center text-[#1a1a1a] text-xs font-normal font-['Noto Sans KR'] leading-none">
                시간대별 날씨
              </div>
            </div>
            <div className="self-stretch justify-start items-center inline-flex overflow-x-auto">
              <Swiper spaceBetween={10} slidesPerView={6}>
                {hourlyWeather.map((weather, index) => {
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

                  const formatTime = (dateTime: string) => {
                    const date = new Date(dateTime);
                    const hours = date.getHours();
                    return `${hours}시`; // 시간과 "시"를 같은 문자열로 반환
                  };

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
          className="px-3 py-2 bg-white/40 rounded-full shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex justify-center items-center gap-2 mt-4"
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
              <div className="w-full h-auto px-2.5 py-5 bg-white/40 rounded-2xl shadow border border-white linear-gradient(37deg, rgba(255,255,255,0.5018601190476191) 0%, rgba(255,255,255,0) 100%) background: rgb(255,255,255) backdrop-blur-[20px] flex-col justify-start items-start inline-flex">
                {filterWeeklyWeather(weeklyWeather)
                  .slice(0, 4)
                  .map((weather, index) => (
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">날씨 요소 추가</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="p-2 bg-gray-200 rounded-md"
              >
                예: 자외선 지수
              </button>
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

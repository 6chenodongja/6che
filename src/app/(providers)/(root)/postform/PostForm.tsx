'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../supabase/client';
import { ExtendedPostInsert } from '../../../../../types/extended';
import WeatherDropdown from './components/WeatherDropdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useUserStore } from '@/zustand/store/useUserStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostFormPage = () => {
  const [images, setImages] = useState<(File | string)[]>([]);
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [style, setStyle] = useState<string[]>([]);
  const [seasons, setSeasons] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [newStyle, setNewStyle] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [showStyleInput, setShowStyleInput] = useState(false);
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<string | null>(null);
  const [seasonError, setSeasonError] = useState(false);
  const [styleError, setStyleError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { user } = useUserStore();
  const [postId, setPostId] = useState<string | null>(null);

  const initialStyles = [
    '스트릿',
    '캐주얼',
    '빈티지',
    '스포츠',
    '눔코어',
    '페미닌',
    '모던',
    '미니멀',
  ];
  const initialLocations = [
    '데이트',
    '캠퍼스',
    '카페',
    '출근',
    '결혼식',
    '바다',
    '여행',
    '데일리',
  ];

  const [styles, setStyles] = useState(initialStyles);
  const [locationsList, setLocationsList] = useState(initialLocations);

  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      setPostId(id);
      if (id) {
        const fetchPostDetail = async () => {
          const { data: postDetail, error } = await supabase
            .from('posts')
            .select('*, users(*)')
            .eq('id', id)
            .single();

          if (error) {
            console.error(
              '게시글 데이터를 불러오는 중 오류가 발생했습니다:',
              error,
            );
          } else if (postDetail) {
            setDescription(postDetail.comment ?? '');
            setGender(postDetail.gender ?? '');
            setStyle(postDetail.style ? postDetail.style.split(',') : []);
            setSeasons(postDetail.seasons ? postDetail.seasons.split(',') : []);
            setLocations(
              postDetail.locations ? postDetail.locations.split(',') : [],
            );
            setWeatherIcon(postDetail.weather?.split(' ')[0] || '');
            setTemperature(postDetail.weather?.split(' ')[1] || '');
            setImages(postDetail.image_url?.split(',') || []);
          }
        };

        fetchPostDetail();
      }
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      // webp 형식의 파일 업로드 한건지 확인
      const isWebp = filesArray.some((file) => file.type === 'image/webp');
      if (isWebp) {
        toast.error('webp 형식의 이미지는 업로드할 수 없습니다.');
        return;
      }

      if (images.length + filesArray.length > 3) {
        setImageError(true);
        return;
      }

      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setDescription(value);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        '/api/weather?locationKey=your-location-key',
      );
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  const handleSubmit = async () => {
    // 필수 필드 체크
    if (images.length === 0) {
      toast.error(
        <div className="toast-message">
          <span>최소 1개 이미지를 업로드해야 합니다.</span>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className:
            'custom-toast bg-white text-black rounded-lg shadow-md p-4',
        },
      );
      return;
    }
    if (!description.trim()) {
      toast.error(
        <div className="toast-message">
          <span>글 작성을 해야 합니다.</span>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className:
            'custom-toast bg-white text-black rounded-lg shadow-md p-4',
        },
      );
      return;
    }
    if (!gender) {
      toast.error(
        <div className="toast-message">
          <span>유형을 선택해야 합니다.</span>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className:
            'custom-toast bg-white text-black rounded-lg shadow-md p-4',
        },
      );
      return;
    }
    if (!weatherIcon || !temperature) {
      toast.error(
        <div className="toast-message">
          <span>날씨와 기온을 선택해야 합니다.</span>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className:
            'custom-toast bg-white text-black rounded-lg shadow-md p-4',
        },
      );
      return;
    }
    if (seasons.length === 0) {
      toast.error(
        <div className="toast-message">
          <span>계절을 선택해야 합니다.</span>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className:
            'custom-toast bg-white text-black rounded-lg shadow-md p-4',
        },
      );
      return;
    }
    if (style.length === 0) {
      toast.error(
        <div className="toast-message">
          <span>스타일을 선택해야 합니다.</span>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className:
            'custom-toast bg-white text-black rounded-lg shadow-md p-4',
        },
      );
      return;
    }
    if (locations.length === 0) {
      toast.error(
        <div className="toast-message">
          <span>활동을 선택해야 합니다.</span>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className:
            'custom-toast bg-white text-black rounded-lg shadow-md p-4',
        },
      );
      return;
    }

    // 이미지 업로드
    const uploadedImageUrls: string[] = [];
    for (const image of images) {
      if (image instanceof File) {
        const uniqueFileName = `${Date.now()}_${image.name}`;
        const { data, error } = await supabase.storage
          .from('images')
          .upload(`public/${uniqueFileName}`, image);

        if (error) {
          console.error('Error uploading image:', error);
          continue;
        }

        const imageUrl = supabase.storage.from('images').getPublicUrl(data.path)
          .data.publicUrl;

        console.log('Uploaded Image URL:', imageUrl);
        uploadedImageUrls.push(imageUrl);
      } else {
        uploadedImageUrls.push(image);
      }
    }

    let weatherInfo = `${weatherIcon || ''} ${temperature || ''}`;
    if (!weatherIcon || !temperature) {
      const weatherData = await fetchWeatherData();
      if (weatherData) {
        weatherInfo = `${weatherData.icon} ${weatherData.temperature}`;
      }
    }

    const postData: ExtendedPostInsert = {
      user_id: user?.id,
      image_url: uploadedImageUrls.join(','),
      comment: description,
      created_at: new Date().toISOString(),
      like: 0,
      gender: gender,
      style: style.join(','),
      seasons: seasons.join(','),
      locations: locations.join(','),
      weather: weatherInfo,
    };

    let result;
    if (postId) {
      result = await supabase.from('posts').update(postData).eq('id', postId);
    } else {
      result = await supabase.from('posts').insert([postData]);
    }

    if (result.error) {
      console.error('Error inserting/updating data:', result.error);
    } else {
      console.log('Data inserted/updated successfully');
      toast.success(
        <div className="toast-message">
          <span>게시 완료되었습니다</span>
          <button
            onClick={() => router.push('/myStyle')}
            className="text-[#4d4d4d] font-caption font-normal text-xs no-underline"
          >
            내 코디
          </button>
        </div>,
        {
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className: 'custom-toast',
        },
      );
      setTimeout(() => {
        if (!sessionStorage.getItem('redirectToMyStyle')) {
          router.push('/list');
        }
      }, 2500);
    }

    setImages([]);
    setDescription('');
    setGender('');
    setStyle([]);
    setSeasons([]);
    setLocations([]);
  };

  const handleSeasonClick = (selectedSeason: string) => {
    setSeasons((prevSeasons) => {
      if (prevSeasons.includes(selectedSeason)) {
        return prevSeasons.filter((season) => season !== selectedSeason);
      } else if (prevSeasons.length < 2) {
        setSeasonError(false);
        return [...prevSeasons, selectedSeason];
      } else {
        setSeasonError(true);
        return prevSeasons;
      }
    });
  };

  const handleStyleClick = (selectedStyle: string) => {
    setStyle((prevStyles) => {
      if (prevStyles.includes(selectedStyle)) {
        return prevStyles.filter((style) => style !== selectedStyle);
      } else if (prevStyles.length < 2) {
        setStyleError(false);
        return [...prevStyles, selectedStyle];
      } else {
        setStyleError(true);
        return prevStyles;
      }
    });
  };

  const handleLocationClick = (selectedLocation: string) => {
    setLocations((prevLocations) => {
      if (prevLocations.includes(selectedLocation)) {
        return prevLocations.filter(
          (location) => location !== selectedLocation,
        );
      } else if (prevLocations.length < 2) {
        setLocationError(false);
        return [...prevLocations, selectedLocation];
      } else {
        setLocationError(true);
        return prevLocations;
      }
    });
  };

  const handleAddStyle = () => {
    if (newStyle && !styles.includes(newStyle)) {
      setStyles((prevStyles) => [...prevStyles, newStyle]);
      setNewStyle('');
      setShowStyleInput(false);
    }
  };

  const handleAddLocation = () => {
    if (newLocation && !locationsList.includes(newLocation)) {
      setLocationsList((prevLocations) => [...prevLocations, newLocation]);
      setNewLocation('');
      setShowLocationInput(false);
    }
  };

  const buttonClass = (selected: boolean) =>
    `px-2 py-0.5 border-2 cursor-pointer rounded ${
      selected
        ? 'border-black bg-black text-white'
        : 'border-gray-100 bg-gray-100 text-black'
    }`;

  return (
    <>
      <div className="sm:hidden w-full max-w-[320px] mx-auto flex flex-col min-h-[636px] bg-[#fafafa] mt-10 px-4">
        <div className="flex items-center justify-between mb-4 pb-2 border-b pt-14">
          <button
            type="button"
            onClick={() => router.push('/list')}
            className="flex items-center"
          >
            <Image
              src="/images/Thermometer/arrow_Left.svg"
              alt="Back"
              width={34}
              height={34}
              className=" mt-[10px] mb-[10px]"
            />
          </button>
          <div className="flex-grow text-center font-semibold">
            <h2 className="font-subtitle-KR-medium font-semibold text-base leading-130 tracking--0.32 text-black opacity-sds-size-stroke-border">
              코디 등록
            </h2>
          </div>
        </div>

        <div className="mb-4 flex flex-col items-start">
          <Swiper
            spaceBetween={5}
            slidesPerView={'auto'}
            freeMode={true}
            className="w-full"
          >
            {images.length < 3 && (
              <SwiperSlide className="!w-auto">
                <div
                  className="w-24 h-32 bg-black flex flex-col justify-center items-center border border-gray-300 cursor-pointer flex-shrink-0 rounded-md mt-[18px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden "
                    multiple
                    ref={fileInputRef}
                  />
                  <Image
                    src="/photo.svg"
                    alt="Upload Icon"
                    width={24}
                    height={24}
                    sizes="100vw"
                    className="text-white filter invert"
                  />
                  <div className="text-sm text-white mt-1">
                    {images.length}/3
                  </div>
                </div>
              </SwiperSlide>
            )}
            {images.map((image, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="relative w-24 h-32 mt-[18px]">
                  <Image
                    src={
                      typeof image === 'string'
                        ? image
                        : URL.createObjectURL(image)
                    }
                    alt={`Uploaded ${index}`}
                    width={102}
                    height={120}
                    className="w-full h-full object-cover border border-gray-300 rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute -top-0.5 -right-1 bg-black rounded-full w-27 h-27 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(index);
                    }}
                  >
                    <Image
                      src="/x.svg"
                      alt="Delete Icon"
                      width={18}
                      height={18}
                      className="filter invert"
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {imageError && (
          <div className=" absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded text-sm ">
            최대 3개의 이미지만 업로드할 수 있습니다.
          </div>
        )}

        <div className="mb-4">
          <div className="border-t border-black-100 pt-2"></div>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className=" w-full h-24 p-2 mt-1 border-none border-b border-black-100 placeholder-black-300 resize-none focus:outline-none focus:border-transparent bg-transparent"
            placeholder="스타일에 대한 이야기를 써주세요"
            maxLength={200}
            required
          />
          <div className="text-right mt-1 text-black-600 font-normal font-temperature-14 text-sm">
            {description.length}/200
          </div>
          <div className="border-b border-black-100 pb-2"></div>
        </div>

        <div className="mb-8">
          <div className="text-[#4d4d4d]  font-subtitle-KR-small text-sm not-italic font-medium  leading-[150%] tracking-[-0.28px] ">
            유형
          </div>
          <div className="flex gap-2 mt-1 font-body-KR-small text-sm font-normal -text--text">
            {['남성', '여성', '선택 안함'].map((genderItem) => (
              <button
                key={genderItem}
                type="button"
                onClick={() => setGender(genderItem)}
                className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                  gender.includes(genderItem)
                    ? 'border-black bg-black text-white'
                    : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                }`}
              >
                {genderItem}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 leading-normal">
          <div className="text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-medium  leading-normal tracking-[-0.28px] ">
            날씨
          </div>
          <WeatherDropdown
            setWeatherIcon={setWeatherIcon}
            setTemperature={setTemperature}
          />
        </div>

        <div className="mb-8 leading-normal">
          <div className="flex items-baseline">
            <div className="text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-medium  leading-normal tracking-[-0.28px] mr-[2px]">
              계절
            </div>
            <div className="ml-2 text-[#4d4d4d] font-normal text-sm not-italic leading-normal tracking-[-0.28px]">
              (최대 2개)
            </div>
          </div>
          <div className="flex gap-2 mt-1 font-body-KR-small text-sm font-normal -text--text">
            {['봄', '여름', '가을', '겨울'].map((season) => (
              <button
                key={season}
                type="button"
                onClick={() => handleSeasonClick(season)}
                className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                  seasons.includes(season)
                    ? 'border-black bg-black text-white'
                    : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                }`}
              >
                {season}
              </button>
            ))}
          </div>
          {seasonError && (
            <div className="text-red-500 text-sm mt-1">
              최대 2개의 계절을 선택할 수 있습니다.
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <div className="text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-medium leading-normal tracking-[-0.28px]">
                스타일
              </div>
              <div className="ml-2 text-sm text-[#4d4d4d] font-normal not-italic leading-normal tracking-[-0.28px]">
                (최대 2개)
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowStyleInput(!showStyleInput)}
                className="text-xl leading-none bg-transparent border-none cursor-pointer"
              >
                <Image src="/plus.svg" alt="+" width={18} height={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-1 font-body-KR-small text-sm font-normal text-[#4d4d4d]">
            {styles.map((styleItem, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleStyleClick(styleItem)}
                className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                  style.includes(styleItem)
                    ? 'border-black bg-black text-white'
                    : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                }`}
              >
                {styleItem}
              </button>
            ))}
            {showStyleInput && (
              <input
                type="text"
                value={newStyle}
                onChange={(e) => setNewStyle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddStyle();
                  }
                }}
                autoFocus
                className="px-2 py-1 border border-gray-300 rounded"
                style={{ minWidth: '50px', maxWidth: '100px' }}
              />
            )}
          </div>
          {styleError && (
            <div className="text-red-500 text-sm mt-1">
              최대 2개의 스타일을 선택할 수 있습니다.
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <div className="text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-medium leading-normal tracking-[-0.28px]">
                활동
              </div>
              <div className="ml-1 text-[#4d4d4d] text-sm">(최대 2개)</div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowLocationInput(!showLocationInput)}
                className="text-xl leading-none bg-transparent border-none cursor-pointer"
              >
                <Image src="/plus.svg" alt="+" width={18} height={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-1 font-body-KR-small text-sm font-normal text-[#4d4d4d]">
            {locationsList.map((locationItem, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleLocationClick(locationItem)}
                className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                  locations.includes(locationItem)
                    ? 'border-black bg-black text-white'
                    : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                }`}
              >
                {locationItem}
              </button>
            ))}
            {showLocationInput && (
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddLocation();
                  }
                }}
                autoFocus
                className="px-2 py-1 border border-gray-300 rounded text-[#4d4d4d]"
                style={{ minWidth: '50px', maxWidth: '100px' }}
              />
            )}
          </div>
          {locationError && (
            <div className="text-red-500 text-sm mt-1">
              최대 2개의 장소를 선택할 수 있습니다.
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-[288px] h-[49px] flex justify-center items-center  gap-4 rounded-[8px]  bg-black text-white font-KR-button mb-[62px] mt-[12px]"
        >
          완료
        </button>
      </div>
      {/* 769px 이상 데스크탑 */}
      <div className="hidden sm:flex w-full min-h-screen bg-[#fafafa] justify-center items-center">
        <div className="w-full sm:w-[1240px] sm:h-[725px] bg-white rounded-3xl shadow-lg flex flex-col px-10 pt-0 pb-14">
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <div className="flex items-center justify-between mb-4 border-b ">
            <button
              type="button"
              onClick={() => router.push('/list')}
              className="flex items-center"
            >
              <Image
                src="/images/Thermometer/arrow_Left.svg"
                alt="Back"
                width={34}
                height={34}
                className=" pb-[11px] pt-[11px]"
              />
            </button>
            <div className="flex-grow text-center">
              <h2 className="font-subtitle-KR-medium font-semibold text-[16px] leading-[130%] tracking-[-0.32px] text-black opacity-sds-size-stroke-border pb-[11px] pt-[11px]">
                코디 등록
              </h2>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex justify-center items-center h-[34px] w-[46px] rounded-[8px] bg-black text-white font-KR-button md:text-[14px] md:h-[34px] md:w-[46px] pb-[11px] pt-[11px]"
            >
              완료
            </button>
          </div>

          <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:w-[1240px] sm:h-[725px] mx-auto">
            <div className="mb-4 flex flex-col items-start w-full sm:w-[65%] ">
              <Swiper
                spaceBetween={5}
                slidesPerView={'auto'}
                freeMode={true}
                className="w-full"
              >
                {images.length < 3 && (
                  <SwiperSlide className="!w-auto">
                    <div
                      className="overflow:hidden rounded-xl w-24 h-32 bg-black flex flex-col justify-center items-center border border-gray-300 cursor-pointer flex-shrink-0 mt-[18px] sm:w-[242px] sm:h-[345px]" /* 실선과의 간격을 18px로 조정 */
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        multiple
                        ref={fileInputRef}
                      />
                      <Image
                        src="/photo.svg"
                        alt="Upload Icon"
                        width={36}
                        height={36}
                        sizes="100vw"
                        className="text-white filter invert"
                      />
                      <div className="font-body-KR-medium text-base font-normal leading-[150%] -tracking-0.32  text-white mt-1">
                        사진 업로드 {images.length}/3
                      </div>
                    </div>
                  </SwiperSlide>
                )}
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="!w-auto">
                    <div className="relative w-24 h-32 sm:mt-[18px] sm:w-[242px] sm:h-[345px] rounded-[12px] overflow:hidden">
                      <Image
                        src={
                          typeof image === 'string'
                            ? image
                            : URL.createObjectURL(image)
                        }
                        alt={`Uploaded ${index}`}
                        width={242}
                        height={345}
                        className="w-full h-full object-cover border border-gray-300 rounded-xl overflow:hidden"
                      />
                      <button
                        type="button"
                        className="absolute -top-0.5 -right-1 bg-black rounded-full w-27 h-27 flex items-center justify-center sm:w-6 sm:h-6"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveImage(index);
                        }}
                      >
                        <Image
                          src="/x.svg"
                          alt="Delete Icon"
                          width={18}
                          height={18}
                          className="filter invert"
                        />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {imageError && (
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded text-sm ">
                  최대 3개의 이미지만 업로드할 수 있습니다.
                </div>
              )}

              <div className="md:mt-4 sm:mt-10 sm:w-[734px] sm:h-[210px]">
                <div className="border-t border-black-100 pt-2 pb-0 md:mt-0"></div>
                <div className="relative">
                  <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    className="w-[744px] h-[144px] p-2 pt-1 border-none border-b border-black-100 placeholder-black-300 resize-none focus:outline-none focus:border-transparent bg-transparent"
                    placeholder="스타일에 대한 이야기를 써주세요"
                    maxLength={200}
                    required
                    style={{ marginTop: '0px' }}
                  />
                  <div className="text-right mt-1 text-black-600 font-normal font-temperature-14 text-sm">
                    {description.length}/200
                  </div>
                </div>
                <div className="border-b border-black-100 pb-2"></div>
                <div className="mb-4 sm:mb-[56px]"></div>
              </div>
            </div>

            <div className="mb-8 sm:w-[35%] sm:ml-6">
              <div className="text-[#4d4d4d]  font-subtitle-KR-small text-sm not-italic font-bold leading-normal tracking-[-0.28px] transform translate-x-[2px]">
                유형
              </div>
              <div className="flex flex-wrap gap-2 mt-1 font-body-KR-small text-sm font-normal text-[#4d4d4d] sm:gap-[6px] sm:max-w-[354px]">
                {['남성', '여성', '선택 안함'].map((genderItem) => (
                  <button
                    key={genderItem}
                    type="button"
                    onClick={() => setGender(genderItem)}
                    className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                      gender.includes(genderItem)
                        ? 'border-black bg-black text-white'
                        : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                    }`}
                  >
                    {genderItem}
                  </button>
                ))}
              </div>

              <div className="mt-8 text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-bold leading-normal tracking-[-0.28px] transform translate-x-[2px]">
                날씨
              </div>
              <WeatherDropdown
                setWeatherIcon={setWeatherIcon}
                setTemperature={setTemperature}
              />

              <div className="mt-8">
                <div className="flex items-baseline">
                  <div className="text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-bold leading-normal tracking-[-0.28px] transform translate-x-[2px]">
                    계절
                  </div>
                  <div className="ml-2 text-[#4d4d4d] font-medium text-sm not-italic leading-normal tracking-[-0.28px]">
                    (최대 2개)
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1 font-body-KR-small text-sm font-normal text-[#4d4d4d] sm:gap-[6px] sm:max-w-[354px]">
                  {['봄', '여름', '가을', '겨울'].map((season) => (
                    <button
                      key={season}
                      type="button"
                      onClick={() => handleSeasonClick(season)}
                      className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                        seasons.includes(season)
                          ? 'border-black bg-black text-white'
                          : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                      }`}
                    >
                      {season}
                    </button>
                  ))}
                </div>
                {seasonError && (
                  <div className="text-red-500 text-sm mt-1">
                    최대 2개의 계절을 선택할 수 있습니다.
                  </div>
                )}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between relative">
                  <div className="flex items-baseline">
                    <div className="text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-bold leading-normal tracking-[-0.28px] transform translate-x-[2px]">
                      스타일
                    </div>
                    <div className="ml-2 text-sm text-[#4d4d4d] font-medium not-italic leading-normal tracking-[-0.28px]">
                      (최대 2개)
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowStyleInput(!showStyleInput)}
                      className="text-xl leading-none bg-transparent border-none cursor-pointer absolute left-[330px] top-0"
                    >
                      <Image src="/plus.svg" alt="+" width={18} height={18} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1 font-body-KR-small text-sm font-normal text-[#4d4d4d] sm:gap-[6px] sm:max-w-[354px]">
                  {styles.map((styleItem, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleStyleClick(styleItem)}
                      className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                        style.includes(styleItem)
                          ? 'border-black bg-black text-white'
                          : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                      }`}
                    >
                      {styleItem}
                    </button>
                  ))}
                  {showStyleInput && (
                    <input
                      type="text"
                      value={newStyle}
                      onChange={(e) => setNewStyle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddStyle();
                        }
                      }}
                      autoFocus
                      className="px-2 py-1 border border-gray-300 rounded"
                      style={{ minWidth: '50px', maxWidth: '100px' }}
                    />
                  )}
                </div>
                {styleError && (
                  <div className="text-sm mt-1" style={{ color: 'red' }}>
                    최대 2개의 스타일을 선택할 수 있습니다.
                  </div>
                )}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between relative">
                  <div className="flex items-baseline">
                    <div className="text-[#4d4d4d] font-subtitle-KR-small text-sm not-italic font-bold leading-normal tracking-[-0.28px] transform translate-x-[2px]">
                      활동
                    </div>
                    <div className="ml-1 text-[#4d4d4d] text-sm">
                      (최대 2개)
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowLocationInput(!showLocationInput)}
                      className="text-xl leading-none bg-transparent border-none cursor-pointer absolute left-[330px] top-0"
                    >
                      <Image src="/plus.svg" alt="+" width={18} height={18} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1 font-body-KR-small text-sm font-normal text-[#4d4d4d] sm:gap-[6px] sm:max-w-[354px]">
                  {locationsList.map((locationItem, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleLocationClick(locationItem)}
                      className={`px-2 py-0.5 border-2 cursor-pointer rounded ${
                        locations.includes(locationItem)
                          ? 'border-black bg-black text-white'
                          : 'border-gray-100 bg-gray-100 text-[#4d4d4d]'
                      }`}
                    >
                      {locationItem}
                    </button>
                  ))}
                  {showLocationInput && (
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddLocation();
                        }
                      }}
                      autoFocus
                      className="px-2 py-1 border border-gray-300 rounded text-[#4d4d4d]"
                      style={{ minWidth: '50px', maxWidth: '100px' }}
                    />
                  )}
                </div>
                {locationError && (
                  <div className="text-sm mt-1" style={{ color: 'red' }}>
                    최대 2개의 장소를 선택할 수 있습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormPage;

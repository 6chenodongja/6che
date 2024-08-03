'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../supabase/client';
import { ExtendedPostInsert } from '../../../../../types/extended';
import WeatherDropdown from './components/WeatherDropdown';

const PostFormPage = () => {
  const [images, setImages] = useState<File[]>([]);
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

  const initialStyles = [
    '미니멀',
    '아메카지',
    '시티보이',
    '캐주얼',
    '비즈니스캐주얼',
    '스포츠',
    '빈티지',
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
    let timers: NodeJS.Timeout[] = [];

    if (seasonError) timers.push(setTimeout(() => setSeasonError(false), 1000));
    if (styleError) timers.push(setTimeout(() => setStyleError(false), 1000));
    if (locationError)
      timers.push(setTimeout(() => setLocationError(false), 1000));
    if (imageError) timers.push(setTimeout(() => setImageError(false), 1000));

    return () => timers.forEach(clearTimeout);
  }, [seasonError, styleError, locationError, imageError]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
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
    if (images.length === 0) {
      setImageError(true);
      return;
    }

    // 이미지 업로드
    const uploadedImageUrls: string[] = [];
    for (const image of images) {
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
      uploadedImageUrls.push(imageUrl);
    }

    let weatherInfo = `${weatherIcon || ''} ${temperature || ''}`;
    if (!weatherIcon || !temperature) {
      const weatherData = await fetchWeatherData();
      if (weatherData) {
        weatherInfo = `${weatherData.icon} ${weatherData.temperature}`;
      }
    }

    const postData: ExtendedPostInsert = {
      user_id: 'a184313d-fac7-4c5d-8ee3-89e367cfb86f',
      image_url: uploadedImageUrls.join(','),
      comment: description,
      created_at: new Date().toISOString(),
      like: 0,
      gender: gender,
      style: style.join(','),
      // seasons: seasons.join(','),
      // locations: locations.join(','),
      weather: weatherInfo,
    };

    const { error: postError } = await supabase
      .from('posts')
      .insert([postData]);

    if (postError) {
      console.error('Error inserting data:', postError);
    } else {
      console.log('Data inserted successfully');
      router.push('/list');
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
    <div className="max-w-sm mx-auto h-auto m-10">
      <div className="flex flex-col w-full sm:w-96 p-5   relative">
        <div className="flex justify-between items-center mb-4 pb-2 shadow-sm -mx-5 px-5">
          <h2 className="text-xl font-bold">스타일 등록</h2>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-black text-white py-2 px-3 rounded-xl"
          >
            완료
          </button>
        </div>

        {/* 사진 업로드 섹션 */}
        <div className="mb-4 flex flex-col items-start">
          <div className="flex gap-4 overflow-x-auto flex-row-reverse">
            {images.map((image, index) => (
              <div key={index} className="relative w-24 h-32 flex-shrink-0">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  width={96}
                  height={128}
                  className="w-full h-full object-cover border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-black rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(index);
                  }}
                >
                  <Image
                    src="/x.svg"
                    alt="Delete Icon"
                    width={24}
                    height={24}
                    className="filter invert"
                  />
                </button>
              </div>
            ))}
            {images.length < 3 && (
              <div
                className="w-24 h-32 bg-black flex flex-col justify-center items-center border border-gray-300 cursor-pointer flex-shrink-0 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                {/* 숨겨진 파일 입력 요소 */}
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
                  width={24}
                  height={24}
                  className="text-white filter invert"
                />
                <div className="text-sm text-white mt-1">{images.length}/3</div>
              </div>
            )}
          </div>
        </div>
        {imageError && (
          <div className="text-sm absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 w-80 rounded">
            최대 3개의 이미지만 업로드할 수 있습니다.
          </div>
        )}

        {/* 간단한 글 작성 섹션 */}
        <div className="mb-4">
          <div className="border-t border-gray-300 pt-2"></div>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="w-full h-24 p-2 mt-1 border-none border-b border-gray-300 placeholder-black-600 resize-none focus:outline-none focus:border-transparent"
            placeholder="스타일에 대한 이야기를 써주세요"
            maxLength={200}
            required
          />
          <div className="text-right mt-1 text-gray-600">
            {description.length}/200
          </div>
          <div className="border-b border-gray-300 pb-2"></div>
        </div>

        {/* 성별 선택 섹션 */}
        <div className="mb-8">
          <div className="font-bold">유형</div>
          <div className="flex gap-2 mt-1">
            {['남성', '여성', '선택 안함'].map((genderItem) => (
              <button
                key={genderItem}
                type="button"
                onClick={() => setGender(genderItem)}
                className={buttonClass(gender === genderItem)}
              >
                {genderItem}
              </button>
            ))}
          </div>
        </div>

        {/* 날씨, 기온선택 선택 섹션 */}
        <div className="mb-8">
          <div className="font-semibold">날씨</div>
          <WeatherDropdown
            setWeatherIcon={setWeatherIcon}
            setTemperature={setTemperature}
          />
        </div>

        {/* 계절 선택 섹션 */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <div className="font-semibold">계절</div>
            <div className="ml-2 text-gray-600">(최대 2개)</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {['봄', '여름', '가을', '겨울'].map((season) => (
              <button
                key={season}
                type="button"
                onClick={() => handleSeasonClick(season)}
                className={buttonClass(seasons.includes(season))}
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

        {/* 스타일 선택 섹션 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <div className="font-semibold">스타일</div>
              <div className="ml-1 text-gray-600">(최대 2개)</div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowStyleInput(!showStyleInput)}
                className="text-xl leading-none bg-transparent border-none cursor-pointer"
              >
                <Image src="/plus.svg" alt="+" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {styles.map((styleItem, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleStyleClick(styleItem)}
                className={buttonClass(style.includes(styleItem))}
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

        {/* 장소 선택 섹션 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <div className="font-semibold">장소</div>
              <div className="ml-1 text-gray-600">(최대 2개)</div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowLocationInput(!showLocationInput)}
                className="text-xl leading-none bg-transparent border-none cursor-pointer"
              >
                <Image src="/plus.svg" alt="+" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {locationsList.map((locationItem, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleLocationClick(locationItem)}
                className={buttonClass(locations.includes(locationItem))}
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
                className="px-2 py-1 border border-gray-300 rounded"
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
      </div>
    </div>
  );
};

export default PostFormPage;

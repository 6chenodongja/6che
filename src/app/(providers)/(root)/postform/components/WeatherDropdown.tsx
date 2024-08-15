import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const weatherIcons = [
  { value: '/sun.svg', label: '맑음', src: '/sun.svg' },
  { value: '/blur.svg', label: '흐림', src: '/blur.svg' },
  { value: '/rain.svg', label: '비', src: '/rain.svg' },
  { value: '/snow.svg', label: '눈', src: '/snow.svg' },
  { value: '/wind.svg', label: '바람', src: '/wind.svg' },
  { value: '/thunderstorm.svg', label: '천둥번개', src: '/thunderstorm.svg' },
  { value: '/sleet.svg', label: '진눈깨비', src: '/sleet.svg' },
];

const temperatures = [
  { value: '현재 기온', label: '현재 기온', src: '/location.svg' },
  { value: '4°C 이하', label: '4°C 이하' },
  { value: '5°C - 8°C', label: '5°C - 8°C' },
  { value: '9°C - 11°C', label: '9°C - 11°C' },
  { value: '12°C - 16°C', label: '12°C - 16°C' },
  { value: '17°C - 19°C', label: '17°C - 19°C' },
  { value: '20°C - 22°C', label: '20°C - 22°C' },
  { value: '23°C - 27°C', label: '23°C - 27°C' },
  { value: '28°C 이상', label: '28°C 이상' },
];

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black-300',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    height: '45px',
    width: '141px',
    borderRadius: '8px',
  },
  '& .MuiInputBase-input': {
    padding: '10px 14px',
  },
});

const WeatherDropdown = ({
  setWeatherIcon,
  setTemperature,
}: {
  setWeatherIcon: (icon: string | null) => void;
  setTemperature: (temperature: string | null) => void;
}) => {
  const [currentTemperature, setCurrentTemperature] = useState<string | null>(
    null,
  );

  const handleWeatherIconChange = (
    event: React.ChangeEvent<{}>,
    newValue: { value: string; label: string; src: string } | null,
  ) => {
    setWeatherIcon(newValue ? newValue.value : null);
  };

  const handleTemperatureChange = async (
    event: React.ChangeEvent<{}>,
    newValue: { value: string; label: string } | null,
  ) => {
    if (newValue?.value === '현재 기온') {
      // 현재 위치의 온도를 가져오는 로직 추가
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `/api/weather?lat=${latitude}&lon=${longitude}`,
              );
              const weatherData = await response.json();
              if (weatherData && weatherData.current) {
                const currentTemp = `${Math.round(weatherData.current.Temperature.Metric.Value)}°C`;
                setCurrentTemperature(currentTemp);
                setTemperature(currentTemp);
              } else {
                alert('현재 온도를 가져올 수 없습니다.');
              }
            } catch (error) {
              console.error('Error fetching current temperature:', error);
              alert('현재 온도를 가져올 수 없습니다.');
            }
          },
          (error) => {
            console.error('Error getting location', error);
            alert('위치를 가져올 수 없습니다. 위치 권한을 확인해주세요.');
          },
        );
      } else {
        alert('현재 브라우저에서 위치 정보를 사용할 수 없습니다.');
      }
    } else {
      setCurrentTemperature(null);
      setTemperature(newValue ? newValue.value : null);
    }
  };

  return (
    <div className="flex flex-col gap-1.5 mt-2">
      <div className="flex gap-1.5">
        <Autocomplete
          options={weatherIcons}
          getOptionLabel={(option) => option.label}
          onChange={handleWeatherIconChange}
          renderOption={(props, option) => (
            <li {...props} className="flex items-center gap-1 pl-3 mb-3">
              {option.src && (
                <Image
                  src={option.src}
                  alt={option.label}
                  width={20}
                  height={20}
                />
              )}
              <span className="ml-2">{option.label}</span>
            </li>
          )}
          renderInput={(params) => (
            <CustomTextField
              {...params}
              placeholder="날씨"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                className: 'h-11 w-36 ',
              }}
            />
          )}
          className="w-36"
        />
        <Autocomplete
          options={temperatures}
          getOptionLabel={(option) =>
            currentTemperature && option.value === '현재 기온'
              ? currentTemperature
              : option.label
          }
          onChange={handleTemperatureChange}
          renderOption={(props, option) => (
            <li {...props} className="flex items-center gap-1 pl-3 mb-3">
              {option.value === '현재 기온' && option.src ? (
                <>
                  <Image
                    src={option.src ?? '/default-image.svg'}
                    alt={option.label}
                    width={20}
                    height={20}
                  />
                  <span className="ml-2">
                    {currentTemperature && option.value === '현재 기온'
                      ? currentTemperature
                      : option.label}
                  </span>
                </>
              ) : (
                <span>{option.label}</span>
              )}
            </li>
          )}
          renderInput={(params) => (
            <CustomTextField
              {...params}
              placeholder="기온°C"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                className: 'h-141 w-141 ',
              }}
            />
          )}
          className="w-36"
        />
      </div>
    </div>
  );
};

export default WeatherDropdown;

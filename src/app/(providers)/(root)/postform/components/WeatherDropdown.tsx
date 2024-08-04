import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const weatherIcons = [
  { value: '/location.svg', label: '현재 날씨', src: '/location.svg' },
  { value: '/sun.svg', label: '맑음', src: '/sun.svg' },
  { value: '/blur.svg', label: '흐림', src: '/blur.svg' },
  { value: '/rain.svg', label: '비', src: '/rain.svg' },
  { value: '/snow.svg', label: '눈', src: '/snow.svg' },
  { value: '/wind.svg', label: '바람', src: '/wind.svg' },
  { value: '/thunderstorm.svg', label: '천둥번개', src: '/thunderstorm.svg' },
  { value: '/sleet.svg', label: '진눈깨비', src: '/sleet.svg' },
];

const temperatures = [
  { value: '/location.svg', label: '현재 기온', src: '/location.svg' },
  { value: '4°C 이하', label: '4°C 이하' },
  { value: '8 - 5°C', label: '8 - 5°C' },
  { value: '9 - 11°C', label: '9 - 11°C' },
  { value: '12 - 16°C', label: '12 - 16°C' },
  { value: '17 - 19°C', label: '17 - 19°C' },
  { value: '20 - 22°C', label: '20 - 22°C' },
  { value: '23 - 27°C', label: '23 - 27°C' },
  { value: '28°C 이상', label: '28°C 이상' },
];

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black-300',
    },
    '&:hover fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    height: '44px',
    width: '141px',
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
  const handleWeatherIconChange = (
    event: React.ChangeEvent<{}>,
    newValue: { value: string; label: string; src: string } | null,
  ) => {
    setWeatherIcon(newValue ? newValue.value : null);
  };

  const handleTemperatureChange = (
    event: React.ChangeEvent<{}>,
    newValue: { value: string; label: string } | null,
  ) => {
    setTemperature(newValue ? newValue.value : null);
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
              <Image
                src={option.src}
                alt={option.label}
                width={20}
                height={20}
              />
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
                className: 'h-11 w-36',
              }}
            />
          )}
          className="w-36"
        />
        <Autocomplete
          options={temperatures}
          getOptionLabel={(option) => option.label}
          onChange={handleTemperatureChange}
          renderOption={(props, option) => (
            <li {...props} className="flex items-center gap-1 pl-3 mb-3">
              {option.value === '/location.svg' ? (
                <>
                  <Image
                    src={option.src ?? '/default-image.svg'}
                    alt={option.label}
                    width={20}
                    height={20}
                  />
                  <span className="ml-2">{option.label}</span>
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
                className: 'h-11 w-36',
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

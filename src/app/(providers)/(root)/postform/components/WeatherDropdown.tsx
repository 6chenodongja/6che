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
  { value: '0°C', label: '0°C' },
  { value: '5°C', label: '5°C' },
  { value: '10°C', label: '10°C' },
  { value: '15°C', label: '15°C' },
  { value: '20°C', label: '20°C' },
  { value: '25°C', label: '25°C' },
  { value: '30°C', label: '30°C' },
  { value: '35°C', label: '35°C' },
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
              {option.value === '/location.svg' && option.src ? (
                <>
                  <Image
                    src={option.src}
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

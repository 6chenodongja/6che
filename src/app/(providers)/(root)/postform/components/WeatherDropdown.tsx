import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Image from 'next/image';

interface Option {
  value: string;
  label: string;
  src?: string;
}

const weatherIcons: Option[] = [
  { value: '/Sunny.png', label: '맑음', src: '/Sunny.png' },
  { value: '/Cloudy.png', label: '흐림', src: '/Cloudy.png' },
  { value: '/Ice.png', label: '눈', src: '/Ice.png' },
];

const temperatures: Option[] = [
  { value: '0°C', label: '0°C' },
  { value: '5°C', label: '5°C' },
  { value: '10°C', label: '10°C' },
  { value: '15°C', label: '15°C' },
  { value: '20°C', label: '20°C' },
  { value: '25°C', label: '25°C' },
  { value: '30°C', label: '30°C' },
  { value: '35°C', label: '35°C' },
];

const WeatherDropdown = ({
  setWeatherIcon,
  setTemperature,
}: {
  setWeatherIcon: (icon: string | null) => void;
  setTemperature: (temperature: string | null) => void;
}) => {
  const handleWeatherIconChange = (
    event: React.ChangeEvent<{}>,
    newValue: Option | null,
  ) => {
    setWeatherIcon(newValue ? newValue.value : null);
  };

  const handleTemperatureChange = (
    event: React.ChangeEvent<{}>,
    newValue: Option | null,
  ) => {
    setTemperature(newValue ? newValue.value : null);
  };

  return (
    <div className="flex gap-2 mt-1">
      <Autocomplete
        options={weatherIcons}
        getOptionLabel={(option) => option.label}
        onChange={handleWeatherIconChange}
        renderOption={(props, option) => (
          <li {...props} className="flex items-center gap-2">
            <Image src={option.src} alt={option.label} width={20} height={20} />
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="날씨"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: {
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
              },
            }}
          />
        )}
        className="w-32"
      />
      <Autocomplete
        options={temperatures}
        getOptionLabel={(option) => option.label}
        onChange={handleTemperatureChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="기온°C"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: {
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
              },
            }}
          />
        )}
        className="w-32"
      />
    </div>
  );
};

export default WeatherDropdown;

// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Image from 'next/image';
// import { styled } from '@mui/material/styles';

// const weatherIcons = [
//   { value: '/Sunny.png', label: '맑음', src: '/Sunny.png' },
//   { value: '/Cloudy.png', label: '흐림', src: '/Cloudy.png' },
//   { value: '/Ice.png', label: '눈', src: '/Ice.png' },
// ];

// const temperatures = [
//   { value: '0°C', label: '0°C' },
//   { value: '5°C', label: '5°C' },
//   { value: '10°C', label: '10°C' },
//   { value: '15°C', label: '15°C' },
//   { value: '20°C', label: '20°C' },
//   { value: '25°C', label: '25°C' },
//   { value: '30°C', label: '30°C' },
//   { value: '35°C', label: '35°C' },
// ];

// const CustomTextField = styled(TextField)({
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'gray-600',
//     },
//     '&:hover fieldset': {
//       borderColor: 'black',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'black',
//     },
//   },
//   '& .MuiInputBase-input': {
//     padding: '10px 14px',
//   },
// });

// const WeatherDropdown = ({ setWeatherIcon, setTemperature }) => {
//   const handleWeatherIconChange = (event, newValue) => {
//     setWeatherIcon(newValue ? newValue.value : null);
//   };

//   const handleTemperatureChange = (event, newValue) => {
//     setTemperature(newValue ? newValue.value : null);
//   };

//   return (
//     <div className="flex gap-2 mt-1">
//       <Autocomplete
//         options={weatherIcons}
//         getOptionLabel={(option) => option.label}
//         onChange={handleWeatherIconChange}
//         renderOption={(props, option) => (
//           <li {...props}>
//             <Image src={option.src} alt={option.label} width={20} height={20} />
//             {option.label}
//           </li>
//         )}
//         renderInput={(params) => (
//           <CustomTextField
//             {...params}
//             placeholder="날씨"
//             variant="outlined"
//             InputProps={{
//               ...params.InputProps,
//               style: {
//                 height: '36px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '0 10px',
//               },
//             }}
//           />
//         )}
//         className="w-32"
//       />
//       <Autocomplete
//         options={temperatures}
//         getOptionLabel={(option) => option.label}
//         onChange={handleTemperatureChange}
//         renderInput={(params) => (
//           <CustomTextField
//             {...params}
//             placeholder="기온°C"
//             variant="outlined"
//             InputProps={{
//               ...params.InputProps,
//               style: {
//                 height: '36px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '0 10px',
//               },
//             }}
//           />
//         )}
//         className="w-32"
//       />
//     </div>
//   );
// };

// export default WeatherDropdown;

import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const weatherIcons = [
  { value: '/Sunny.png', label: '맑음', src: '/Sunny.png' },
  { value: '/Cloudy.png', label: '흐림', src: '/Cloudy.png' },
  { value: '/Ice.png', label: '눈', src: '/Ice.png' },
];

const temperatures = [
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
      borderColor: 'gray-600',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
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
    <div className="flex gap-2 mt-1">
      <Autocomplete
        options={weatherIcons}
        getOptionLabel={(option) => option.label}
        onChange={handleWeatherIconChange}
        renderOption={(props, option) => (
          <li {...props}>
            <Image src={option.src} alt={option.label} width={20} height={20} />
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            placeholder="날씨"
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
          <CustomTextField
            {...params}
            placeholder="기온°C"
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

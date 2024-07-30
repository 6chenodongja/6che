// // // // // import React from "react";
// // // // // import Select from "react-select";
// // // // // import Image from "next/image";

// // // // // const weatherIcons = [
// // // // //   {
// // // // //     value: "/Sunny.png",
// // // // //     label: <Image src="/Sunny.png" alt="Sunny" width={20} height={20} />,
// // // // //   },
// // // // //   {
// // // // //     value: "/Cloudy.png",
// // // // //     label: <Image src="/Cloudy.png" alt="Cloudy" width={20} height={20} />,
// // // // //   },
// // // // //   {
// // // // //     value: "/Ice.png",
// // // // //     label: <Image src="/Ice.png" alt="Ice" width={20} height={20} />,
// // // // //   },
// // // // // ];

// // // // // const temperatures = [
// // // // //   { value: "0°C", label: "0°C" },
// // // // //   { value: "5°C", label: "5°C" },
// // // // //   { value: "10°C", label: "10°C" },
// // // // //   { value: "15°C", label: "15°C" },
// // // // //   { value: "20°C", label: "20°C" },
// // // // //   { value: "25°C", label: "25°C" },
// // // // //   { value: "30°C", label: "30°C" },
// // // // //   { value: "35°C", label: "35°C" },
// // // // // ];

// // // // // const customStyles = {
// // // // //   control: (provided: any, state: any) => ({
// // // // //     ...provided,
// // // // //     boxShadow: state.isFocused ? "0 0 0 2px rgba(0, 123, 255, 0.25)" : "none",
// // // // //     borderColor: state.isFocused ? "#80bdff" : provided.borderColor,
// // // // //     "&:hover": {
// // // // //       borderColor: state.isFocused ? "#80bdff" : provided.borderColor,
// // // // //     },
// // // // //     zIndex: state.isFocused ? 9999 : "auto",
// // // // //   }),
// // // // //   menu: (provided: any) => ({
// // // // //     ...provided,
// // // // //     zIndex: 9999,
// // // // //   }),
// // // // // };

// // // // // const WeatherDropdown = ({
// // // // //   setWeatherIcon,
// // // // //   setTemperature,
// // // // // }: {
// // // // //   setWeatherIcon: (icon: string | null) => void;
// // // // //   setTemperature: (temperature: string | null) => void;
// // // // // }) => {
// // // // //   const handleWeatherIconChange = (selectedOption: any) => {
// // // // //     setWeatherIcon(selectedOption ? selectedOption.value : null);
// // // // //   };

// // // // //   const handleTemperatureChange = (selectedOption: any) => {
// // // // //     setTemperature(selectedOption ? selectedOption.value : null);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex gap-2 mt-1 relative z-10">
// // // // //       {/* <Select
// // // // //         options={weatherIcons}
// // // // //         onChange={handleWeatherIconChange}
// // // // //         placeholder="날씨 선택"
// // // // //         className="w-32"
// // // // //         styles={customStyles}
// // // // //         classNamePrefix="react-select-weather"
// // // // //       /> */}
// // // // //       <Select
// // // // //         options={temperatures}
// // // // //         onChange={handleTemperatureChange}
// // // // //         placeholder="기온 선택"
// // // // //         className="w-32"
// // // // //         styles={customStyles}
// // // // //         classNamePrefix="react-select-temperature"
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default WeatherDropdown;

// // // // import React, { useState } from "react";
// // // // import TextField from "@mui/material/TextField";
// // // // import Autocomplete from "@mui/material/Autocomplete";
// // // // import Image from "next/image";

// // // // const weatherIcons = [
// // // //   { value: "/Sunny.png", label: "Sunny", src: "/Sunny.png" },
// // // //   { value: "/Cloudy.png", label: "Cloudy", src: "/Cloudy.png" },
// // // //   { value: "/Ice.png", label: "Ice", src: "/Ice.png" },
// // // // ];

// // // // const temperatures = [
// // // //   { value: "0°C", label: "0°C" },
// // // //   { value: "5°C", label: "5°C" },
// // // //   { value: "10°C", label: "10°C" },
// // // //   { value: "15°C", label: "15°C" },
// // // //   { value: "20°C", label: "20°C" },
// // // //   { value: "25°C", label: "25°C" },
// // // //   { value: "30°C", label: "30°C" },
// // // //   { value: "35°C", label: "35°C" },
// // // // ];

// // // // const WeatherDropdown = ({ setWeatherIcon, setTemperature }) => {
// // // //   const handleWeatherIconChange = (event, newValue) => {
// // // //     setWeatherIcon(newValue ? newValue.value : null);
// // // //   };

// // // //   const handleTemperatureChange = (event, newValue) => {
// // // //     setTemperature(newValue ? newValue.value : null);
// // // //   };

// // // //   return (
// // // //     <div className="flex gap-2 mt-1">
// // // //       <Autocomplete
// // // //         options={weatherIcons}
// // // //         getOptionLabel={(option) => option.label}
// // // //         onChange={handleWeatherIconChange}
// // // //         renderOption={(props, option) => (
// // // //           <li {...props}>
// // // //             <Image src={option.src} alt={option.label} width={20} height={20} />
// // // //             {option.label}
// // // //           </li>
// // // //         )}
// // // //         renderInput={(params) => (
// // // //           <TextField {...params} label="날씨 선택" variant="outlined" />
// // // //         )}
// // // //         className="w-32"
// // // //       />
// // // //       <Autocomplete
// // // //         options={temperatures}
// // // //         getOptionLabel={(option) => option.label}
// // // //         onChange={handleTemperatureChange}
// // // //         renderInput={(params) => (
// // // //           <TextField {...params} label="기온 선택" variant="outlined" />
// // // //         )}
// // // //         className="w-32"
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default WeatherDropdown;


// // import React from "react";
// // import TextField from "@mui/material/TextField";
// // import Autocomplete from "@mui/material/Autocomplete";
// // import Image from "next/image";

// // const weatherIcons = [
// //   { value: "/Sunny.png", label: "Sunny", src: "/Sunny.png" },
// //   { value: "/Cloudy.png", label: "Cloudy", src: "/Cloudy.png" },
// //   { value: "/Ice.png", label: "Ice", src: "/Ice.png" },
// // ];

// // const temperatures = [
// //   { value: "0°C", label: "0°C" },
// //   { value: "5°C", label: "5°C" },
// //   { value: "10°C", label: "10°C" },
// //   { value: "15°C", label: "15°C" },
// //   { value: "20°C", label: "20°C" },
// //   { value: "25°C", label: "25°C" },
// //   { value: "30°C", label: "30°C" },
// //   { value: "35°C", label: "35°C" },
// // ];

// // const WeatherDropdown = ({ setWeatherIcon, setTemperature }) => {
// //   const handleWeatherIconChange = (event, newValue) => {
// //     setWeatherIcon(newValue ? newValue.value : null);
// //   };

// //   const handleTemperatureChange = (event, newValue) => {
// //     setTemperature(newValue ? newValue.value : null);
// //   };

// //   return (
// //     <div className="flex gap-2 mt-1">
// //       <Autocomplete
// //         options={weatherIcons}
// //         getOptionLabel={(option) => option.label}
// //         onChange={handleWeatherIconChange}
// //         renderOption={(props, option) => (
// //           <li {...props}>
// //             <Image src={option.src} alt={option.label} width={20} height={20} />
// //             {option.label}
// //           </li>
// //         )}
// //         renderInput={(params) => (
// //           <TextField
// //             {...params}
// //             label="날씨 선택"
// //             variant="outlined"
// //             InputProps={{
// //               ...params.InputProps,
// //               style: {
// //                 height: '36px', // Adjust this value to match other button heights
// //               }
// //             }}
// //           />
// //         )}
// //         className="w-32"
// //       />
// //       <Autocomplete
// //         options={temperatures}
// //         getOptionLabel={(option) => option.label}
// //         onChange={handleTemperatureChange}
// //         renderInput={(params) => (
// //           <TextField
// //             {...params}
// //             label="기온 선택"
// //             variant="outlined"
// //             InputProps={{
// //               ...params.InputProps,
// //               style: {
// //                 height: '36px', // Adjust this value to match other button heights
// //               }
// //             }}
// //           />
// //         )}
// //         className="w-32"
// //       />
// //     </div>
// //   );
// // };

// // export default WeatherDropdown;





// import React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import Image from "next/image";

// const weatherIcons = [
//   { value: "/Sunny.png", label: "Sunny", src: "/Sunny.png" },
//   { value: "/Cloudy.png", label: "Cloudy", src: "/Cloudy.png" },
//   { value: "/Ice.png", label: "Ice", src: "/Ice.png" },
// ];

// const temperatures = [
//   { value: "0°C", label: "0°C" },
//   { value: "5°C", label: "5°C" },
//   { value: "10°C", label: "10°C" },
//   { value: "15°C", label: "15°C" },
//   { value: "20°C", label: "20°C" },
//   { value: "25°C", label: "25°C" },
//   { value: "30°C", label: "30°C" },
//   { value: "35°C", label: "35°C" },
// ];

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
//           <TextField
//             {...params}
//             label="날씨 선택"
//             variant="outlined"
//             InputLabelProps={{
//               shrink: true,
//               style: {
//                 transform: 'translate(14px, -6px) scale(0.75)',
//               },
//             }}
//             InputProps={{
//               ...params.InputProps,
//               style: {
//                 height: '36px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '0 10px'
//               }
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
//           <TextField
//             {...params}
//             label="기온 선택"
//             variant="outlined"
//             InputLabelProps={{
//               shrink: true,
//               style: {
//                 transform: 'translate(14px, -6px) scale(0.75)',
//               },
//             }}
//             InputProps={{
//               ...params.InputProps,
//               style: {
//                 height: '36px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '0 10px'
//               }
//             }}
//           />
//         )}
//         className="w-32"
//       />
//     </div>
//   );
// };

// export default WeatherDropdown;


import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Image from "next/image";

const weatherIcons = [
  { value: "/Sunny.png", label: "맑음", src: "/Sunny.png" },
  { value: "/Cloudy.png", label: "흐림", src: "/Cloudy.png" },
  { value: "/Ice.png", label: "눈", src: "/Ice.png" },
];

const temperatures = [
  { value: "0°C", label: "0°C" },
  { value: "5°C", label: "5°C" },
  { value: "10°C", label: "10°C" },
  { value: "15°C", label: "15°C" },
  { value: "20°C", label: "20°C" },
  { value: "25°C", label: "25°C" },
  { value: "30°C", label: "30°C" },
  { value: "35°C", label: "35°C" },
];

const WeatherDropdown = ({ setWeatherIcon, setTemperature }) => {
  const handleWeatherIconChange = (event, newValue) => {
    setWeatherIcon(newValue ? newValue.value : null);
  };

  const handleTemperatureChange = (event, newValue) => {
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
                padding: '0 10px'
              }
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
                padding: '0 10px'
              }
            }}
          />
        )}
        className="w-32"
      />
    </div>
  );
};

export default WeatherDropdown;

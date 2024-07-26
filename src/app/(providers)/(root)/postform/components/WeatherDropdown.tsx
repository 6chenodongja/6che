import React from "react";
import Select from "react-select";
import Image from "next/image";

const weatherIcons = [
  {
    value: "/Sunny.png",
    label: <Image src="/Sunny.png" alt="Sunny" width={20} height={20} />,
  },
  {
    value: "/Cloudy.png",
    label: <Image src="/Cloudy.png" alt="Cloudy" width={20} height={20} />,
  },
  {
    value: "/Ice.png",
    label: <Image src="/Ice.png" alt="Ice" width={20} height={20} />,
  },
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

const WeatherDropdown = ({
  setWeatherIcon,
  setTemperature,
}: {
  setWeatherIcon: (icon: string | null) => void;
  setTemperature: (temperature: string | null) => void;
}) => {
  const handleWeatherIconChange = (selectedOption: any) => {
    setWeatherIcon(selectedOption ? selectedOption.value : null);
  };

  const handleTemperatureChange = (selectedOption: any) => {
    setTemperature(selectedOption ? selectedOption.value : null);
  };

  return (
    <div className="flex gap-2 mt-1">
      <Select
        options={weatherIcons}
        onChange={handleWeatherIconChange}
        placeholder="날씨 선택"
        className="w-32"
      />
      <Select
        options={temperatures}
        onChange={handleTemperatureChange}
        placeholder="기온 선택"
        className="w-32"
      />
    </div>
  );
};

export default WeatherDropdown;

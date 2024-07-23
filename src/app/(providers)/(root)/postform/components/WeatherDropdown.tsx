import Select from "react-select";
import Image from "next/image";

const weatherIcons = [
  {
    value: "/Sunny.png",
    label: <Image src="/Sunny.png" alt="Sunny" width={24} height={24} />,
  },
  {
    value: "/Cloudy.png",
    label: <Image src="/Cloudy.png" alt="Cloudy" width={24} height={24} />,
  },
  {
    value: "/Ice.png",
    label: <Image src="/Ice.png" alt="Ice" width={24} height={24} />,
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
  setTemperature: (temp: string | null) => void;
}) => {
  // 날씨 아이콘 선택 핸들러
  const handleWeatherIconChange = (selectedOption: any) => {
    setWeatherIcon(selectedOption ? selectedOption.value : null);
  };

  // 기온 선택 핸들러
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
        components={{ IndicatorSeparator: () => null }}
      />
      <Select
        options={temperatures}
        onChange={handleTemperatureChange}
        placeholder="기온 선택"
        className="w-32"
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
};

export default WeatherDropdown;

import React from "react";

type WeatherData = {
  Temperature: {
    Metric: {
      Value: number;
    };
  };
  WeatherText: string;
};

const Weather = ({ data }: { data: WeatherData }) => {
  return (
    <div className="weather-info">
      <h2 className="text-xl">현재 날씨: {data.Temperature.Metric.Value}°C</h2>
      <p>상태: {data.WeatherText}</p>
    </div>
  );
};

export default Weather;

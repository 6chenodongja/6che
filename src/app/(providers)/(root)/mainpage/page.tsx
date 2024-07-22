"use client";

import React, { useEffect, useState } from "react";
import { getWeather } from "../../../api/weather/weather";
import Weather from "../common/Weather";

const MainPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getWeather("226396"); // Example location key for Seoul
        setWeather(weatherData[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">온코디</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          라이트/다크 모드
        </button>
      </header>
      <main>
        {weather ? (
          <Weather data={weather} />
        ) : (
          <p>날씨 정보를 불러오는 중...</p>
        )}
      </main>
    </div>
  );
};

export default MainPage;

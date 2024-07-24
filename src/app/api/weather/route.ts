import { NextResponse } from 'next/server';
import axios from 'axios';

// API 호출 및 데이터 반환
export async function getWeather(locationKey: string) {
  try {
    const apiKey = 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR'; // AccuWeather API 키

    // 현재 날씨 데이터 요청
    const currentWeatherResponse = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
      {
        params: {
          apikey: apiKey,
        },
      },
    );

    // 시간별 날씨 데이터 요청
    const hourlyWeatherResponse = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}`,
      {
        params: {
          apikey: apiKey,
        },
      },
    );

    // 어제 날씨 데이터 요청
    const historicalWeatherResponse = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}/historical/24`,
      {
        params: {
          apikey: apiKey,
        },
      },
    );

    return {
      current: currentWeatherResponse.data[0],
      hourly: hourlyWeatherResponse.data,
      historical: historicalWeatherResponse.data[0],
    };
  } catch (error) {
    console.error('API 요청 오류:', error);
    return {
      current: null,
      hourly: [],
      historical: null,
    };
  }
}

export async function getWeeklyWeather(locationKey: string) {
  try {
    const apiKey = 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR'; // AccuWeather API 키

    // 주간 날씨 데이터 요청
    const weeklyWeatherResponse = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
      {
        params: {
          apikey: apiKey,
          language: 'ko-kr',
        },
      },
    );

    return weeklyWeatherResponse.data.DailyForecasts;
  } catch (error) {
    console.error('주간 날씨 API 요청 오류:', error);
    return [];
  }
}

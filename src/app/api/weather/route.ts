import { NextResponse } from 'next/server';
import axios from 'axios';

interface AirQualityItem {
  Name: string;
  Value: number;
}

export async function getWeather(locationKey: string) {
  try {
    // const apiKey = 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR'; // AccuWeather API 키

    // 현재 날씨 데이터 요청
    const currentWeatherResponse = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
      {
        params: {
          apikey: apiKey,
          details: true, // 상세 정보를 포함하도록 요청
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

    // AirQuality 데이터 요청
    const airQualityResponse = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}`,
      {
        params: {
          apikey: apiKey,
          details: true,
        },
      },
    );

    // AirAndPollen에서 Name이 "AirQuality"인 항목을 찾기
    const airQualityData =
      airQualityResponse.data.DailyForecasts[0]?.AirAndPollen?.find(
        (item: AirQualityItem) => item.Name === 'AirQuality',
      );

    return {
      current: currentWeatherResponse.data[0],
      hourly: hourlyWeatherResponse.data,
      airQuality: airQualityData || null,
      historical: historicalWeatherResponse.data[0] || null,
    };
  } catch (error) {
    console.error('API 요청 오류:', error);
    return {
      current: null,
      hourly: [],
      historical: null,
      airQuality: null,
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

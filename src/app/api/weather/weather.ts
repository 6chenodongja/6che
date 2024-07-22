import axios from 'axios';

const API_KEY = '9HKUZdExxmzhA6qHW6evCMJ9zTVaeG4i'; // AccuWeather API 키
const BASE_URL = 'http://dataservice.accuweather.com';

// 날씨 정보를 가져오는 함수
export const getWeather = async (locationKey: string) => {
  try {
    // 현재 날씨 정보 요청
    const currentWeatherResponse = await axios.get(
      `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`,
    );

    // 어제 시간대의 날씨 정보 요청
    const historicalWeatherResponse = await axios.get(
      `${BASE_URL}/currentconditions/v1/${locationKey}/historical/24?apikey=${API_KEY}`,
    );

    return {
      current: currentWeatherResponse.data[0], // 현재 날씨 데이터
      historical: historicalWeatherResponse.data[0], // 어제 날씨 데이터
    };
  } catch (error) {
    console.error('날씨 데이터 요청 오류:', error);
    return {
      current: null,
      historical: null,
    };
  }
};

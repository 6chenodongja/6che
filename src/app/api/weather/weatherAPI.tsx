import axios from 'axios';

export const getLocationAPI = async (query: string) => {
  try {
    const response = await axios.get(
      `/api/weather`, // 서버에 요청을 보낼 때 적절한 경로를 지정합니다.
      {
        params: { query: encodeURIComponent(query) }, // 쿼리 인코딩
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
};

export const getWeatherAPI = async (locationKey: string) => {
  try {
    const response = await axios.get(`/api/weather`, {
      params: { locationKey },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

import { useEffect, useState } from 'react';
import axios from 'axios';

const useWeather = (locationKey: string) => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `/api/weather?locationKey=${locationKey}`,
        );
        setWeather(response.data);
      } catch (error) {
        console.error('날씨 데이터 요청 오류:', error);
        setError('날씨 데이터를 가져오는 데 실패했습니다.');
      }
    };

    fetchWeather();
  }, [locationKey]);

  return { weather, error };
};

export default useWeather;

import React, { useState } from 'react';
import { IconLocation } from 'icons/IconLocation';
import axios from 'axios';

interface Weather {
  temperature: number;
  weatherText: string;
  weatherIcon: number;
}

interface LocationInputProps {
  setWeather: (weather: Weather) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ setWeather }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [location, setLocation] = useState('서울시 동작구');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const fetchLocationKey = async (lat: number, lon: number) => {
    try {
      const response = await axios.get('/api/location', {
        params: {
          lat,
          lon,
        },
      });
      return response.data.locationKey;
    } catch (error) {
      console.error('Failed to fetch location key', error);
      throw error;
    }
  };

  const fetchWeatherData = async (locationKey: string) => {
    try {
      const response = await axios.get('/api/weather', {
        params: { locationKey },
      });
      setWeather(response.data.current);
      setLocation(response.data.locationName); // 이 부분은 API에서 locationName을 반환하는 경우 사용
    } catch (error) {
      console.error('Failed to fetch weather data', error);
    }
  };

  const handleLocationClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const locationKey = await fetchLocationKey(latitude, longitude);
            await fetchWeatherData(locationKey);
          } catch (error) {
            console.error('Error fetching data', error);
            alert('위치를 가져올 수 없습니다. 위치 권한을 확인해주세요.');
          }
        },
        (error) => {
          console.error('Error getting location', error);
          alert('위치를 가져올 수 없습니다. 위치 권한을 확인해주세요.');
        },
      );
    } else {
      alert('현재 브라우저에서 위치 정보를 사용할 수 없습니다.');
    }
  };

  return (
    <div className="mt-[40px] flex items-center space-x-2 rounded-full bg-white bg-opacity-30 py-1 px-4 backdrop-blur-lg">
      {isEditing ? (
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
          className="text-black bg-transparent border-none outline-none"
        />
      ) : (
        <span className="text-black" onClick={handleEditClick}>
          {location}
        </span>
      )}
      <IconLocation
        className="w-4 h-4 cursor-pointer"
        onClick={handleLocationClick}
      />
    </div>
  );
};

export default LocationInput;

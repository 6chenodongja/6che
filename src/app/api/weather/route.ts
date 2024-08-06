import { NextResponse } from 'next/server';
import axios from 'axios';

async function getLocationKey(lat: string, lon: string) {
    const apiKey = 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR'; // AccuWeather API 키
    const response = await axios.get(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search`,
        {
            params: {
                apikey: apiKey,
                q: `${lat},${lon}`,
                language: 'ko-kr',
                details: true,
                toplevel: true,
            },
        }
    );
    return response.data.Key;
}

async function getWeather(locationKey: string) {
    try {
        const apiKey = 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR'; // AccuWeather API 키

        const currentWeatherResponse = await axios.get(
            `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
            {
                params: {
                    apikey: apiKey,
                    details: true,
                },
            }
        );

        const hourlyWeatherResponse = await axios.get(
            `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}`,
            {
                params: {
                    apikey: apiKey,
                },
            }
        );

        const historicalWeatherResponse = await axios.get(
            `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}/historical/24`,
            {
                params: {
                    apikey: apiKey,
                },
            }
        );

        const airQualityResponse = await axios.get(
            `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}`,
            {
                params: {
                    apikey: apiKey,
                    details: true,
                },
            }
        );

        const airQualityData =
            airQualityResponse.data.DailyForecasts[0]?.AirAndPollen?.find(
                (item: any) => item.Name === 'AirQuality'
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

async function getWeeklyWeather(locationKey: string) {
    try {
        const apiKey = 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR'; // AccuWeather API 키

        const weeklyWeatherResponse = await axios.get(
            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
            {
                params: {
                    apikey: apiKey,
                    language: 'ko-kr',
                },
            }
        );

        return weeklyWeatherResponse.data.DailyForecasts;
    } catch (error) {
        console.error('주간 날씨 API 요청 오류:', error);
        return [];
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let locationKey = searchParams.get('locationKey');
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
    const type = searchParams.get('type');

    if (!locationKey && lat && lon) {
        locationKey = await getLocationKey(lat, lon);
    }

    if (!locationKey) {
        return NextResponse.json({ error: 'locationKey is required' }, { status: 400 });
    }

    if (type === 'weekly') {
        const weeklyWeather = await getWeeklyWeather(locationKey);
        return NextResponse.json(weeklyWeather);
    }

    const weather = await getWeather(locationKey);
    return NextResponse.json(weather);
}

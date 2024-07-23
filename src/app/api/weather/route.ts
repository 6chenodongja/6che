import { NextResponse } from 'next/server';
import axios from 'axios';

// API 호출 및 데이터 반환
export async function GET() {
  try {
    // AccuWeather API의 현재 날씨와 어제 날씨 데이터 요청
    const currentResponse = await axios.get(
      'https://dataservice.accuweather.com/currentconditions/v1/3430005',
      {
        params: {
          apikey: 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR',
        },
      },
    );

    // AccuWeather API의 과거 날씨 데이터 요청 (현재 API는 과거 데이터를 제공하지 않을 수 있음, 여기서는 예제로 제공)
    // 실제로는 별도의 API 엔드포인트를 사용할 필요가 있음
    const historicalResponse = await axios.get(
      'https://dataservice.accuweather.com/currentconditions/v1/3430005',
      {
        params: {
          apikey: 'U8AuE7Glix0G2AZ76oRKO1yPSW0gg5WR',
        },
      },
    );

    const currentData = currentResponse.data[0];
    const historicalData = historicalResponse.data[0]; // 현재 API로 어제 데이터 제공한다고 가정

    // 필요한 데이터 추출
    const response = {
      current: currentData,
      historical: historicalData, // 어제 데이터로 가정
    };

    return NextResponse.json(response);
  } catch (error) {
    // 오류 발생 시, 상세히 로그를 기록하고 적절한 응답 반환
    console.error('API 요청 오류:', error);
    return NextResponse.json(
      { error: '날씨 데이터를 가져오는 데 실패했습니다.' },
      { status: 500 },
    );
  }
}

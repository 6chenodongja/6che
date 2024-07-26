export interface Temperature {
  Metric: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Imperial: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
}

export interface WeatherData {
  Temperature: Temperature;
}

// 날씨 데이터와 관련된 타입 정의
export interface WeatherResponse {
  current: WeatherData | null;
  hourly: any[]; // 시간별 데이터의 타입 정의 필요
  historical: Temperature | null;
}

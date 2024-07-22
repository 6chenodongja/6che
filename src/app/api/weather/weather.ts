export const getWeather = async (locationKey: string) => {
  const response = await fetch(
    `/api/weather/proxy-weather?locationKey=${locationKey}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
};

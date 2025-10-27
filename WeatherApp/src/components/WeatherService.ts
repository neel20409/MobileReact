import { WeatherDataTypes } from "../App";

export const fetchWeatherData = async (city: string, apikey: string): Promise<WeatherDataTypes> => {
  // Use the 5-day / 3-hour forecast endpoint which returns a `list` array
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apikey}&units=metric`;

  // Add a timeout to avoid hanging requests
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Failed to fetch weather data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data as WeatherDataTypes;
  } catch (error) {
    // Normalize abort errors
    if ((error as any)?.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};
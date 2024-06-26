import { Injectable } from '@angular/core';
import axios from 'axios';

const API_KEY = '482944e26d320a80bd5e4f23b3de7d1f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const METADATA_URL = 'https://api.weatherbit.io/v2.0/meta/cities';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() { }

  async getWeatherData(city: string): Promise<WeatherData> {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  }

  async getCityMetadata(): Promise<any> {
    const response = await axios.get(METADATA_URL, {
      params: {
        key: 'YOUR_WEATHERBIT_API_KEY'
      }
    });
    return response.data;
  }
}

export interface WeatherData {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
      description: string;
    }[];
  }[];
}

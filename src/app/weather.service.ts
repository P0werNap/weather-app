import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = '3822b1a7b88b4abdb179ac452cd51cd0';
const BASE_URL = 'https://api.weatherbit.io/v2.0';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${BASE_URL}/current`, {
      params: {
        city: city,
        key: API_KEY
      }
    });
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

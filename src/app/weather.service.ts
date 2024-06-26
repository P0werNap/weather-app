import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = '';
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

  getHourlyForecast(city: string): Observable<any> {
    return this.http.get(`${BASE_URL}/forecast/hourly`, {
      params: {
        city: city,
        key: API_KEY,
        hours: 6 // Fetch the next 6 hours
      }
    });
  }

  getDailyForecast(city: string): Observable<any> {
    return this.http.get(`${BASE_URL}/forecast/daily`, {
      params: {
        city: city,
        key: API_KEY,
        days: 5 // Fetch the next 5 days
      }
    });
  }
}

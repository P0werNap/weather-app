import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService, WeatherData } from '../weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnChanges {
  @Input() selectedCity!: string;
  weatherData: WeatherData | undefined;
  dailyForecast: { date: string, temp: number, weather: { icon: string, description: string }[] }[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.selectedCity) {
      this.fetchWeatherData();
    }
  }

  async fetchWeatherData() {
    this.weatherData = await this.weatherService.getWeatherData(this.selectedCity);
    this.dailyForecast = this.getDailyForecast(this.weatherData.list);
  }

  getDailyForecast(hourlyData: { dt_txt: string, main: { temp: number }, weather: { icon: string, description: string }[] }[]) {
    const dailyData: { date: string, temp: number, weather: { icon: string, description: string }[] }[] = [];
    for (let i = 0; i < hourlyData.length; i += 8) {
      dailyData.push({
        date: hourlyData[i].dt_txt,
        temp: hourlyData[i].main.temp,
        weather: hourlyData[i].weather,
      });
    }
    return dailyData;
  }
}

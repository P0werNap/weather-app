import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnChanges {
  @Input() weatherData: any;
  hourlyForecast: any[] = [];
  dailyForecast: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.weatherData) {
      this.fetchHourlyForecast();
      this.fetchDailyForecast();
    }
  }

  fetchHourlyForecast() {
    this.weatherService.getHourlyForecast(this.weatherData.city_name).subscribe(data => {
      this.hourlyForecast = data.data;
    });
  }

  fetchDailyForecast() {
    this.weatherService.getDailyForecast(this.weatherData.city_name).subscribe(data => {
      this.dailyForecast = data.data;
    });
  }
}

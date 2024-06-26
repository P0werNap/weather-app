import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentWeatherData: any;
  selectedCity!: string;

  constructor(private weatherService: WeatherService) {}

  onWeatherDataReceived(weatherData: any) {
    this.currentWeatherData = weatherData;
  }

  onCitySelected(city: string) {
    this.selectedCity = city;
    this.weatherService.getCurrentWeather(city).subscribe(data => {
      this.currentWeatherData = data.data[0];
    });
  }
}

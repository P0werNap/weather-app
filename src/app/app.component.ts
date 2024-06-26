import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentWeatherData: any;

  onWeatherDataReceived(weatherData: any) {
    this.currentWeatherData = weatherData;
  }
}

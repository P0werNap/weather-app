import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnChanges {
  @Input() weatherData: any;

  ngOnChanges() {}
}

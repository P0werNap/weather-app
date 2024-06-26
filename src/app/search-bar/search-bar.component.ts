import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() weatherData = new EventEmitter<any>();
  suggestions: any[] = [];
  showSearch = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    if (query.length > 2) {
      this.weatherService.getCurrentWeather(query).subscribe(data => {
        this.suggestions = data.data;
      });
    } else {
      this.suggestions = [];
    }
  }

  selectCity(city: any) {
    this.weatherData.emit(city);
    this.suggestions = [];
    this.showSearch = false;
  }
}

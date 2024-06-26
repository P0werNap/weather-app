import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() citySelected = new EventEmitter<string>();
  cityMetadata: any[] = [];
  suggestions: any[] = [];

  constructor(private weatherService: WeatherService) {}

  async ngOnInit() {
    const metadataResponse = await this.weatherService.getCityMetadata();
    this.cityMetadata = metadataResponse.data;
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.suggestions = this.cityMetadata.filter(city => city.city_name.toLowerCase().includes(query));
  }

  selectCity(city: any) {
    this.citySelected.emit(city.city_name);
    this.suggestions = [];
  }
}

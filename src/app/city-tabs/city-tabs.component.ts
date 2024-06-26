import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-tabs',
  templateUrl: './city-tabs.component.html',
  styleUrls: ['./city-tabs.component.css']
})
export class CityTabsComponent {
  @Output() citySelected = new EventEmitter<string>();

  selectCity(city: string) {
    this.citySelected.emit(city);
  }
}

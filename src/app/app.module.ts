import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CityTabsComponent } from './city-tabs/city-tabs.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityTabsComponent,
    WeatherDetailsComponent,
    ForecastComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

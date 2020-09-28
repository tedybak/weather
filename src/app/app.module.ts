import { WeatherService } from './weather/weather.service'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app/app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { fromEventPattern } from 'rxjs'
import { NavbarComponent } from './navbar/navbar.component'

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}

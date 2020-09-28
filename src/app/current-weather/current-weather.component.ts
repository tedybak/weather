import { Observable } from 'rxjs'
import { WeatherService } from './../weather/weather.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current$: Observable
  constructor(private service: WeatherService) {}
  city: any

  procesar(valores) {
    this.city = valores.city
    this.getNewDataOfCity()
  }

  getNewDataOfCity() {
    this.current$ = this.service.getCurrentWeather(this.city)
  }
}

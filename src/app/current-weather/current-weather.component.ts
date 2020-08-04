import { WeatherService } from './../weather/weather.service'
import { ICurrentWeather } from './../icurrent-weather'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: any
  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.service.getCurrentWeather('London').subscribe((data) => {
      this.current = data
    })
  }
}

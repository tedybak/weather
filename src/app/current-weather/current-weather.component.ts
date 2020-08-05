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
  city: any

  ngOnInit(): void {
    this.service.getCurrentWeather('Seville').subscribe((data) => {
      this.current = data
      console.log(data)
    })
  }
  procesar(valores) {
    this.city = valores.city
    this.getNewDataOfCity()
  }

  getNewDataOfCity() {
    this.service.getCurrentWeather(this.city).subscribe((data) => {
      this.current = data
      console.log(data)
    })
  }
}

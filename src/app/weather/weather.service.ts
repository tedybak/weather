import { ICurrentWeather } from './../icurrent-weather'
import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface ICurrentWeatherData {
  weather: [{ description: string; icon: string }]
  main: { temp: number }
  sys: { country: string }
  dt: number
  name: string
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _httpClient: HttpClient) {}

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return this._httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}` + `${city},${country}&appid=${environment.appId}`
      )
      .pipe(map((data) => this.transformToICurrentWeather(data)))
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }
}

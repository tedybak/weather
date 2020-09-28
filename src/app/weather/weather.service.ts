import { environment } from './../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _httpClient: HttpClient) {}

  getCurrentWeather(city: string) {
    let headers = new HttpHeaders()
    headers = headers.set('Content-type', 'application/json')
    return this._httpClient.get(
      `${environment.baseUrl} + ${city}&appid=${environment.appId}`
    )
  }
}

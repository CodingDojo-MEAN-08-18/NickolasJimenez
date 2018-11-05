import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }
  // 8b277e374b6ec8c2f73c4d6205250a59
  getCity(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8b277e374b6ec8c2f73c4d6205250a59`);
  }

}

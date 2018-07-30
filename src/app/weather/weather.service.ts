import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

interface ICurrentWeatherData {
  country: string;
  weather: [{
    description: string,
    icon: string
  }];
  main: {
    temp: number
  };
  sys: {
    country: string
  };
  description: string;
  temperature: number;
  image: string;
  date: Date;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  getCurrentWeather(city: string, country: string) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` + `q=${city}, ${country}&appid=${environment.appId}`);
  }
}

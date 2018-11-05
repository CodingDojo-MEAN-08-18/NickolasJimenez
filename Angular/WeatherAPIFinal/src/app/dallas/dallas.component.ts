import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: any;
  status: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getDallas();
  }

  getDallas() {
    this._httpService.getCity('dallas').subscribe(data => {
      console.log(data);

      this.weather = [data['main']];
      this.status = [data['weather'][0]];

      console.log(this.weather);

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather: any;
  status: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getChicago();
  }

  getChicago() {
    this._httpService.getCity('chicago').subscribe(data => {
      console.log(data);

      this.weather = [data['main']];
      this.status = [data['weather'][0]];

      console.log(this.weather);

    })
  }
}

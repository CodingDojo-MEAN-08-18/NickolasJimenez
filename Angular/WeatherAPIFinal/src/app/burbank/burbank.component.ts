import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  weather: any;
  status: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBurbank();
  }

  getBurbank() {
    this._httpService.getCity('burbank').subscribe(data => {
      console.log(data);

      this.weather = [data['main']];
      this.status = [data['weather'][0]];

      console.log(this.weather);

    })
  }
}

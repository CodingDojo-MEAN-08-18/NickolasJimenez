import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather: any;
  status: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSanJose();
  }

  getSanJose() {
    this._httpService.getCity('dallas').subscribe(data => {
      console.log(data);

      this.weather = [data['main']];
      this.status = [data['weather'][0]];

      console.log(this.weather);

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  status: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSeattle();
  }

  getSeattle() {
    this._httpService.getCity('dallas').subscribe(data => {
      console.log(data);

      this.weather = [data['main']];
      this.status = [data['weather'][0]];

      console.log(this.weather);

    })
  }
}

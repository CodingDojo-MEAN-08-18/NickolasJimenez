import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Tasks } from './models/tasks'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks: string[];
  // task = new Tasks();
  show: string[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // this.getTaskFromService();
  }

  getTaskFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("GOT DATA!", data);
      this.tasks = data['data'];
      this.tasks.forEach(e => {console.log(e); });
    });
  }

  getTaskByIDFromService(id: string) {
    this._httpService.getTaskByID(id).subscribe(data => {
      console.log(data);
      this.show = data['data'][0];
    });
  }
}

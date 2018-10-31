import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RestfulInteractive';
  tasks_title;
  tasks_info;
  aNumber: number;

  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
  }
  showAll(): void {
    console.log(`Click event is working`);
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log('Got our data! First button', data)
      this.tasks_title = data;
    });
  }
  displayInfo(num: Number): void {
    console.log(`click event working: ${num}`);
    let observableTwo = this._httpService.postToServer({data:num});
    observableTwo.subscribe(data => {
      console.log("This is from subscribe!", data)
      this.tasks_info = data;
    });
  }
}

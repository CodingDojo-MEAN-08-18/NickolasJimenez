import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor (private _http: HttpClient) {
    // this.getTasks();
  }

  getTasks() {
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks", data));
    return this._http.get('/task');
  }

  postToServer(num) {
    console.log('this is from the post to server function' num);
    return this._http.post('/showATask', num);
  }

}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks() {
      const tempObservable = this._http.get('/tasks');

      tempObservable.subscribe(data => console.log('All the tasks!', data));
   }
  getTaskById() {
    const tempObservable = this._http.get('/tasks/:id');

    tempObservable.subscribe(data => console.log('The third task:', data));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
  providedIn: 'root'
}
)
export class HttpService {

  constructor(private _http: HttpClient) {
  // this.getTasks();
  }

  getTasks() {
  // let tempObservable = this._http.get('/tasks');
  // tempObservable.subscribe(data => console.log('SUCCESS', data));
  return this._http.get('/tasks');
  }

  getTaskByID(id: string) {
    return this._http.get(`/tasks/${id}`);
  }
}

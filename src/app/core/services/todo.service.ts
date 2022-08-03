import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _http: HttpClient) {}

  getItems() {
    return this._http.get<any>('http://localhost:3000/todos');
  }
  addItem(data: any) {
    return this._http.post<any>('http://localhost:3000/todos', data);
  }
  deleteItem(id: number) {
    return this._http.delete<any>('http://localhost:3000/todos/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {FakeData} from "../interfaces/FakeData";

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}

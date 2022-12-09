import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Operation} from "../../interfaces/Operation";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class CalculatorOperationsService {
  API_URI = 'http://localhost:4000/api'
  constructor(private http: HttpClient) {}

  getOperations(): Observable<any> {
    return this.http.get(`${this.API_URI}/calculator`);
  }

  getSingleOperation(id: string): Observable<any> {
    return this.http.get(`${this.API_URI}/calculator/${id}`);
  }

  deleteOperation(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/calculator/${id}`)
  }

  updateOperation(id: string, updatedOp: Operation): Observable<any> {
    return this.http.put(`${this.API_URI}/calculator/${id}`, updatedOp);
  }

  saveOperation(operation: Operation): Observable<any> {
    return this.http.post(`${this.API_URI}/calculator`, operation);
  }
}

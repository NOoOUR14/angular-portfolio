import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:5000/test-api';

  constructor(private http: HttpClient) { }

  testConnection(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

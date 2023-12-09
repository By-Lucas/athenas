import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000';

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) {}

  getAllMembers() : Observable<any> {
    return this.http.get(`${this.baseUrl}/people/all`,{headers:this.httpHeaders});
  }

}

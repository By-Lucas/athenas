import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  // Headers
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  

  getAllMembers() : Observable<any> {
    return this.http.get(`${this.baseUrl}/people/all`,{headers:this.httpHeaders})
    .pipe(
      retry(2),
    );
  }
}

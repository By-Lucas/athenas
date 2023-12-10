import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  
  constructor(private http: HttpClient) {}


  getPerson(id) : Observable<any> {
    return this.http.get(`${this.baseUrl}/people/${id}`,{headers:this.httpHeaders});
  }

  updatePerson(person) : Observable<any> {
    //let body = {name: person.name, cpf: person.cpf}
    // Caso eu queira enviar somente informações necessárias posso usar o Body
    return this.http.put(`${this.baseUrl}/people/update/${person.id}`, person, {headers:this.httpHeaders});
  }


}

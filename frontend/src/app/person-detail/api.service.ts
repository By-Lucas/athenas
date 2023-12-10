import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000';
  token = 'Token 52c72ebfee54dbf42b45973b5029a611f088ab5d'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token)
  
  constructor(private http: HttpClient) {}


  getPerson(id) : Observable<any> {
    return this.http.get(`${this.baseUrl}/people/${id}`,{headers:this.httpHeaders});
  }

  updatePerson(person) : Observable<any> {
    //let body = {name: person.name, cpf: person.cpf}
    // Caso eu queira enviar somente informações necessárias posso usar o Body
    return this.http.put(`${this.baseUrl}/people/update/${person.id}`, person, {headers:this.httpHeaders});
  }


  deletePerson(id) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/people/delete/${id}`,{headers:this.httpHeaders});
  }



}

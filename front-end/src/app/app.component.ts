import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Data } from 'ws';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';

  baseUrl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  people = [{ id: '' , name: '', cpf: '', birth_date: '', sex: '', height:'', weight:'',}];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllPeople();
    this.getPeople;
    this.deletePeople;
  }

  getAllPeople() {
    this.http.get(`${this.baseUrl}/people/all`, {headers:this.httpHeaders}).subscribe(
      (data) => {
        this.people = data as { id:string, name:string; cpf: string; birth_date: string; sex: string; height: string; weight: string; }[]
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPeople(id:string) {
    this.http.get(`${this.baseUrl}/people/${id}`, {headers:this.httpHeaders}).subscribe(
      (data) => {
        console.log(data);
        this.people = data as {id:string, name: string; cpf: string; birth_date: string; sex: string; height: string; weight: string; }[]
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );
  }

  deletePeople(id:string) {
    this.http.delete(`${this.baseUrl}/people/${id}`, {headers:this.httpHeaders}).subscribe(
      (data) => {
        this.people = data as {id:string, name: string;cpf: string; birth_date: string; sex: string; height: string; weight: string; }[]
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );
  }
  
}

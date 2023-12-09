import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  people = [{name: '', email: '', cpf: '', birth_date: '', sex: '', height:'', weight:'',}];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.http.get(`${this.baseUrl}/people/all`).subscribe(
      (data) => {
        this.people = data as { name: string; email: string; cpf: string; birth_date: string; sex: string; height: string; weight: string; }[]
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPeopleOne(id:number) {
    this.http.get(`${this.baseUrl}/people/${id}`).subscribe(
      (data) => {
        this.people = data as { name: string; email: string; cpf: string; birth_date: string; sex: string; height: string; weight: string; }[]
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}

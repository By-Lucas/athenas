import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  members = [
    {name:'Lucas Silva', email:'lucas@gmail.com'},
    {name:'Teste 1', email:'teste1@gmail.com'},
    {name:'Teste 2', email:'teste2@gmail.com'},
  ];

  constructor(private api:ApiService) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log('HOUVE UM ERRO', error)
      }
    );
  };
}

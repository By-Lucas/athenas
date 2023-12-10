import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  baseUrl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  selected_person= { id: '' , name: '', cpf: '', birth_date: '', sex: '', height:'', weight:''};
  peoples = [{ id: 1 , name: 'Lucas Silva', cpf: '646.998.781-89', birth_date: '22/09/1995', sex: 'M', height:'1.8', weight:'0.65'}];

  constructor(private api: ApiService) {
    this.getAllPerson();
    this.getPerson;
  }

  getAllPerson = () => {
    this.api.getAllMembers().subscribe(
      (data) => {
        console.log(data);
        this.peoples = data
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );
  };

  getPerson = (person) => {
    this.api.getMember(person.id).subscribe(
      (data) => {
        this.selected_person = data
        console.log(this.selected_person);

        //this.peoples = data as {id:string, name: string; cpf: string; birth_date: string; sex: string; height: string; weight: string; }[] 
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );
  };

}

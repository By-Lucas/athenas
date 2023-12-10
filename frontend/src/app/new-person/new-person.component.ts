import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  person = {name: '', cpf: '', birth_date: '', sex: '', height:'', weight:''};

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  save() {
    this.api.saveNewPerson(this.person).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );

  }

}
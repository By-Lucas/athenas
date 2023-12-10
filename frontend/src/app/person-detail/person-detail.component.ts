import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  selected_person = { id: '' , name: '', cpf: '', birth_date: '', sex: '', height:'', weight:''};

  constructor( private route: ActivatedRoute, private api: ApiService ) { }

  ngOnInit() {
    this.loadPerson();
  }

  loadPerson() {
    const id = this.route.snapshot.paramMap.get('id'); // Pegar o ID no HTML
    console.log(id);

    this.api.getMember(id).subscribe(
      (data) => {
        this.selected_person = data
        console.log(data);

        //this.peoples = data as {id:string, name: string; cpf: string; birth_date: string; sex: string; height: string; weight: string; }[] 
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );
  };

}

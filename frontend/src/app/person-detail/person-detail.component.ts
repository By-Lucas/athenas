import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  selected_person = { id: '' , name: '', cpf: '', birth_date: '', sex: '', height:'', weight:''};
  selected_id;
  
  constructor( 
    private route: ActivatedRoute, 
    private api: ApiService, 
    private router: Router ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id
      this.loadPerson(id);
    })
  }

  loadPerson(id) {
    //const id = this.route.snapshot.paramMap.get('id'); // Pegar o ID no HTML

    this.api.getPerson(id).subscribe(
      (data) => {
        console.log(data);
        this.selected_person = data
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );
  };

  update(){
    this.api.updatePerson(this.selected_person).subscribe(
      (data) => {
        console.log(data);
        this.selected_person = data
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
      }
    );
  };

  newPerson(){
    this.router.navigate(['new-person']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.loadPerson();
  }

  loadPerson(){
    const id = this.route.snapshot.paramMap.get('id') // Pegar o ID no HTML
    console.log(id)
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
  errorMessage: string = '';
  successMessage: string = '';

  person = {name: '', cpf: '', birth_date: '', sex: '', height:'', weight:''};

  constructor(private api: ApiService, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 3000); // 3000 milissegundos = 3 segundos
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000); // Desaparece após 3 segundos
  }


  save() {
    this.api.saveNewPerson(this.person).subscribe(
      (data) => {
        console.log(data);
        // Atualizar a lista dinamicamente
        this.appComponent.peoples.push(data)
        this.showSuccessMessage('Dados cadastrado com sucesso!');
        
      },
      (error) => {
        console.log("Houver o seguinte erro:", error);
        this.showErrorMessage('Erro ao cadastrar os dados: ' + error.message);
        
      }
    );

  }

}

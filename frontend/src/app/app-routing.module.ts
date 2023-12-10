import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { NewPersonComponent } from './new-person/new-person.component';


const routes: Routes = [
  {path: 'person-detail/:id', component: PersonDetailComponent},
  {path: 'new-person', component: NewPersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PersonDetailComponent, NewPersonComponent]


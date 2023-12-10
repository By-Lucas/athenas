import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { FormsModule } from '@angular/forms';
import { NewPersonComponent } from './new-person/new-person.component';
import { FilterPipe } from './filter.pipe'; 
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    NewPersonComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

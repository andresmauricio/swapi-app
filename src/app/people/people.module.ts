import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { ListOfPeopleComponent } from './containers/list-of-people/list-of-people.component';


@NgModule({
  declarations: [
    ListOfPeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }

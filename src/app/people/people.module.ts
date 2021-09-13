import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { ListOfPeopleComponent } from './containers/list-of-people/list-of-people.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListOfPeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MaterialModule
  ]
})
export class PeopleModule { }

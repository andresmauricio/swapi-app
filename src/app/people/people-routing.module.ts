import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfPeopleComponent } from './containers/list-of-people/list-of-people.component';

const routes: Routes = [
  { path: '', component: ListOfPeopleComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}

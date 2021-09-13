import { Component, OnInit } from '@angular/core';
import { Categorie, SwapiService } from 'src/app/core/swapi.service';
import { ResponseApi } from '../../models/IPeople';

@Component({
  selector: 'app-list-of-people',
  templateUrl: './list-of-people.component.html',
  styleUrls: ['./list-of-people.component.scss'],
})
export class ListOfPeopleComponent implements OnInit {
  private categorie = Categorie;
  people!: ResponseApi;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService
      .getInformationOfCategorie(Categorie.PEOPLE)
      .subscribe((response: ResponseApi) => {
        console.log(response);
        this.people = response;
      });
  }
}

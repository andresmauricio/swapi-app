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
  peoples!: ResponseApi;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService
      .getInformationOfCategorie(Categorie.PEOPLE)
      .subscribe((response: ResponseApi) => {
        console.log(response);
        this.peoples = response;
      });
  }

  changePage(value: string) {
    if (value === 'PREV' && this.peoples.previous) {
      this.getpageContent(this.peoples.previous);
    }

    if (value === 'NEXT' && this.peoples.next) {
      const api = this.peoples.next;
      this.getpageContent(this.peoples.next);
    }
  }

  getpageContent(api: string) {
    this.swapiService
      .getInformationOfPage(api)
      .subscribe((response: ResponseApi) => {
        console.log(response);
        this.peoples = response;
      });
  }
}

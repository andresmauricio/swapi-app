import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum Categorie {
  FILMS = 'films',
  PEOPLE = 'people',
  PLANETS = 'planets',
  SPECIES = 'species',
  STARSSHIPS = 'starships',
  VEHICLES = 'vehicles',
}

@Injectable({ providedIn: 'root' })
export class SwapiService {
  private readonly BASE_API: string;

  constructor(private http: HttpClient) {
    this.BASE_API = environment.api;
  }

  getRoot(): Observable<any> {
    return this.http.get(this.BASE_API);
  }

  getInformationOfCategorie(categorie: Categorie): Observable<any> {
    return this.http.get(`${this.BASE_API}${categorie}`);
  }

  getInformationOfPage(api: string): Observable<any> {
    return this.http.get(api);
  }
}

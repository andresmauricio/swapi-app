import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/core/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public list: any;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.swapiService.getRoot().subscribe((response) => {
      const list = [];
      for (const key in response) {
        list.push({ name: key, api: response[key] });
      }
      this.list = [...list];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SwapiService } from './core/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'swapi-app';
  list: any = []
  constructor(private swapiService: SwapiService) {

  }
  ngOnInit(): void {
    this.swapiService.getRoot().subscribe((response) => {
      const list = [];
      for(const key in response) {
        list.push({name: key, api: response[key]})        
      }
      this.list = [...list];
    })
  }
}

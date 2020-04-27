import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums();
    this.dataService.getMembers();
    this.dataService.getConcertTours();
    this.dataService.getlabels();
  }
}

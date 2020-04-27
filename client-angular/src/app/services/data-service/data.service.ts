import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getAlbums(): void {
    this.httpClient.get("http://localhost:3000/albums")
      .subscribe(
        res => { console.log(res) },
        error => { console.log(error) }
      )
  }

  public getMembers(): void {
    this.httpClient.get("http://localhost:3000/members")
      .subscribe(
        res => { console.log(res) },
        error => { console.log(error) }
      )
  }

  public getConcertTours(): void {
    this.httpClient.get("http://localhost:3000/concerttours")
      .subscribe(
        res => { console.log(res) },
        error => { console.log(error) }
      )
  }

  public getlabels(): void {
    this.httpClient.get("http://localhost:3000/labels")
      .subscribe(
        res => { console.log(res) },
        error => { console.log(error) }
      )
  }
}

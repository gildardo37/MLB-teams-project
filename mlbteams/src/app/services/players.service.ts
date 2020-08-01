import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private keyNumber= '?key=85c1f799c4b34a71a1e853ab06d973a9';
  
  //posts api url
  private apiUrl = environment.apiUrl + 'Players' + this.keyNumber;

  constructor(private httpClient : HttpClient) { }

  //get all players 
  getPlayers(){
    return this.httpClient.get(this.apiUrl).toPromise();
  }
}

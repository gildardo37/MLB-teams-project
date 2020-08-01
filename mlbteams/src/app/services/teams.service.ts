import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private keyNumber= '?key=85c1f799c4b34a71a1e853ab06d973a9';
  //posts api url
  private apiUrl = environment.apiUrl + 'teams' + this.keyNumber;

  constructor(private httpClient : HttpClient) { }

  //get all teams
  getTeams(){
    return this.httpClient.get(this.apiUrl).toPromise();
  }

  //get team players
  getTeamPlayers(Key) {
    return this.httpClient.get(environment.apiUrl + 'players/' + Key +this.keyNumber).toPromise();
  }
}

import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teamplayers',
  templateUrl: './teamplayers.component.html',
  styleUrls: ['./teamplayers.component.css']
})
export class TeamplayersComponent implements OnInit {

  
  //lists of teams
  public teamplayers;

  key;

  constructor(
    private teamsService: TeamsService,
    private activatedRoute: ActivatedRoute
    ) {
      this.activatedRoute.params.subscribe((params) => { this.key= params.key; });
      this.getTeamPlayers();
    }

  ngOnInit(): void {
  }

  getTeamPlayers() {
    this.teamsService.getTeamPlayers(this.key)
    .then(response => { 
      this.teamplayers = response; 
      console.log(this.teamplayers);
      console.log(this.key);
    })
    .catch(error => { 
      console.error(error); 
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  //lists of teams
  public teams;

  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTeams();
  }

  //get all teams
  getTeams() {
    console.log('Getting all the teams');
    this.teamsService.getTeams()
      .then((response) => { console.log(response); this.teams = response; })
      .catch((error) => { console.log(error); })
  }

  //redirect to team players
  redirectTeamPlayers(Key) {
    console.log('Redirecting to team players...');
    this.router.navigate([Key], {relativeTo: this.activatedRoute});
    console.log(Key);

  }
}

import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  //list of players
  public players;

  constructor( 
    private playersService: PlayersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.getPlayers();
  }

  //get all players
  getPlayers() {
    console.log('Getting all the players');
    this.playersService.getPlayers()
      .then((response) => { console.log(response); this.players = response; })
      .catch((error) => { console.log(error); })
  }

}

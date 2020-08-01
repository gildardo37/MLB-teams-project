import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TeamplayersComponent } from './teamplayers/teamplayers.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'teams', component:TeamsComponent},
  {path: 'teams/:key', component:TeamplayersComponent},
  {path: 'players', component:PlayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

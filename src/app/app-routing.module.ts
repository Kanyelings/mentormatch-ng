import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainHomeComponent} from "./components/home/main-home/main-home.component";
import {ContactMainComponent} from "./components/contact/contact-main/contact-main.component";
import {MmMainComponent} from "./components/mentor-mentee/mm-main/mm-main.component";
import {MainUserComponent} from "./components/user/main-user/main-user.component";
import {MatchesComponent} from "./components/mentor-mentee/matches/matches.component";
import {UserComponent} from "./components/user/user/user.component";

const routes: Routes = [
  {
    path: '', component: MainHomeComponent
  },
  {
    path: 'users', component: MainUserComponent
  },
  {
    path: 'user/:id', component: UserComponent
  },
  {
    path: 'contact', component: ContactMainComponent
  },
  {
    path: 'apply', component: MmMainComponent
  },
  {
    path: 'matches', component: MatchesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

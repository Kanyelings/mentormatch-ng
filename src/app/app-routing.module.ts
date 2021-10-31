import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainHomeComponent} from "./components/home/main-home/main-home.component";
import {ContactMainComponent} from "./components/contact/contact-main/contact-main.component";
import {MmMainComponent} from "./components/mentor-mentee/mm-main/mm-main.component";
import {MainUserComponent} from "./components/user/main-user/main-user.component";

const routes: Routes = [
  {
    path: '', component: MainHomeComponent
  },
  {
    path: 'users', component: MainUserComponent
  },
  {
    path: 'contact', component: ContactMainComponent
  },
  {
    path: 'apply', component: MmMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainHomeComponent} from "./components/home/main-home/main-home.component";
import {ContactMainComponent} from "./components/contact/contact-main/contact-main.component";
import {MmMentorFormComponent} from "./components/mentor-mentee/mm-mentor-form/mm-mentor-form.component";
import {MmMenteeFormComponent} from "./components/mentor-mentee/mm-mentee-form/mm-mentee-form.component";
import {MmMainComponent} from "./components/mentor-mentee/mm-main/mm-main.component";

const routes: Routes = [
  {
    path: '', component: MainHomeComponent
  },
  {
    path: 'contact', component: ContactMainComponent
  },
  {
    path: 'mm', component: MmMainComponent
  },
  {
    path: 'mentor-form', component: MmMentorFormComponent
  },
  {
    path: 'mentee-form', component: MmMenteeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

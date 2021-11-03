import { Component, OnInit } from '@angular/core';
import {Developer, DEVELOPERS} from "../../../models/entity/developer";

@Component({
  selector: 'app-home-mentors',
  templateUrl: './home-mentors.component.html',
  styleUrls: ['./home-mentors.component.scss']
})
export class HomeMentorsComponent implements OnInit {

  mainMentors: {name: string; info: Developer}[];
  kanyelingMentors: {name: string; info: Developer}[];

  constructor() {
    this.mainMentors = DEVELOPERS.slice(0,2);
    this.kanyelingMentors = DEVELOPERS.slice(2);
  }

  ngOnInit(): void {
  }

}

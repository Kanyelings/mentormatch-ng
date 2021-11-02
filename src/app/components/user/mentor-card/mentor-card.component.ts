import {Component, Input, OnInit} from '@angular/core';
import {Developer, DEVELOPERS} from "../../../models/entity/developer";

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.scss']
})
export class MentorCardComponent implements OnInit {
  @Input() mentor: Developer;
  constructor() {
    this.mentor = DEVELOPERS[0].info;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {MmService} from "../../../services/mm.service";
import {Mentee} from "../../../models/entity/mentee";
import {Mentor} from "../../../models/entity/mentor";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {

  mentees: Mentee[] = [];
  mentors: Mentor[] = [];
  constructor(private mmService: MmService) { }

  ngOnInit(): void {
    this.loadMMs();
  }

  loadMMs(): void {
    this.mmService.getAllMs("mentor").subscribe(async (res: Response) => {
      this.mentors = await res.json();
    });
    this.mmService.getAllMs("mentee").subscribe(async (res: Response) => {
      this.mentees = await res.json();
    });
  }

}

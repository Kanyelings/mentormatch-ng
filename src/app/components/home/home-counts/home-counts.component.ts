import { Component, OnInit } from '@angular/core';
import {MmService} from "../../../services/mm.service";
import {Mentor} from "../../../models/entity/mentor";
import {Mentee} from "../../../models/entity/mentee";
import {Match} from "../../../models/entity/match";

@Component({
  selector: 'app-home-counts',
  templateUrl: './home-counts.component.html',
  styleUrls: ['./home-counts.component.scss']
})
export class HomeCountsComponent implements OnInit {

  mentorCount: number = 0;
  menteeCount: number = 0;
  matchCount: number = 0;
  counts: Counts;

  constructor(private mmService: MmService) {
    this.counts = {mentors: "", mentees: "", total: "", matches: ""};
  }

  ngOnInit(): void {
    this.mmService.getAllMs("mentor").subscribe((mentors: Mentor[]) => {
      this.mentorCount = mentors.length;
    });
    this.mmService.getAllMs("mentee").subscribe((mentees: Mentee[]) => {
      this.menteeCount = mentees.length;
    });
    this.mmService.getAllMatches().subscribe((matches: Match[]) => {
      this.matchCount = matches.length;
    });

    this.counts = {
      mentors: this.mentorCount.toString(),
      mentees: this.menteeCount.toString(),
      total: (this.mentorCount + this.menteeCount).toString(),
      matches: this.matchCount.toString() // TODO update this to persist the front with valid data
    }
  }

}

interface Counts {
  mentors: string;
  mentees: string;
  total: string;
  matches: string;
}

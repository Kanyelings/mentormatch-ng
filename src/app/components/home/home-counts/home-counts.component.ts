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
  counts: Counts;

  constructor(private mmService: MmService) {
    this.counts = {
      mentors: 0,
      mentees: 0,
      total: 0,
      matches: 0
    };
  }

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts(): void {

    this.mmService.getAllMs("mentor").subscribe((mentors: Mentor[]) => {
      this.counts.mentors = mentors.length;
    });
    this.mmService.getAllMs("mentee").subscribe((mentees: Mentee[]) => {
      this.counts.mentees = mentees.length;
      this.counts.total = this.counts.mentees + this.counts.mentors;
    });
    this.mmService.getAllMatches().subscribe((matches: Match[]) => {
      this.counts.matches = matches.length;
      console.log(this.counts)
    });

    this.counts.total = this.counts.mentees + this.counts.mentors;

  }

}

export interface Counts {
  mentors: number;
  mentees: number;
  total: number;
  matches: number;
}

import { Component, OnInit } from '@angular/core';
import {MmService} from "../../../services/mm.service";
import {Mentee} from "../../../models/entity/mentee";
import {Mentor} from "../../../models/entity/mentor";
import {MENTEE, MENTOR} from "../../../models/constants/endpoints";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {

  mentorVal: string = MENTOR;
  menteeVal: string = MENTEE;

  mentees: Mentee[] = [];
  mentors: Mentor[] = [];
  mentorsDatasource: MatTableDataSource<Mentor> = new MatTableDataSource();
  menteesDatasource: MatTableDataSource<Mentee> = new MatTableDataSource();
  constructor(private mmService: MmService) { }

  ngOnInit(): void {
    this.loadMMs();
  }

  loadMMs(): void {
    this.mmService.getAllMs("mentor").subscribe((data: Mentor[]) => {
      console.log(data)
      this.mentors = data;
    });
    this.mmService.getAllMs("mentee").subscribe((data: Mentee[]) => {
      console.log(data)
      this.mentees = data;
    });
    this.mentorsDatasource = new MatTableDataSource<Mentor>(this.mentors);
    this.menteesDatasource = new MatTableDataSource<Mentee>(this.mentees)
  }

  displayMentors(): boolean {
    return this.mentors.length > 0;
  }

  displayMentees(): boolean {
    return this.mentees.length > 0;
  }

  getName(mentor: Mentor | Mentee) : String {
    return mentor.first_name.concat(" ").concat(mentor.second_name);
  }
}

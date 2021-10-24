import { Component, OnInit } from '@angular/core';
import {Role} from "../../../models/entity/role";
import {Department} from "../../../models/entity/department";

@Component({
  selector: 'app-mm-form',
  templateUrl: './mm-form.component.html',
  styleUrls: ['./mm-form.component.scss']
})
export class MmFormComponent implements OnInit {

  roles: Role[];
  departments: Department[];
  constructor() {
    this.departments = [
      {name: "Computer", value: "COME"},
      {name: "Electrical and Electronic", value: "EEEE"},
      {name: "Mechanical and Industrial", value: "MECE"},
      {name: "Civil and Architecture", value: "CVLE"},
      {name: "Petroleum", value: "PETE"},
      {name: "Mining and Mineral", value: "MINE"},
      {name: "Chemical and Biomedical", value: "BMEE"},
      {name: "Chemical and Biological", value: "CBE"},
      {name: "Biotechnol", value: "BIOTECH"},
    ];
    this.roles = [
      {name: "Mentor", value: "mentor"},
      {name: "Mentee", value: "mentee"},
    ];
  }

  ngOnInit(): void {
  }

}

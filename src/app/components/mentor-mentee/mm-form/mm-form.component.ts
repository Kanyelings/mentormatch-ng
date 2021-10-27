import { Component, OnInit } from '@angular/core';
import {Role} from "../../../models/entity/role";
import {Department} from "../../../models/entity/department";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MENTOR_MATCH_API} from "../../../models/Constants";

@Component({
  selector: 'app-mm-form',
  templateUrl: './mm-form.component.html',
  styleUrls: ['./mm-form.component.scss']
})
export class MmFormComponent implements OnInit {

  data: Object | undefined;
  private loading: boolean;

  roles: Role[];
  departments: Department[];
  mmForm: FormGroup;
  constructor(private http: HttpClient) {
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
    this.mmForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      waNumber: new FormControl('', [Validators.required, Validators.min(9), Validators.max(15)]),
      gender: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.http.post(
      MENTOR_MATCH_API,
      JSON.stringify({
        body: 'body here'
      })
    ).subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}

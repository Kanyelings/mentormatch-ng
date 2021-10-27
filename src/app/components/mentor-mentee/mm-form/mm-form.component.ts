import { Component, OnInit } from '@angular/core';
import {Role} from "../../../models/entity/role";
import {Department} from "../../../models/entity/department";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CMR_CODE, MENTOR_MATCH_API, WA_PREFIX} from "../../../models/Constants";
import {MenteeRequest, MentorRequest} from "../../../models/json/requests";

@Component({
  selector: 'app-mm-form',
  templateUrl: './mm-form.component.html',
  styleUrls: ['./mm-form.component.scss']
})
export class MmFormComponent implements OnInit {

  data: Object | undefined;

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
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]),
      gender: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    let requestBody = this.prepareRequest(this.mmForm);
    console.log("---------Request Body---------")
    console.log(requestBody);
    console.log("---------Request Body---------")

    this.http.post<any>(
      MENTOR_MATCH_API,
      JSON.stringify(requestBody)
    ).subscribe((response: Response) => {
      this.data = response.json();
    });
    console.log("---------Response Body---------")
    console.log(this.data);
    console.log("---------Response Body---------")
  }

  private prepareRequest(form: FormGroup): MentorRequest | MenteeRequest {
    let role: string = form.get("role")?.value;
    let menteeRequest: MenteeRequest;
    let mentorRequest: MentorRequest;

    let phoneNumber: string = form.get("phoneNumber")?.value;
    let waNumber = this.fixWaNumber(phoneNumber);

    mentorRequest = {
      first_name: form.get("firstName")?.value,
      second_name: form.get("lastName")?.value,
      email: form.get("email")?.value,
      gender: form.get("gender")?.value,
      phone_number: phoneNumber,
      wa_number: waNumber,
      department: form.get("department")?.value,
    }

    if (role == "mentee") {
      menteeRequest = {
        ...mentorRequest,
        previous_school: form.get("previousSchool")?.value
      };
      return menteeRequest;
    }

    return mentorRequest;
  }

  private fixPhoneNumber(phoneNumber: string): string {
    if (phoneNumber.length == 9) {
      return CMR_CODE.concat(phoneNumber);
    } else if(
      (phoneNumber.length == 12 && phoneNumber.substring(0, 3) === CMR_CODE.substring(1) ||
      phoneNumber.length == 13 && phoneNumber.substring(0, 4) === CMR_CODE)) {
      return phoneNumber;
    } else {
      return CMR_CODE.concat("672270627");
    }
  }

  private fixWaNumber(phoneNumber: string): string {
    if (phoneNumber.length < 12) {
      phoneNumber = this.fixPhoneNumber(phoneNumber);
    }
    return WA_PREFIX.concat(phoneNumber);
  }
}

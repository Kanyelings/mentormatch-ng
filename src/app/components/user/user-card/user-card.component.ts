import {Component, Input, OnInit} from '@angular/core';
import {Mentee} from "../../../models/entity/mentee";
import {Mentor} from "../../../models/entity/mentor";
import {WA_PREFIX} from "../../../models/constants/endpoints";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: Mentee | Mentor;

  constructor() {
    this.user = {
      department: "COME",
      email: "elroykanye@gmail.com",
      first_name: "Elroy",
      gender: "M",
      image_path: "",
      level: "400",
      phone_number: "237672270627",
      previous_school: "GBHS Ndop",
      second_name: "Kanye",
      wa_number: WA_PREFIX.concat("237672270627"),
      about: "I am crazy",
    }
  }

  getUserName() : string {
    return this.user.first_name.concat(" ").concat(this.user.second_name);
  }

  ngOnInit(): void {
  }

}

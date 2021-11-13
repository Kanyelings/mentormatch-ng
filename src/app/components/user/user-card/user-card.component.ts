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
  @Input() role: string;

  constructor() {
    this.user = {
      username: "elroykanye",
      department: "COME",
      email: "elroykanye@gmail.com",
      first_name: "Elroy",
      gender: "M",
      image: "",
      level: "400",
      phone_number: "237672270627",
      previous_school: "GBHS Ndop",
      second_name: "Kanye",
      wa_number: WA_PREFIX.concat("237672270627"),
      about: "I am crazy",
    }
    this.role = "mentee";
  }

  ngOnInit(): void {
  }

  getUserName() : string {
    return this.user.first_name.concat(" ").concat(this.user.second_name);
  }

  getUserImage(): string {
    if (this.user.image == null || this.user.image == '') {
      if (this.user.gender == "M" || this.user.gender == "O") {
        return  "assets/img/avatar/avatar-boy.png";
      } else return "assets/img/avatar/avatar-girl.png";
    } else {
      return this.user.image;
    }
  }

}

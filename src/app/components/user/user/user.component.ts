import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MmService} from "../../../services/mm.service";
import {Mentee} from "../../../models/entity/mentee";
import {Mentor} from "../../../models/entity/mentor";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: string = "-1";
  role: string = "";
  user: Mentor | Mentee | Object = {};

  constructor(private activatedRoute: ActivatedRoute, private mmService: MmService) {}

  ngOnInit(): void {
    this.loadParams();
    this.loadUser(this.id, this.role);
  }

  loadParams(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let roleParam: string | null = "";
    this.activatedRoute.queryParams
      .subscribe(params => {
        roleParam = params.role;
        console.log(this.role);
      });

    this.id = !(idParam == null) ? idParam : "-1";
    this.role = !(roleParam == null) ? roleParam : "";
  }

  loadUser(id: string, role: string): void  {
    this.mmService.getUser(id, role).subscribe((userRes: Mentee) => {
      this.user = userRes;
    });
  }

}

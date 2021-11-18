import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: string | null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = "-1";
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
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

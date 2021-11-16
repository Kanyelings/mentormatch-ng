import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MmService} from "../../../services/mm.service";
import {Match} from "../../../models/entity/match";
import {MENTEE, MENTOR} from "../../../models/constants/endpoints";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  mentorVal: string = MENTOR;
  menteeVal: string = MENTEE;
  data: Object[] = [];
  matches: Match[] = [];

  constructor(private http: HttpClient, private mmService: MmService) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.mmService.getAllMatches().subscribe((matchesRes: Match[])=> {
      this.matches = matchesRes;
    });
  }

  displayMatches(): boolean {
    return this.matches.length > 0;
  }

}

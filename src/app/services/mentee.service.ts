import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Mentee} from "../models/entity/mentee";
import {Observable} from "rxjs";
import {MATCH_ENDPOINT, MENTEE_ENDPOINT, MENTEE_ENDPOINT_ALL} from "../models/constants/endpoints";
import {catchError, retry} from "rxjs/operators";
import {MmService} from "./mm.service";

@Injectable({
  providedIn: 'root'
})
export class MenteeService extends MmService {

  constructor(http: HttpClient) {
    super(http);
  }


  public getMentee(menteeId: number): Observable<Mentee> {
    return this.http.get<Mentee>(MENTEE_ENDPOINT + `/${menteeId}`)
      .pipe(
        retry(1),
        catchError(this.processError)
      );
  }

  public getMentees(mentorId: number): Observable<Mentee> {
    // TODO fix this endpoint
    return this.http.get<Mentee>(MATCH_ENDPOINT + `${mentorId}`)
      .pipe(
        retry(1),
        catchError(this.processError)
      );
  }

  public getAllMentees(): Observable<Mentee[]> {
    return this.http.get<Mentee[]>(MENTEE_ENDPOINT_ALL)
      .pipe(
        retry(1),
        catchError(this.processError)
      );
  }


}

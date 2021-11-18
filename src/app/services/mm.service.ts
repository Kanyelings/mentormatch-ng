import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Mentee} from "../models/entity/mentee";
import {Mentor} from "../models/entity/mentor";
import {Observable, throwError} from "rxjs";
import {
  MATCH_ENDPOINT_ALL,
  MENTEE, MENTEE_ENDPOINT,
  MENTEE_ENDPOINT_ADD,
  MENTEE_ENDPOINT_ALL,
  MENTOR, MENTOR_ENDPOINT,
  MENTOR_ENDPOINT_ADD,
  MENTOR_ENDPOINT_ALL,
  MENTOR_MATCH_API
} from "../models/constants/endpoints";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MmService {

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  public addMm(mmBody: Mentee | Mentor, role: string): Observable<any> {
    let endpoint: string = role == "mentor" ? MENTOR_ENDPOINT_ADD : MENTEE_ENDPOINT_ADD;
    return this.http.post<any>(
      endpoint,
      JSON.stringify(mmBody),
      this.httpHeader
    ).pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  public getAllMs(role: string): Observable<any> {
    let endpoint: string;
    switch (role) {
      case MENTOR: endpoint = MENTOR_ENDPOINT_ALL; break;
      case MENTEE: endpoint = MENTEE_ENDPOINT_ALL; break;
      default: endpoint = MENTOR_MATCH_API;
    }

    return this.http.get<any>(
      endpoint,
      this.httpHeader
    ).pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  public getAllMatches(): Observable<any> {
    return this.http.get<any>(
      MATCH_ENDPOINT_ALL,
      this.httpHeader
    ).pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  public getUser(id: string, role: string): Observable<any> {
    let endpoint: string;
    switch (role) {
      case "mentor": endpoint = MENTOR_ENDPOINT; break;
      case "mentee": endpoint = MENTEE_ENDPOINT; break;
      default: endpoint = MENTOR_MATCH_API;
    }
    return this.http.get<any>(
      endpoint.concat(`/${id}`),
      this.httpHeader
    ).pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  processError(err: { error: { message: string; }; status: any; message: any; }): Observable<never> {
    let message: string;
    if(err.error instanceof ErrorEvent) {
      message = err.error.message
    } else {
      message = `Error Code: ${err.status}\n Message: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MmService} from "./mm.service";

@Injectable({
  providedIn: 'root'
})
export class MentorService extends MmService {

  constructor(http: HttpClient) {
    super(http);
  }
}

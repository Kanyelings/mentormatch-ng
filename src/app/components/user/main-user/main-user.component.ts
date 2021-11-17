import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MmService} from "../../../services/mm.service";
import {Mentee} from "../../../models/entity/mentee";
import {Mentor} from "../../../models/entity/mentor";
import {MENTEE, MENTOR} from "../../../models/constants/endpoints";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements AfterViewInit {

  mentorVal: string = MENTOR;
  menteeVal: string = MENTEE;

  mentees: Mentee[] = [];
  mentors: Mentor[] = [];

  mentorsDatasource: MatTableDataSource<Mentor>;
  menteesDatasource: MatTableDataSource<Mentee> = new MatTableDataSource<Mentee>([]);
  displayedColumns: string[] = ["id", "name", "dept", "level"];

  constructor(private mmService: MmService, private _liveAnnouncer: LiveAnnouncer) {
    this.loadMMs();
    this.mentorsDatasource = new MatTableDataSource<Mentor>(this.mentors);
    this.menteesDatasource = new MatTableDataSource<Mentee>(this.mentees);
  }

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.mentorsDatasource.sort = this.sort;
    this.menteesDatasource.sort = this.sort;
  }

  loadMMs(): void {
    this.mmService.getAllMs("mentor").subscribe((data: Mentor[]) => {
      console.log(data)
      this.mentors = data;
    });
    this.mmService.getAllMs("mentee").subscribe((data: Mentee[]) => {
      console.log(data)
      this.mentees = data;
    });
    this.mentorsDatasource = new MatTableDataSource<Mentor>(this.mentors);
    this.menteesDatasource = new MatTableDataSource<Mentee>(this.mentees);
  }

  displayMentors(): boolean {
    return this.mentors.length > 0;
  }

  displayMentees(): boolean {
    return this.mentees.length > 0;
  }

  getName(mentor: Mentor | Mentee) : string {
    return mentor.first_name.concat(" ").concat(mentor.second_name);
  }

  getLevel(level: string) : string {
    return level == null ? "N/A": level;
  }

  getDepartment(user: Mentor | Mentee): string {
    return user.department;
  }

  getImage(user: Mentor | Mentee): string {
    if (user.image == null || user.image == '') {
      if (user.gender == "M" || user.gender == "O") {
        return  "assets/img/avatar/avatar-boy.png";
      } else return "assets/img/avatar/avatar-girl.png";
    } else {
      return user.image;
    }
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event, role: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    let dataSource: MatTableDataSource<any>;
    if(role == "mentor") dataSource = this.mentorsDatasource;
    else dataSource = this.menteesDatasource;
    dataSource.filter = filterValue.trim().toUpperCase();
  }
}

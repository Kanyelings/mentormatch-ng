import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  showMobileNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addMobileNav(navBar: HTMLElement, navIcon: HTMLElement) {
    this.showMobileNav = !this.showMobileNav;
    if( this.showMobileNav) {
      navBar.classList.add("navbar-mobile");
      navIcon.classList.remove("bi-list");
      navIcon.classList.add("bi-x");
    } else {
      navBar.classList.remove("navbar-mobile", "bi-x");
      navIcon.classList.add("bi-list");
    }
  }
}

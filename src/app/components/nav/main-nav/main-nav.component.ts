import { Component, OnInit } from '@angular/core';
import {NavItem} from "../../../models/nav-item";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  showMobileNav: boolean = false;
  navItems: NavItem[] = [];

  constructor() {
    this.navItems = [
      {id: 0, name: 'Home', routerLink: '/', active: true},
      {id: 2, name: 'Apply', routerLink: '/apply', active: true},
      {id: 3, name: 'Contact', routerLink: '/contact', active: true},
    ]
  }

  ngOnInit(): void {
  }

  private addMobileNav(navBar: HTMLElement, navIcon: HTMLElement) {
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

  reassignActive(navItemId: number) {
    this.navItems.forEach(
      function (navItem: NavItem) {
        navItem.active = navItem.id == navItemId;
      }
    )
  }
}

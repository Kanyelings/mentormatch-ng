import { Component, OnInit } from '@angular/core';
import {NavItem} from "../../../models/nav-item";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  showModal: boolean = false;
  navItems: NavItem[] = [];

  constructor() {
    this.navItems = [
      {id: 0, name: 'Home', routerLink: '/', active: true},
      {id: 2, name: 'Apply', routerLink: '/apply', active: false},
      {id: 3, name: 'Contact', routerLink: '/contact', active: false},
    ]

    window.onclick = function (event) {
      let modalNav = document.getElementById("modalNav")
      if (!(modalNav === null) && event.target == modalNav) {
        modalNav.style.display = "none";
      }
    }
  }

  ngOnInit(): void {
  }

  showModalNav(modalNav: HTMLDivElement, show: boolean) {
    this.showModal = show;
    if (this.showModal) {
      modalNav.style.display = "block";
    } else {
      modalNav.style.display = "none";
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

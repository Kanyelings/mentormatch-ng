import {Component, HostListener, OnInit} from '@angular/core';
import {NavItem} from "../../../models/nav-item";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  navItems: NavItem[] = [];
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    let modalNav = document.getElementById("mobileNav")
    if (!(modalNav === null) && event.target == modalNav) {
      modalNav.style.display = "none";
    }
  }

  constructor() {
    this.navItems = [
      {id: 0, name: 'Home', routerLink: '/', active: true},
      {id: 2, name: 'Apply', routerLink: '/apply', active: false},
      {id: 3, name: 'Contact', routerLink: '/contact', active: false},
    ]

  }

  ngOnInit(): void {
  }

  toggleModal() {
    let modal = document.querySelector(".modal");
    if (modal != null) {
      modal.classList.toggle("show-modal")
      modal.classList.toggle("mm-show")
      console.log("toggling nav")
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

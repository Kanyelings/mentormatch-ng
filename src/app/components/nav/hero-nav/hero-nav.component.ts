import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-nav',
  templateUrl: './hero-nav.component.html',
  styleUrls: ['./hero-nav.component.scss']
})
export class HeroNavComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() buttonText: string;
  @Input() buttonLink: string;

  constructor() {
    this.title = "Learning Today";
    this.description = "Making the world a better place via mentorship.";
    this.buttonText = "Go Home";
    this.buttonLink = "#";
  }

  ngOnInit(): void {
  }

}

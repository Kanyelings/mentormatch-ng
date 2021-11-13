import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/nav/main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHomeComponent } from './components/home/main-home/main-home.component';
import { HomeHeroComponent } from './components/home/home-hero/home-hero.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { HomeCountsComponent } from './components/home/home-counts/home-counts.component';
import { HomeWhyComponent } from './components/home/home-why/home-why.component';
import { HomeMentorsComponent } from './components/home/home-mentors/home-mentors.component';
import { FooterNavComponent } from './components/nav/footer-nav/footer-nav.component';
import { ToTopNavComponent } from './components/nav/to-top-nav/to-top-nav.component';
import { ContactMainComponent } from './components/contact/contact-main/contact-main.component';
import { ContactMapComponent } from './components/contact/contact-map/contact-map.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { MmMainComponent } from './components/mentor-mentee/mm-main/mm-main.component';
import {MatIconModule} from "@angular/material/icon";
import { HeroNavComponent } from './components/nav/hero-nav/hero-nav.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MmFormComponent } from './components/mentor-mentee/mm-form/mm-form.component';
import {HttpClientModule} from "@angular/common/http";
import { MainUserComponent } from './components/user/main-user/main-user.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import { UserCardComponent } from './components/user/user-card/user-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import { MentorCardComponent } from './components/user/mentor-card/mentor-card.component';
import {MatLineModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainHomeComponent,
    HomeHeroComponent,
    HomeAboutComponent,
    HomeCountsComponent,
    HomeWhyComponent,
    HomeMentorsComponent,
    FooterNavComponent,
    ToTopNavComponent,
    ContactMainComponent,
    ContactMapComponent,
    ContactFormComponent,
    MmMainComponent,
    HeroNavComponent,
    MmFormComponent,
    MainUserComponent,
    UserCardComponent,
    MentorCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatLineModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

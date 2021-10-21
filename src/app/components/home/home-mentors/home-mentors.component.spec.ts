import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMentorsComponent } from './home-mentors.component';

describe('HomeMentorsComponent', () => {
  let component: HomeMentorsComponent;
  let fixture: ComponentFixture<HomeMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

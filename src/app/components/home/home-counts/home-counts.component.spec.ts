import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCountsComponent } from './home-counts.component';

describe('HomeCountsComponent', () => {
  let component: HomeCountsComponent;
  let fixture: ComponentFixture<HomeCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

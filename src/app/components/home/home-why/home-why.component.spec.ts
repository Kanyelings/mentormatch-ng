import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyComponent } from './home-why.component';

describe('HomeWhyComponent', () => {
  let component: HomeWhyComponent;
  let fixture: ComponentFixture<HomeWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

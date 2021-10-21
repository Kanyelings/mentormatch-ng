import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmMentorFormComponent } from './mm-mentor-form.component';

describe('MmMentorFormComponent', () => {
  let component: MmMentorFormComponent;
  let fixture: ComponentFixture<MmMentorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmMentorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmMentorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

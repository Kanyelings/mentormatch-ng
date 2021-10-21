import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmMenteeFormComponent } from './mm-mentee-form.component';

describe('MmMenteeFormComponent', () => {
  let component: MmMenteeFormComponent;
  let fixture: ComponentFixture<MmMenteeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmMenteeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmMenteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

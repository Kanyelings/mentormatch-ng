import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmFormComponent } from './mm-form.component';

describe('MmFormComponent', () => {
  let component: MmFormComponent;
  let fixture: ComponentFixture<MmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmMainComponent } from './mm-main.component';

describe('MmMainComponent', () => {
  let component: MmMainComponent;
  let fixture: ComponentFixture<MmMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

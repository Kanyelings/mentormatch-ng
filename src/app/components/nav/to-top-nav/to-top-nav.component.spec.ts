import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTopNavComponent } from './to-top-nav.component';

describe('ToTopNavComponent', () => {
  let component: ToTopNavComponent;
  let fixture: ComponentFixture<ToTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

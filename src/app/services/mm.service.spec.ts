import { TestBed } from '@angular/core/testing';

import { MmService } from './mm.service';

describe('MmService', () => {
  let service: MmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

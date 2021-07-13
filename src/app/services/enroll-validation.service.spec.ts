import { TestBed } from '@angular/core/testing';

import { EnrollValidationService } from './enroll-validation.service';

describe('EnrollValidationService', () => {
  let service: EnrollValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

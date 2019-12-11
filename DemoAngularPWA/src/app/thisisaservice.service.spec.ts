import { TestBed } from '@angular/core/testing';

import { ThisisaserviceService } from './thisisaservice.service';

describe('ThisisaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThisisaserviceService = TestBed.get(ThisisaserviceService);
    expect(service).toBeTruthy();
  });
});

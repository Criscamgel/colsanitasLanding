import { TestBed } from '@angular/core/testing';

import { ServicecalcService } from './servicecalc.service';

describe('ServicecalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicecalcService = TestBed.get(ServicecalcService);
    expect(service).toBeTruthy();
  });
});

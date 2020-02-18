import { TestBed } from '@angular/core/testing';

import { CalculoCuotaService } from './calculo-cuota.service';

describe('CalculoCuotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculoCuotaService = TestBed.get(CalculoCuotaService);
    expect(service).toBeTruthy();
  });
});

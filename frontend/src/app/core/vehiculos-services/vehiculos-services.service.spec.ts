import { TestBed } from '@angular/core/testing';

import { VehiculosServicesService } from './vehiculos-services.service';

describe('VehiculosServicesService', () => {
  let service: VehiculosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

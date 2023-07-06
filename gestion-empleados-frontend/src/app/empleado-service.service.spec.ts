import { TestBed } from '@angular/core/testing';

import { EmpleadoServiceService } from './empleado-service.service';

describe('EmpleadoServiceService', () => {
  let service: EmpleadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

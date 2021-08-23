import { TestBed } from '@angular/core/testing';

import { PlanmaintenanceService } from './planmaintenance.service';

describe('PlanmaintenanceService', () => {
  let service: PlanmaintenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanmaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

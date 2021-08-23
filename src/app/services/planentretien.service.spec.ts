import { TestBed } from '@angular/core/testing';

import { PlanentretienService } from './planentretien.service';

describe('PlanentretienService', () => {
  let service: PlanentretienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanentretienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

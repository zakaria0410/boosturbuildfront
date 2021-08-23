import { TestBed } from '@angular/core/testing';

import { InterventionmecaniqueService } from './interventionmecanique.service';

describe('InterventionmecaniqueService', () => {
  let service: InterventionmecaniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionmecaniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

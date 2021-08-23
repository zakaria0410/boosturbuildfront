import { TestBed } from '@angular/core/testing';

import { LignegrillekmService } from './lignegrillekm.service';

describe('LignegrillekmService', () => {
  let service: LignegrillekmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignegrillekmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

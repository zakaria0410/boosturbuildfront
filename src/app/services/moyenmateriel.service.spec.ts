import { TestBed } from '@angular/core/testing';

import { MoyenmaterielService } from './moyenmateriel.service';

describe('MoyenmaterielService', () => {
  let service: MoyenmaterielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoyenmaterielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

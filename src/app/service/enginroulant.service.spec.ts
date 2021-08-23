import { TestBed } from '@angular/core/testing';

import { EnginroulantService } from './enginroulant.service';

describe('EnginroulantService', () => {
  let service: EnginroulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnginroulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

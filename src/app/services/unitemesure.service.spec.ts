import { TestBed } from '@angular/core/testing';

import { UnitemesureService } from './unitemesure.service';

describe('UnitemesureService', () => {
  let service: UnitemesureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitemesureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

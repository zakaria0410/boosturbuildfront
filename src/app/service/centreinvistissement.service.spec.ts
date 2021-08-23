import { TestBed } from '@angular/core/testing';

import { CentreinvistissementService } from './centreinvistissement.service';

describe('CentreinvistissementService', () => {
  let service: CentreinvistissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreinvistissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

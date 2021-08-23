import { TestBed } from '@angular/core/testing';

import { CategorieenginnroulantService } from './categorieenginnroulant.service';

describe('CategorieenginnroulantService', () => {
  let service: CategorieenginnroulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieenginnroulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

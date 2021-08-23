import { TestBed } from '@angular/core/testing';

import { CategorieenginroulantService } from './categorieenginroulant.service';

describe('CategorieenginroulantService', () => {
  let service: CategorieenginroulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieenginroulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

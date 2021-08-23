import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreinvistissementComponent } from './centreinvistissement.component';

describe('CentreinvistissementComponent', () => {
  let component: CentreinvistissementComponent;
  let fixture: ComponentFixture<CentreinvistissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreinvistissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreinvistissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

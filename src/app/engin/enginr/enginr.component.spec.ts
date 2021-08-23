import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginrComponent } from './enginr.component';

describe('EnginrComponent', () => {
  let component: EnginrComponent;
  let fixture: ComponentFixture<EnginrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

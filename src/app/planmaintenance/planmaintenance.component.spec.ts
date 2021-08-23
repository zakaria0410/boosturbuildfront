import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmaintenanceComponent } from './planmaintenance.component';

describe('PlanmaintenanceComponent', () => {
  let component: PlanmaintenanceComponent;
  let fixture: ComponentFixture<PlanmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

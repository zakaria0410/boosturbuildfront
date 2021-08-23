import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametragemmComponent } from './parametragemm.component';

describe('ParametragemmComponent', () => {
  let component: ParametragemmComponent;
  let fixture: ComponentFixture<ParametragemmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametragemmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametragemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

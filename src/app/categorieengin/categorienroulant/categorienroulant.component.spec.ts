import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorienroulantComponent } from './categorienroulant.component';

describe('CategorienroulantComponent', () => {
  let component: CategorienroulantComponent;
  let fixture: ComponentFixture<CategorienroulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorienroulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorienroulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

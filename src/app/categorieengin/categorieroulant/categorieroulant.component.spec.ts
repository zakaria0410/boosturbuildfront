import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieroulantComponent } from './categorieroulant.component';

describe('CategorieroulantComponent', () => {
  let component: CategorieroulantComponent;
  let fixture: ComponentFixture<CategorieroulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieroulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieroulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginnrComponent } from './enginnr.component';

describe('EnginnrComponent', () => {
  let component: EnginnrComponent;
  let fixture: ComponentFixture<EnginnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginnrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

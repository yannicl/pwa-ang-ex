import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmButtonComponent } from './arm-button.component';

describe('ArmButtonComponent', () => {
  let component: ArmButtonComponent;
  let fixture: ComponentFixture<ArmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordEmployeeComponent } from './change-password-employee.component';

describe('ChangePasswordEmployeeComponent', () => {
  let component: ChangePasswordEmployeeComponent;
  let fixture: ComponentFixture<ChangePasswordEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

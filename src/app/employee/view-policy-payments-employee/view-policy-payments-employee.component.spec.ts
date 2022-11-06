import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyPaymentsEmployeeComponent } from './view-policy-payments-employee.component';

describe('ViewPolicyPaymentsEmployeeComponent', () => {
  let component: ViewPolicyPaymentsEmployeeComponent;
  let fixture: ComponentFixture<ViewPolicyPaymentsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyPaymentsEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPolicyPaymentsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

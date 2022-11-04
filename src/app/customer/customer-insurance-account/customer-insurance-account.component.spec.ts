import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInsuranceAccountComponent } from './customer-insurance-account.component';

describe('CustomerInsuranceAccountComponent', () => {
  let component: CustomerInsuranceAccountComponent;
  let fixture: ComponentFixture<CustomerInsuranceAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInsuranceAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInsuranceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

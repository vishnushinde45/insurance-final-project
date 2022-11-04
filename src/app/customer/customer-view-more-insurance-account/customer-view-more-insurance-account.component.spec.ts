import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewMoreInsuranceAccountComponent } from './customer-view-more-insurance-account.component';

describe('CustomerViewMoreInsuranceAccountComponent', () => {
  let component: CustomerViewMoreInsuranceAccountComponent;
  let fixture: ComponentFixture<CustomerViewMoreInsuranceAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewMoreInsuranceAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerViewMoreInsuranceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyPaymentsAdminComponent } from './view-policy-payments-admin.component';

describe('ViewPolicyPaymentsAdminComponent', () => {
  let component: ViewPolicyPaymentsAdminComponent;
  let fixture: ComponentFixture<ViewPolicyPaymentsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyPaymentsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPolicyPaymentsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

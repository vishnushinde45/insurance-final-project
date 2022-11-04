import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailtoCustomerComponent } from './send-mailto-customer.component';

describe('SendMailtoCustomerComponent', () => {
  let component: SendMailtoCustomerComponent;
  let fixture: ComponentFixture<SendMailtoCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMailtoCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMailtoCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

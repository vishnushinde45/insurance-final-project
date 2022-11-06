import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewPolicyPaymentsComponent } from './agent-view-policy-payments.component';

describe('AgentViewPolicyPaymentsComponent', () => {
  let component: AgentViewPolicyPaymentsComponent;
  let fixture: ComponentFixture<AgentViewPolicyPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewPolicyPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentViewPolicyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

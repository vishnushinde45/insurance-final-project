import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsurancePlansComponent } from './view-insurance-plans.component';

describe('ViewInsurancePlansComponent', () => {
  let component: ViewInsurancePlansComponent;
  let fixture: ComponentFixture<ViewInsurancePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsurancePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInsurancePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

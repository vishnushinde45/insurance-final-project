import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsuranceSchemesComponent } from './view-insurance-schemes.component';

describe('ViewInsuranceSchemesComponent', () => {
  let component: ViewInsuranceSchemesComponent;
  let fixture: ComponentFixture<ViewInsuranceSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsuranceSchemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInsuranceSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

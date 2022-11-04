import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInsurancePlansComponent } from './show-insurance-plans.component';

describe('ShowInsurancePlansComponent', () => {
  let component: ShowInsurancePlansComponent;
  let fixture: ComponentFixture<ShowInsurancePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInsurancePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInsurancePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

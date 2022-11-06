import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomersEmployeeComponent } from './view-customers-employee.component';

describe('ViewCustomersEmployeeComponent', () => {
  let component: ViewCustomersEmployeeComponent;
  let fixture: ComponentFixture<ViewCustomersEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomersEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomersEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

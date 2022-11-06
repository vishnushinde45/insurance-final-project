import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchemesEmployeeComponent } from './view-schemes-employee.component';

describe('ViewSchemesEmployeeComponent', () => {
  let component: ViewSchemesEmployeeComponent;
  let fixture: ComponentFixture<ViewSchemesEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSchemesEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSchemesEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

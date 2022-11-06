import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommisionEmployeeComponent } from './view-commision-employee.component';

describe('ViewCommisionEmployeeComponent', () => {
  let component: ViewCommisionEmployeeComponent;
  let fixture: ComponentFixture<ViewCommisionEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommisionEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommisionEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

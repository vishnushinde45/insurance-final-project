import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommisionWithdrawlsEmployeeComponent } from './view-commision-withdrawls-employee.component';

describe('ViewCommisionWithdrawlsEmployeeComponent', () => {
  let component: ViewCommisionWithdrawlsEmployeeComponent;
  let fixture: ComponentFixture<ViewCommisionWithdrawlsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommisionWithdrawlsEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommisionWithdrawlsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

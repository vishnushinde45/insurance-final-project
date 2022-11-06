import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommisionWithdrawlsAdminComponent } from './view-commision-withdrawls-admin.component';

describe('ViewCommisionWithdrawlsAdminComponent', () => {
  let component: ViewCommisionWithdrawlsAdminComponent;
  let fixture: ComponentFixture<ViewCommisionWithdrawlsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommisionWithdrawlsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommisionWithdrawlsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

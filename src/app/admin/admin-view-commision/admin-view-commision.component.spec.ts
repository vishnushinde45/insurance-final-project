import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCommisionComponent } from './admin-view-commision.component';

describe('AdminViewCommisionComponent', () => {
  let component: AdminViewCommisionComponent;
  let fixture: ComponentFixture<AdminViewCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewCommisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

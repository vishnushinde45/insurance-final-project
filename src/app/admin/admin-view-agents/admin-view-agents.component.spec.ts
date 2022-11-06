import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAgentsComponent } from './admin-view-agents.component';

describe('AdminViewAgentsComponent', () => {
  let component: AdminViewAgentsComponent;
  let fixture: ComponentFixture<AdminViewAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

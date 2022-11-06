import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewAgentsComponent } from './employee-view-agents.component';

describe('EmployeeViewAgentsComponent', () => {
  let component: EmployeeViewAgentsComponent;
  let fixture: ComponentFixture<EmployeeViewAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

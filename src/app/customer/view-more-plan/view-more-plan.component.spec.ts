import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMorePlanComponent } from './view-more-plan.component';

describe('ViewMorePlanComponent', () => {
  let component: ViewMorePlanComponent;
  let fixture: ComponentFixture<ViewMorePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMorePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMorePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

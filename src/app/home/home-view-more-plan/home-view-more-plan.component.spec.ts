import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewMorePlanComponent } from './home-view-more-plan.component';

describe('HomeViewMorePlanComponent', () => {
  let component: HomeViewMorePlanComponent;
  let fixture: ComponentFixture<HomeViewMorePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewMorePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViewMorePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxSettingComponent } from './add-tax-setting.component';

describe('AddTaxSettingComponent', () => {
  let component: AddTaxSettingComponent;
  let fixture: ComponentFixture<AddTaxSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaxSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaxSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEntitlementCheckComponent } from './work-entitlement-check.component';

describe('WorkEntitlementCheckComponent', () => {
  let component: WorkEntitlementCheckComponent;
  let fixture: ComponentFixture<WorkEntitlementCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkEntitlementCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkEntitlementCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyEntitlementCheckComponent } from './study-entitlement-check.component';

describe('StudyEntitlementCheckComponent', () => {
  let component: StudyEntitlementCheckComponent;
  let fixture: ComponentFixture<StudyEntitlementCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyEntitlementCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyEntitlementCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

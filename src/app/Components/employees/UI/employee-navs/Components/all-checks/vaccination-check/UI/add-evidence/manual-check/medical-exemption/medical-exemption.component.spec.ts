import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExemptionComponent } from './medical-exemption.component';

describe('MedicalExemptionComponent', () => {
  let component: MedicalExemptionComponent;
  let fixture: ComponentFixture<MedicalExemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalExemptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

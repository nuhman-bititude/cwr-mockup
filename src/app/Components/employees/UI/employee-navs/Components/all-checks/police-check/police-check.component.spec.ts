import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceCheckComponent } from './police-check.component';

describe('PoliceCheckComponent', () => {
  let component: PoliceCheckComponent;
  let fixture: ComponentFixture<PoliceCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

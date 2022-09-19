import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithChildrenCheckComponent } from './working-with-children-check.component';

describe('WorkingWithChildrenCheckComponent', () => {
  let component: WorkingWithChildrenCheckComponent;
  let fixture: ComponentFixture<WorkingWithChildrenCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithChildrenCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingWithChildrenCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

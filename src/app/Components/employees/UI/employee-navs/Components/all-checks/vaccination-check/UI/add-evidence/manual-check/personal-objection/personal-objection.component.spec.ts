import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalObjectionComponent } from './personal-objection.component';

describe('PersonalObjectionComponent', () => {
  let component: PersonalObjectionComponent;
  let fixture: ComponentFixture<PersonalObjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalObjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalObjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

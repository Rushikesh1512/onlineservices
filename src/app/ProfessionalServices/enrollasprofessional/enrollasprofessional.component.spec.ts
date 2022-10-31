import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollasprofessionalComponent } from './enrollasprofessional.component';

describe('EnrollasprofessionalComponent', () => {
  let component: EnrollasprofessionalComponent;
  let fixture: ComponentFixture<EnrollasprofessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollasprofessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollasprofessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

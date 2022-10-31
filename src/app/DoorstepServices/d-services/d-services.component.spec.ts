import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DServicesComponent } from './d-services.component';

describe('DServicesComponent', () => {
  let component: DServicesComponent;
  let fixture: ComponentFixture<DServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

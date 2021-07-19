import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinebypincodeComponent } from './vaccinebypincode.component';

describe('VaccinebypincodeComponent', () => {
  let component: VaccinebypincodeComponent;
  let fixture: ComponentFixture<VaccinebypincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinebypincodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinebypincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

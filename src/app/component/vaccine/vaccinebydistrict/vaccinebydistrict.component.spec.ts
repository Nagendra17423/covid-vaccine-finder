import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinebydistrictComponent } from './vaccinebydistrict.component';

describe('VaccinebydistrictComponent', () => {
  let component: VaccinebydistrictComponent;
  let fixture: ComponentFixture<VaccinebydistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinebydistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinebydistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

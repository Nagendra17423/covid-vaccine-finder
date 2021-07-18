import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardDashBoardComponent } from './data-card-dash-board.component';

describe('DataCardDashBoardComponent', () => {
  let component: DataCardDashBoardComponent;
  let fixture: ComponentFixture<DataCardDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCardDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugStockingComponent } from './drug-stocking.component';

describe('DrugStockingComponent', () => {
  let component: DrugStockingComponent;
  let fixture: ComponentFixture<DrugStockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugStockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugStockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

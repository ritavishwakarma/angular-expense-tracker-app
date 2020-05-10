import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseItemCardComponent } from './expense-item-card.component';

describe('ExpenseItemCardComponent', () => {
  let component: ExpenseItemCardComponent;
  let fixture: ComponentFixture<ExpenseItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

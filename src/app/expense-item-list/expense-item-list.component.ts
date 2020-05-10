import { Component, OnInit, Input } from '@angular/core';
import { ExpenseItem } from 'src/shared/models/expense-item.model';

@Component({
  selector: 'app-expense-item-list',
  templateUrl: './expense-item-list.component.html',
  styleUrls: ['./expense-item-list.component.css']
})
export class ExpenseItemListComponent implements OnInit {
  @Input() expenseItems: ExpenseItem[];
  constructor() { }

  ngOnInit() {
  }

}

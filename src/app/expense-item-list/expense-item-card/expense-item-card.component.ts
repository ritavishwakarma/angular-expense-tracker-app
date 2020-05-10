import { Component, OnInit, Input } from '@angular/core';
import { ExpenseItem } from 'src/shared/models/expense-item.model';

@Component({
  selector: 'app-expense-item-card',
  templateUrl: './expense-item-card.component.html',
  styleUrls: ['./expense-item-card.component.css']
})
export class ExpenseItemCardComponent implements OnInit {
@Input() item:ExpenseItem;
  constructor() { }

  ngOnInit() {
  }

}

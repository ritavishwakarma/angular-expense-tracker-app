import { Component, OnInit } from '@angular/core';
import { ExpenseItem } from 'src/shared/models/expense-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  expenseItems: ExpenseItem[]=new Array<ExpenseItem>();
  totalAmount:number = 0;
  constructor() { }

  ngOnInit() {
    
  }
  addItem(newItem: ExpenseItem){
    this.expenseItems.push(newItem);
    this.totalAmount += newItem.amount;

  }

}

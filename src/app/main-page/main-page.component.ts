import { Component, OnInit } from '@angular/core';
import { ExpenseItem } from 'src/shared/models/expense-item.model';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

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
    this.getExpenseItems();  
    this.getTotal();  
  }
  
    getExpenseItems(){
      if(localStorage.getItem('expenseItems')===null){
          this.expenseItems =[];
        }
      else{
          this.expenseItems = JSON.parse(localStorage.getItem('expenseItems')
          );
        }
      }
      getTotal(){
        if(localStorage.getItem('totalAmount')===null){
            this.totalAmount;
          }
        else{
            this.totalAmount = JSON.parse(localStorage.getItem('totalAmount')
            );
          }
        }
  
    
    addItem(newItem: ExpenseItem){
    this.expenseItems.push(newItem);
    this.totalAmount += newItem.amount;
    localStorage.setItem(
      'expenseItems',JSON.stringify(this.expenseItems)
    );
    localStorage.setItem(
      'totalAmount',JSON.stringify(this.totalAmount)
    );
  
  }

}

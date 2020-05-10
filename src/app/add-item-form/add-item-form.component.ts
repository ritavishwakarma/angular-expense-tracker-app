import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseItem } from 'src/shared/models/expense-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @Input() item: ExpenseItem = new ExpenseItem('', null);
  @Output() formSubmit: EventEmitter<ExpenseItem> = new EventEmitter<ExpenseItem>();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value)
  }
}

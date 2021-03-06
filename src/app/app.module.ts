import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ExpenseItemListComponent } from './expense-item-list/expense-item-list.component';
import { ExpenseItemCardComponent } from './expense-item-list/expense-item-card/expense-item-card.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
// import { AddItemComponent } from './add-item/add-item.component';
// import { ItemListComponent } from './item-list/item-list.component';
// import { ItemCardComponent } from './item-list/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    ExpenseItemListComponent,
    ExpenseItemCardComponent,
    RegistrationComponent,
    LoginComponent,
    // AddItemComponent,
    // ItemListComponent,
    // ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

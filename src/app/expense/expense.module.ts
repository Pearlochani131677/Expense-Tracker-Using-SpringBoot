import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgChartsModule } from 'ag-charts-angular';


@NgModule({
  declarations: [
    CreateExpenseComponent,
    ExpenseListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgChartsModule
  ],
  exports:[
    CreateExpenseComponent
  ]
})
export class ExpenseModule { }

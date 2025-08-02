import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { DashboardComponent } from './expense/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"create",
    component:CreateExpenseComponent
  },
  {
    path:"expense-list",
    component:ExpenseListComponent
  },
  {
    path:"home",
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

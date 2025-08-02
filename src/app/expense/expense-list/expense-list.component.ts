//import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit{

  expenses:any;
  categories:any;
  filteredExpenses:any;

  categoryForm=new FormGroup({
    categoryId:new FormControl('')
  })



  constructor(private expenseService:ExpenseService){}

    ngOnInit(){
    this.readExpense();
    this.fetchCategories();
    this.subscribeToCategoryId();
  }
  readExpense(){
    this.expenseService.readExpense().subscribe((val:any)=>{
      val.sort((a:any,b:any)=>b.createdAt.localeCompare(a.createdAt))
      this.expenses=val;
      this.filteredExpenses=val;
    })
  }

  fetchCategories(){
    this.expenseService.fetchCategory().subscribe((val=>{
      this.categories=val;
    }))
  }

  subscribeToCategoryId(){
    this.categoryForm.get('categoryId')?.valueChanges.subscribe((val:any)=>{
      console.log(val);
      console.log(this.expenses,this.filteredExpenses)
      this.filteredExpenses=this.expenses.filter((e:any)=>e.categoryId==val)
    })
  }
}
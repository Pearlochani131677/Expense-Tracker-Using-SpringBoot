import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent {
  expenseForm=new FormGroup({
    name:new FormControl(''),
    amount:new FormControl(''),
    categoryId:new FormControl(''),
    userId:new FormControl(1)
  })
  categories:any
  selectedFileValue!: File;

  ngOnInit(){
    this.fetchCategories();
  }

  constructor(private expenseService:ExpenseService){}
  fetchCategories(){
      this.expenseService.fetchCategory().subscribe((val=>{
        this.categories=val;
      }))
  }

  addExpenses() {
    const expenseData = this.expenseForm.value;
    this.expenseService.addExpense(expenseData).subscribe({
      next: (response) => {
        console.log("Expense added successfully", response);
        this.expenseForm.reset(); 
      },
      error: (err) => {
        console.error("Failed to add expense",err);
      }
    });
  }
  
  selectFile(event:any){
    console.log(event.target.files[0])
    this.selectedFileValue=event.target.files[0]
  }

  uploadSelectedFile(){
    this.expenseService.uploadCSVFile(this.selectedFileValue).subscribe({
      next:()=>alert("uploaded successfully"),
      error:()=>alert("upload failed")
    })
  }

}


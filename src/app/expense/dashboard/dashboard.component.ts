import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
options:any;
  categories: any;
piechartData:any;
baroptions:any;
barchartData:any;
lineoptions:any;
linechartData:any;
  constructor(private expenseService:ExpenseService) {
    this.getPieData()
    this.getBarData()
    this.getLineData()
  }

getLineData(){
  this.expenseService.getLineData().subscribe((val)=>{
    this.linechartData=val;
    console.log(val);

    this.lineoptions = {
      title: {
        text: "Daywise Data Distribution",
      },
      data: this.linechartData,
      series: [
        {
          xKey: "DAY",
          yKey: "AMOUNT",
          yName: "SPREAD",
          strokeWidth: 4,
          marker: {
            enabled: false,
          },
        },
      ],
    };
  })
  }

  getBarData(){
    this.expenseService.getBarData().subscribe((val)=>{
      this.barchartData=val;
      console.log(val);
      
      this.baroptions = {
      title: {
        text: "Bar chart of monthly expenses",
      },
      subtitle: {
        text: "In Indian Rupees",
      },
      data: this.barchartData,
      series: [
        {
          type: "bar",
          xKey: "MONTH",
          yKey: "AMOUNT",
          yName: "Expenses",
        },
      ],
    };
      })
  }
getPieData(){
  this.expenseService.getPieData().subscribe((val)=>{
      this.piechartData=val;
      console.log(val);

    this.options = {
      data: this.piechartData,
      title: {
        text: "CategoryWise Money Distribution",
      },
      series: [
        {
          type: "pie",
          angleKey: "amount",
          legendItemKey: "name",
        },
      ],
    };
    });
  }

  }

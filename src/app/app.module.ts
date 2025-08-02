import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseModule } from './expense/expense.module';
import { AgChartsModule } from 'ag-charts-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpenseModule,
    AgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

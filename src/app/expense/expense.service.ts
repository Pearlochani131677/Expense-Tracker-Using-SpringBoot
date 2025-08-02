import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http:HttpClient) { }

  fetchCategory():Observable<any>{
    return this.http.get("http://localhost:8080/category/read")
  }

  addExpense(Expense: any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/expense/add", Expense);
  }

  readExpense(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/expense/read");
  }

  getPieData():Observable<any>{
    return this.http.get<any>("http://localhost:8080/dashboard/pie")
  }

  getBarData():Observable<any>{
    return this.http.get<any>("http://localhost:8080/dashboard/bar")
  }

  getLineData():Observable<any>{
    return this.http.get<any>("http://localhost:8080/dashboard/line")
  }

  uploadCSVFile(selectedFileValue:any):Observable<any>{
    let formData=new FormData();
    formData.append("file",selectedFileValue)
    return this.http.post<any>("http://localhost:8080/expense/uploadcsv",formData)
  }
}

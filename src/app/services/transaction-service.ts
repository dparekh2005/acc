import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../model/transaction";


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  postTransaction(payload : Transaction) {
    return this.http.post("http://localhost:3000/transactionList/", payload);
  }

  getTransactions() {
    return this.http.get<Transaction[]>("http://localhost:3000/transactionList/");
  }
}

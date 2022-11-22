import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {TransactionService} from "../services/transaction-service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Transaction} from "../model/transaction";

@Component({
  selector: 'app-view-submitted-transaction',
  templateUrl: './view-submitted-transaction.component.html',
  styleUrls: ['./view-submitted-transaction.component.css']
})
export class ViewSubmittedTransactionComponent implements OnInit {

  displayedColumns: string[] = ['customerName', 'transferAmount', 'transferCurrency', 'reference'];
  dataSource!: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.getSubmittedTrannsactions();
  }

  getSubmittedTrannsactions() {
    this.transactionService.getTransactions()
      .subscribe({
        next: (res)=> {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error:(error)=> {
          alert("Error while fetching view transactions");
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

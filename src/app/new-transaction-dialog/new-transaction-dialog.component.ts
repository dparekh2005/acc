import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {TransactionService} from "../services/transaction-service";
import {MatDialogRef} from "@angular/material/dialog";
import {Transaction} from "../model/transaction";

interface DropDown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-transaction-dialog',
  templateUrl: './new-transaction-dialog.component.html',
  styleUrls: ['./new-transaction-dialog.component.css']
})
export class NewTransactionDialogComponent implements OnInit {

  transaction!: Transaction;

  currencyList: DropDown[] = [
    {value: 'AED', viewValue: 'AED'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'CHF', viewValue: 'CHF'},
    {value: 'MUR', viewValue: 'MUR'},
    {value: 'USD', viewValue: 'USD'},
  ];

  regionList: DropDown[] = [
    {value: 'Port_Louis', viewValue: 'Port Louis'},
    {value: 'Curepipe', viewValue: 'Curepipe'},
    {value: 'Vacoas', viewValue: 'Vacoas'},
    {value: 'Port_Mathurin', viewValue: 'Port_Mathurin'}
  ];

  transactionTypes: string[] = ['New', 'Existing'];

  newTransactionForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
              private transactionService : TransactionService,
              private dialogRef: MatDialogRef<NewTransactionDialogComponent>
              ) { }

  ngOnInit(): void {
    const generatedReference = this.referennceGenerate(9999,1);
    this.newTransactionForm = this.formBuilder.group({
      transactionType : ['', Validators.required],
      reference : [generatedReference, Validators.required],
      customerNumber : ['', Validators.required],
      customerName : ['', Validators.required],
      customerAddress : ['', Validators.required],
      customerPhoneNumber : ['', Validators.required],
      transferAmount : ['', Validators.required],
      transferCurrency : ['', Validators.required],
      beneficiaryBank : ['', Validators.required],
      beneficiaryAccountNumber : ['', Validators.required],
      paymentDetails : ['', Validators.required],
      credit_DebitCardDetails : ['', Validators.required],
      region : ['', Validators.required]
    })
  }

  newTransactionSubmit() {
    if(this.newTransactionForm.valid){
      this.transactionService.postTransaction(this.newTransactionForm.value)
        .subscribe({
          next:(res)=>{
             alert("Successfully submitted new transaction.");
            this.newTransactionForm.reset();
            this.dialogRef.close();
          },
          error:(res)=>{
            alert("Error while submitting new transaction.")
          }
        })
    }
  }

  referennceGenerate(max: number, min: number) {
    const date = new Date().toLocaleDateString("sv").split('-').join('');
    let length = max - min + 1;
    let random = Math.random() * length;
    let digit = Math.floor(random) + min;
    return ('CUS' + date + digit);
  }

  validateNumbers(event:any): boolean {
    const charCode = (event.which)?event.which: event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)) {
      alert("Only numbers are allowed");
      return false;
    }
    return true;
  }

  validateChar(event:any): boolean {
    const charCode = (event.which)?event.which: event.keyCode;
    if(charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 ) {
      return true;
    }
    alert("Only characters are allowed");
    return false;
  }
}

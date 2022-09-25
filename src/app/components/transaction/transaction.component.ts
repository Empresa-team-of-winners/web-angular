import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/users/api.service';
import { Router } from '@angular/router';

export interface Transaction {
  id: number;
  concept: string;
  amount: number;
  createdAt:string;
  user:string;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','see','user'];

  transactions: Transaction[];
  constructor(
    private router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllTransaction();
  }

  getAllTransaction():void{
    this.apiService.getTransactions().subscribe(resp => {
      this.transactions = resp;
    },
      error => { console.error(error) }
    )
  }

  goToCreate():void{
    this.router.navigate(['createtransaction']);
  }

  deleteCompany(id:any):void{
    this.apiService.deleteEnterprise(id).subscribe(resp => {
      if(resp == true){
        this.getAllTransaction();
      }
    },
      error => { console.error(error) }
    )
  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/users/api.service';
import { Router } from '@angular/router';

export interface Enterprise {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','see'];

  enterprises: Enterprise[];
  constructor(
    private router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllEnterprise();
  }

  getAllEnterprise():void{
    this.apiService.getEnterprises().subscribe(resp => {
      this.enterprises = resp;
    },
      error => { console.error(error) }
    )
  }

  goToCreate():void{
    this.router.navigate(['createcompany']);
  }

  deleteCompany(id:any):void{
    this.apiService.deleteEnterprise(id).subscribe(resp => {
      if(resp == true){
        this.getAllEnterprise();
      }
    },
      error => { console.error(error) }
    )
  }

}

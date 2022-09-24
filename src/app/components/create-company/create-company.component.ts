import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/users/api.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';


export interface User {
  id: number;
  username: string;
  email: string;
}

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  users: User[];
  companyForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      users: ['', Validators.required],
      createdAt: [formatDate(new Date(), 'dd-MM-yyyy', 'en'), Validators.required],
      updatedAt: [formatDate(new Date(), 'dd-MM-yyyy', 'en'), Validators.required],
    });

    this.getAllUsers();
  }

  guardar(): void {
    this.apiService.saveEnterprise(this.companyForm.value).subscribe(resp => {
      this.companyForm.reset();
      this.companyForm.setErrors(null);
      this.router.navigate(['company']);
    },
      error => { console.error(error) }
    )
  }

  
  getAllUsers():void{
    this.apiService.getUsers().subscribe(resp => {
      console.log(resp);
      this.users = resp;
    },
      error => { console.error(error) }
    )
  }

}

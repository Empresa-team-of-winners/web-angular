import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/users/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  Roles: any = ['Admin'];
  personaForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public apiService: ApiService
  ) {
  
  }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['Admin', Validators.required],
      createdAt: [formatDate(new Date(), 'dd-MM-yyyy', 'en'), Validators.required],
      updatedAt: [formatDate(new Date(), 'dd-MM-yyyy', 'en'), Validators.required],
    });
  }

  guardar(): void {
    this.apiService.saveUser(this.personaForm.value).subscribe(resp => {
      this.personaForm.reset();
      this.personaForm.setErrors(null);
      this.router.navigate(['login']);
    },
      error => { console.error(error) }
    )
  }

}
import { Component } from '@angular/core';
import { ApiService } from './services/users/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-login-template';


constructor(
  public fb: FormBuilder,
  public apiService: ApiService
) {

}

}
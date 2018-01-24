import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { AuthService } from '../../services/auth.service';
import { validateConfig } from '@angular/router/src/config';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _registerForm: FormGroup;

  constructor(private _form: FormBuilder, public _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
    console.log("ngOnLoginInit", this._registerForm.value);
    this._authService.loginError = false;
  }

  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required)
    });
    console.log("createForm:", this._registerForm.value);
  }

  onSubmit() {
    console.log("OnSubmit:", this._registerForm.value);
    this._authService.login(this._registerForm.value);
  }
}

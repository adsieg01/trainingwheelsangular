import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
    console.log("ngOnLoginInit", this._registerForm.value);
  }

  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
    });
    console.log("createForm:", this._registerForm.value);
  }

  onSubmit() {
    console.log("OnSubmit:", this._registerForm.value);
    this._authService.login(this._registerForm.value);
  }
}

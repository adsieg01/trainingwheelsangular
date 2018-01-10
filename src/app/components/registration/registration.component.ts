import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
    console.log("ngOnInit", this._registerForm.value);
  }

  createForm() {
    this._registerForm = this._form.group({
      'email': new FormControl('' , [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'confirmPassword': new FormControl('', [Validators.required])},
      {validator: this.checkIfMatchingPasswords('password', 'confirmPassword')}
    );
    console.log("createForm:", this._registerForm.value);
  }

  get email() { return this._registerForm.get('email') }

  get password() { return this._registerForm.get('password') }

  get confirmPassword() { return this._registerForm.get('confirmPassword')}

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  onSubmit() {
    console.log("OnSubmit:", this._registerForm.value);
    this._authService
      .register(this._registerForm.value)
      .subscribe( () => this._authService.login(this._registerForm.value));
  }
}
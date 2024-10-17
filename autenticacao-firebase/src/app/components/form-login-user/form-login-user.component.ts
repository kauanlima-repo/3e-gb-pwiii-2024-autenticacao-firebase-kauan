import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-login-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-login-user.component.html',
  styleUrl: './form-login-user.component.css'
})
export class FormLoginUserComponent {

  public readonly FormLoginUser = new FormBuilder().group({
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.minLength(8),
      Validators.maxLength(100)
    ]],
    senha: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]],
  });

  public onSubmit() {
    console.log(this.FormLoginUser.controls);
  }

}

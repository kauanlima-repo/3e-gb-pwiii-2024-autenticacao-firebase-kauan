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
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });

  public onSubmit() {
    const email: string | null = this.FormLoginUser.controls.email.value;
    const senha: string | null = this.FormLoginUser.controls.senha.value;

    console.log(email);
    console.log(senha)
  }

}

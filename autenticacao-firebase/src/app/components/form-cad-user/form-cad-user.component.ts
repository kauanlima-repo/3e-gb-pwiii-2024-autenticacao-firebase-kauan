import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cad-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-cad-user.component.html',
  styleUrl: './form-cad-user.component.css'
})
export class FormCadUserComponent {

  public readonly FormCadUser = new FormBuilder().group({
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
  
  public register() {
    const email: string | null = this.FormCadUser.controls.email.value;
    const senha: string | null = this.FormCadUser.controls.senha.value;

    console.log(email);
    console.log(senha)
  }

  public onSubmit() {
    console.log(this.FormCadUser.controls);
  }

}

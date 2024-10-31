import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-form-login-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule
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

  status: string = '';
  statusType: string = '';
  
  constructor(
    private readonly authService: AuthService
  ) {}

  public async login(email: string, senha: string) {
    await this.authService.createUser(email, senha)
      .then((data: any) => {
        console.log(data);
        this.status = 'Usuário logado com sucesso!';
        this.statusType = 'success';
      })
      .catch((erro: any) => {
        console.log(erro);
        this.status = 'Erro ao logar usuário, tente novamente';
        this.statusType = 'danger';
      })
  }

  clear() {
    if(this.statusType === 'success') {
      this.FormLoginUser.controls.email.reset();
      this.FormLoginUser.controls.senha.reset();
    }

    this.status = '';
    this.statusType = '';
  }

  public onSubmit() {
    const email: string = this.FormLoginUser.controls.email.value || '';
    const senha: string = this.FormLoginUser.controls.senha.value || '';

    console.log(email, senha);

    if (email && senha) {
      this.login(email, senha);
    }
  }
}

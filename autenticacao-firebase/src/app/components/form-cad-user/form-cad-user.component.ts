import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-form-cad-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlert
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

  status: string = '';
  statusType: string = '';
  
  constructor(
    private readonly authService: AuthService
  ) {}

  public async register(email: string, senha: string) {
    await this.authService.createUser(email, senha)
      .then((data: any) => {
        console.log(data);
        this.status = 'Usuário cadastrado com sucesso!';
        this.statusType = 'success';
      })
      .catch((erro: any) => {
        console.log(erro);
        this.status = 'Erro ao cadastrar usuário, tente novamente';
        this.statusType = 'danger';
      })
  }

  clear() {
    if(this.statusType === 'success') {
      this.FormCadUser.controls.email.reset();
      this.FormCadUser.controls.senha.reset();
    }

    this.status = '';
    this.statusType = '';
  }

  public onSubmit() {
    const email: string = this.FormCadUser.controls.email.value || '';
    const senha: string = this.FormCadUser.controls.senha.value || '';

    console.log(email, senha);

    if (email && senha) {
      this.register(email, senha)
    }
  }

}

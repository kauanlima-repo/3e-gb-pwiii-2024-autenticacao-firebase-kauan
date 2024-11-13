import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  readonly usuarioLogado: string = 'testeUsuario@teste.com';

  constructor (
    private readonly authService: AuthService,
    private readonly navRouter: Router
  ) {}

  sair() {
    this.authService.removeLoggedUser();
    this.navRouter.navigateByUrl('/login');
  }
}

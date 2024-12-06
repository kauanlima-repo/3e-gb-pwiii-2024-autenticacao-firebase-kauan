import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
  usuarioLogado: string = '';

  constructor (
    private readonly authService: AuthService,
    private readonly navRouter: Router
  ) {}

  ngOnInit(): void {
    const loggedUser = this.authService.getLoggedUser();

    if (!loggedUser) {
      return;
    };

    const objUser = JSON.parse(loggedUser);

    this.usuarioLogado = objUser.email;

    console.log(this.usuarioLogado)
  }

  sair() {
    this.authService.removeLoggedUser();
    this.navRouter.navigateByUrl('/login');
  }
}

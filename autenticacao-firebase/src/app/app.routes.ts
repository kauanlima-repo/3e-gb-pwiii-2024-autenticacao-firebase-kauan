import { Routes } from '@angular/router';
import { FormCadUserComponent } from './components/form-cad-user/form-cad-user.component';
import { FormLoginUserComponent } from './components/form-login-user/form-login-user.component';
import { loginGuard } from './guards/login/login.guard';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadComponent: () => FormLoginUserComponent,
    title: 'FireAuth - Login',
    canActivate: [authGuard]
  },
  {
    path:'register',
    loadComponent: () => FormCadUserComponent,
    title: 'FireAuth - Cadastro'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'FireAuth - Dashboard',
    canActivate: [loginGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

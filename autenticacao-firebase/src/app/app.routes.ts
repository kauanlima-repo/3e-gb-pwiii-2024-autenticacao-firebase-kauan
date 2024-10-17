import { Routes } from '@angular/router';
import { FormCadUserComponent } from './components/form-cad-user/form-cad-user.component';
import { FormLoginUserComponent } from './components/form-login-user/form-login-user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadComponent: () => FormLoginUserComponent,
    title: 'FireAuth - Login'
  },
  {
    path:'register',
    loadComponent: () => FormCadUserComponent,
    title: 'FireAuth - Cadastro'
  }
];

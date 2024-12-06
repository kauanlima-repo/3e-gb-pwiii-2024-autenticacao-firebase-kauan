import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const authServ: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if(authServ.getLoggedUser()) {
    console.log('Acesso permitido');
    return true;
  }

  console.log('Acesso negado');
  router.navigateByUrl('/login');
  return false;
};

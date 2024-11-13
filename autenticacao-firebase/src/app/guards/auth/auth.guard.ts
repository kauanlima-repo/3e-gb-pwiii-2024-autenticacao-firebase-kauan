import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if(!authServ.getLoggedUser()) {
    console.log('Acesso permitido');
    return true;
  }

  console.log('Acesso negado');
  router.navigateByUrl('/dashboard');
  return false;
};

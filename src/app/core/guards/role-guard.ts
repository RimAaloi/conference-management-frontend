import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const user = authService.getCurrentUser();
  const requiredRoles = route.data?.['roles'] as string[];

  if (!user || !requiredRoles) {
    return false;
  }

  return requiredRoles.some(role => user.roles.includes(role));
};

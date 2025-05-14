import { Routes } from '@angular/router';
import { managersRoutes } from './components/managers/managers.routes';
import { LoginGuard } from './login.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadComponent: () => {
      return import('./components/auth/login/login.component').then(
        (c) => c.LoginComponent
      );
    },
  },
  ...managersRoutes,
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

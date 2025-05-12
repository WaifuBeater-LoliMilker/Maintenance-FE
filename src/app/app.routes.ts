import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => {
      return import('./components/auth/login/login.component').then(
        (c) => c.LoginComponent
      );
    },
  },
  {
    path: 'managers/dashboard',
    loadComponent: () => {
      return import('./components/managers/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      );
    },
  },
  {
    path: 'users/dashboard',
    loadComponent: () => {
      return import('./components/users/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      );
    },
  },
];

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
  // {
  //   path: 'factories',
  //   loadComponent: () => {
  //     return import('./components/factories/factories.component').then(
  //       (c) => c.FactoriesComponent
  //     );
  //   },
  // },
  // {
  //   path: 'lines',
  //   loadComponent: () => {
  //     return import('./components/lines/lines.component').then(
  //       (c) => c.LinesComponent
  //     );
  //   },
  // },
];

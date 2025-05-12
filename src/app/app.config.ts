import {
  ApplicationConfig,
  InjectionToken,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from './enviroments/enviroments';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: BASE_URL, useValue: environment.apiBaseUrl },
  ],
};

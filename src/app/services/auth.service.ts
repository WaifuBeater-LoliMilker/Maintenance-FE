import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.config';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  login(credentials: { username: string; password: string }) {
    return this.http
      .post<{ fullname: string; accessToken: string }>(
        `${this.baseUrl}/auth/login`,
        credentials,
        { withCredentials: true }
      )
      .pipe(
        tap((response) => {
          localStorage.setItem('access_token', response.accessToken);
        })
      );
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    return this.http.post(
      `${this.baseUrl}/auth/logout`,
      {},
      { withCredentials: true }
    );
  }
}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.config';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string | null = null;

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  login(credentials: { email: string; password: string }) {
    return this.http
      .post<{ accessToken: string }>(
        `${this.baseUrl}/auth/login`,
        credentials,
        { withCredentials: true }
      )
      .pipe(
        tap((response) => {
          this.accessToken = response.accessToken;
        })
      );
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  logout() {
    this.accessToken = null;
    return this.http.post(
      `${this.baseUrl}/auth/logout`,
      {},
      { withCredentials: true }
    );
  }
}

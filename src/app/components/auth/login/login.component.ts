import { Component, signal } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(auth: AuthService, router: Router) {}
  eyeIcon = signal(faEye);
  eyeSlashIcon = signal(faEyeSlash);
  message = signal('Vui lòng nhập thông tin đăng nhập');
  username = new FormControl('');
  password = new FormControl('');
  showPassword = signal(false);
  onSubmit() {}
  togglePasswordVisibility() {
    this.showPassword.update(pw => !pw)
  }
}

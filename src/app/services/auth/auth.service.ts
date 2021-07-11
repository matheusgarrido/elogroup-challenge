import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  private userAuth = false;

  authenticate(isLoginValid: boolean) {
    this.userAuth = isLoginValid;
  }
  get getAuthentication() {
    return this.userAuth;
  }

  redirectIfNotAuth() {
    if (!this.getAuthentication) {
      this.router.navigate(['registro']);
    }
  }
  redirectIfAlreadyAuth() {
    if (this.getAuthentication) {
      this.router.navigate(['']);
    }
  }
}

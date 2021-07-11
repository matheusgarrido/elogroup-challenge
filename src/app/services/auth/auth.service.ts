import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuth = false;

  constructor(private router: Router) {
    const auth = localStorage.getItem('auth');
    if (auth) this.userAuth = auth === 'true' ? true : false;
    console.log(this.userAuth);
  }

  authenticate(isLoginValid: boolean) {
    localStorage.setItem('auth', `${isLoginValid}`);
    this.userAuth = isLoginValid;
    console.log(this.userAuth);
  }
  get getAuthentication() {
    return this.userAuth;
  }

  logout() {
    this.authenticate(false);
    this.redirectIfNotAuth();
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

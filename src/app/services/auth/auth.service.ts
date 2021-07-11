import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuth = false;
  private user = '';

  constructor(private router: Router) {
    const authSaved = localStorage.getItem('auth');
    if (authSaved) {
      const { auth, username } = JSON.parse(authSaved);
      this.userAuth = auth;
      this.user = username;
    }
  }

  authenticate(isLoginValid: boolean, user: string) {
    localStorage.setItem(
      'auth',
      JSON.stringify({ auth: isLoginValid, username: user })
    );
    this.userAuth = isLoginValid;
    console.log(this.userAuth);
  }
  get getAuthentication() {
    return this.userAuth;
  }
  get getAuthUser() {
    return this.user;
  }

  logout() {
    this.authenticate(false, '');
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

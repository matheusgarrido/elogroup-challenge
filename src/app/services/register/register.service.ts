import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup } from '@angular/forms';
import { leadData } from '../lead/lead.service';

export interface userData {
  username: string;
  password: string;
  leads: leadData[];
}
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private allUser: userData[] = [];
  constructor(private authService: AuthService) {
    const allUsers = localStorage.getItem('users');
    if (allUsers) {
      this.allUser = JSON.parse(allUsers);
    }
  }

  userRegister(username: string, password: string) {
    this.allUser.push({
      username,
      password,
      leads: [],
    });
    localStorage.setItem('users', JSON.stringify(this.allUser));
  }

  verifyUserExists(user: string) {
    if (this.allUser) {
      return this.allUser.find(
        (element) => element.username.toLowerCase() === user.toLowerCase()
      )
        ? true
        : false;
    }
    return false;
  }
  verifyLoginAccess(user: string, password: string) {
    if (this.allUser) {
      return this.allUser.find(
        (element) =>
          element.username.toLowerCase() === user.toLowerCase() &&
          element.password === password
      )
        ? true
        : false;
    }
    return false;
  }
  submit(validation: boolean, form: FormGroup) {
    const { username, password } = form.value;
    this.userRegister(username, password);
    this.authService.authenticate(validation, username);
    this.authService.redirectIfAlreadyAuth();
  }
}

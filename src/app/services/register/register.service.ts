import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private authService: AuthService) {}

  submit(validation: boolean) {
    this.authService.authenticate(validation);
    this.authService.redirectIfAlreadyAuth();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterService } from 'src/app/services/register/register.service';
import { Login } from 'src/app/controllers/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginController = new Login();
  form: FormGroup = this.loginController.getForm;

  constructor(
    private authService: AuthService,
    private registerService: RegisterService
  ) {
    document.title = 'EloGroup | Login';
    this.authService.redirectIfAlreadyAuth();
  }

  get getRegisterService() {
    return this.registerService;
  }
}

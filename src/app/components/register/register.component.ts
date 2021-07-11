import { Component } from '@angular/core';
import { Register } from 'src/app/controllers/register';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerController = new Register();
  form: FormGroup = this.registerController.getForm;
  constructor(
    private authService: AuthService,
    private registerService: RegisterService
  ) {
    document.title = 'EloGroup | Registro';
    this.authService.redirectIfAlreadyAuth();
  }

  get getRegisterService() {
    return this.registerService;
  }
}

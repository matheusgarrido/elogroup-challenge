import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Register } from '../../controllers/register';
import { RegisterService } from '../../services/register/register.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent {
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

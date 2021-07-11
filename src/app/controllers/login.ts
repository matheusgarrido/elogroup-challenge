import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register/register.service';

export class Login {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get getForm(): FormGroup {
    return this.form;
  }

  get validate() {
    return this.form.status === 'VALID';
  }

  //Boolean to change see/hide icon
  visibilityPassword = false;
  get isPasswordVisible() {
    return this.visibilityPassword;
  }
  //Change the input type
  seePassword() {
    this.visibilityPassword = !this.visibilityPassword;
    const inputType = this.visibilityPassword ? 'text' : 'password';
    document.getElementById('password')?.setAttribute('type', inputType);
  }

  userError = false;
  submit(registerService: RegisterService) {
    const { username, password } = this.form.value;
    this.userError = !registerService.verifyLoginAccess(username, password);
    if (!this.userError) {
      registerService.login(this.validate, this.form);
    } else this.userError = true;
  }
  inputForm() {
    this.userError = false;
  }
}

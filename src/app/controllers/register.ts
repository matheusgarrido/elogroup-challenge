import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register/register.service';
import {
  verifyPasswordLetter,
  verifyPasswordNumber,
  verifyPasswordSpecial,
  errorPassword,
  errorPasswordConfirm,
  validatePassword,
  validatePasswordConfirm,
} from './verifyPassword';

export class Register {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get getForm(): FormGroup {
    return this.form;
  }

  get validate() {
    return (
      validatePasswordConfirm(
        this.form.value.password,
        this.form.value.passwordConfirm
      ) &&
      this.form.status === 'VALID' &&
      validatePassword(this.form.value.password)
    );
  }
  get getErrorPassword() {
    return errorPassword(this.form.value.password);
  }
  get getErrorPasswordConfirm() {
    return errorPassword(this.form.value.passwordConfirm);
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
    document.getElementById('passwordConfirm')?.setAttribute('type', inputType);
  }

  userError = false;
  submit(registerService: RegisterService) {
    if (!registerService.verifyUserExists(this.form.value.username))
      registerService.submit(this.validate, this.form);
    else this.userError = true;
  }
  inputForm() {
    this.userError = false;
  }
}

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register/register.service';

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

  get validatePasswordConfirm() {
    return this.form.value.password === this.form.value.passwordConfirm;
  }

  getVerifyPassordContent(regex: RegExp): boolean {
    const { password } = this.form.value;
    for (let i = 0; i < password.length; i++) {
      if (password[i].match(regex)) return false;
    }
    return true;
  }
  get verifyPasswordLetter() {
    return this.getVerifyPassordContent(/^[A-Za-z]+$/);
  }
  get verifyPasswordNumber() {
    return this.getVerifyPassordContent(/^[0-9]+$/);
  }
  get verifyPasswordSpecial() {
    return this.getVerifyPassordContent(/[^a-z\d]+/i);
  }
  get errorPassword(): string {
    const password: string = this.form.value.password;
    let msg = '';
    //if password shorter than 8 chars
    if (password.length < 8) msg += '8 caracteres';
    //if hasn't a letter char
    if (this.verifyPasswordLetter) msg += (msg.length ? ', ' : ' ') + '1 letra';
    // //if hasn't a numeric char
    if (this.verifyPasswordNumber)
      msg += (msg.length ? ', ' : ' ') + '1 número';
    // // //if hasn't a special char
    if (this.verifyPasswordSpecial)
      msg += (msg.length ? ', ' : ' ') + '1 caracter especial';
    if (msg.length && password.length) return 'Mínimo de ' + msg + '.';
    return '';
  }

  //Error message if passwords is different and if fields not empty
  get errorPasswordConfirm(): string {
    if (
      !this.validatePasswordConfirm &&
      this.form.value.passwordConfirm !== '' &&
      this.form.value.password !== ''
    )
      return 'Senhas divergentes';
    return '';
  }

  get validatePassword() {
    return (
      !this.verifyPasswordLetter &&
      !this.verifyPasswordNumber &&
      !this.verifyPasswordSpecial
    );
  }
  get validate() {
    return (
      this.validatePasswordConfirm &&
      this.form.status === 'VALID' &&
      this.validatePassword
    );
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

import { Component } from '@angular/core';
import { Register } from '../../controllers/register';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent {
  register = new Register();
  form: FormGroup = this.register.getForm;
}

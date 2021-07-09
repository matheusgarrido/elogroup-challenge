import { Component } from '@angular/core';
import { NewLeadComponent } from '../../controllers/new-lead';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-lead-form',
  templateUrl: './new-lead-form.component.html',
  styleUrls: ['./new-lead-form.component.scss'],
})
export class NewLeadFormComponent {
  opportunities: string[] = ['RPA', 'Produto Digital', 'Analytics', 'BPM'];
  newLeadController = new NewLeadComponent(this.opportunities);
  form = new FormGroup({});

  constructor() {
    this.form = this.newLeadController.getForm;
  }
}

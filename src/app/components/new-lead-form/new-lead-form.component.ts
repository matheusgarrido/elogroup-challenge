import { Component } from '@angular/core';
import { NewLeadComponent } from '../../controllers/new-lead';
import { FormGroup } from '@angular/forms';
import { LeadService } from 'src/app/services/lead/lead.service';

@Component({
  selector: 'app-new-lead-form',
  templateUrl: './new-lead-form.component.html',
  styleUrls: ['./new-lead-form.component.scss'],
})
export class NewLeadFormComponent {
  opportunities: string[] = ['RPA', 'Produto Digital', 'Analytics', 'BPM'];
  newLeadController = new NewLeadComponent(this.opportunities);
  form = new FormGroup({});
  leadService: LeadService;

  constructor(leadService: LeadService) {
    this.form = this.newLeadController.getForm;
    this.leadService = leadService;
  }
}

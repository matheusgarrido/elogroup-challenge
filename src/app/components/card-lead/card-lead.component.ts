import { Component, OnInit, Input } from '@angular/core';
import { leadData } from 'src/app/services/lead/lead.service';

@Component({
  selector: 'app-card-lead',
  templateUrl: './card-lead.component.html',
  styleUrls: ['./card-lead.component.scss'],
})
export class CardLeadComponent {
  @Input('lead') lead = {
    email: '',
    name: '',
    opportunities: [''],
    phone: 0,
    tableColumn: 0,
  };

  constructor() {}
}

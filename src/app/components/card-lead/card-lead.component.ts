import { Component, Input } from '@angular/core';

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

  infoActive = false;
  changeInfoActive() {
    this.infoActive = !this.infoActive;
  }
}

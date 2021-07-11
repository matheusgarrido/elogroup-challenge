import { Component } from '@angular/core';
import { LeadService } from 'src/app/services/lead/lead.service';
import { TableController } from 'src/app/controllers/table-leads';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss'],
})
export class LeadsListComponent {
  leadService: LeadService;
  tableController: TableController;

  columns = [0, 1, 2];

  constructor(leadService: LeadService) {
    this.leadService = leadService;
    this.tableController = new TableController(leadService);
  }
}

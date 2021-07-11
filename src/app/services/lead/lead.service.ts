import { Injectable } from '@angular/core';

export interface leadData {
  name: string;
  phone: number;
  email: string;
  opportunities: string[];
  tableColumn: number;
}
@Injectable({
  providedIn: 'root',
})
export class LeadService {
  arrLeads: leadData[] = [];

  constructor() {
    const savedLeads = localStorage.getItem('leads');
    this.arrLeads = savedLeads ? JSON.parse(savedLeads) : [];
  }

  checkLeadPreviouslySaved(submittedForm: leadData) {
    return this.arrLeads.find(
      (element) =>
        element.name.toLowerCase() === submittedForm.name.toLowerCase()
    )
      ? true
      : false;
  }

  submit(submittedForm: leadData) {
    const isPreviouslySaved = this.checkLeadPreviouslySaved(submittedForm);
    let message = 'Já existe um lead com este nome cadastrado.';
    if (!isPreviouslySaved) {
      this.save(submittedForm);
      message = 'Cadastrado com sucesso!';
    }
    return { error: isPreviouslySaved, message };
  }

  save(submittedForm: leadData) {
    this.arrLeads.push(submittedForm);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('leads', JSON.stringify(this.arrLeads));
  }
}

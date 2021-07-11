import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { userData } from '../register/register.service';

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
  arrUsers: userData[] = [];
  user = '';

  constructor(authService: AuthService) {
    const allUsers = localStorage.getItem('users');
    if (allUsers) {
      this.user = authService.getAuthUser;
      const jsonUsers: userData[] = JSON.parse(allUsers);
      this.arrUsers = jsonUsers;
      this.arrLeads = jsonUsers.filter(
        (element) => element.username === this.user
      )[0].leads;
    }
  }

  get getLeads() {
    return this.arrLeads;
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
  moveCellLead(arrLeads: leadData[]) {
    this.arrLeads = arrLeads;
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    this.arrUsers = this.arrUsers.map((element) => {
      if (element.username.toLowerCase() === this.user)
        return {
          username: element.username,
          password: element.password,
          leads: this.arrLeads,
        };
      return element;
    });
    localStorage.setItem('users', JSON.stringify(this.arrUsers));
  }
}

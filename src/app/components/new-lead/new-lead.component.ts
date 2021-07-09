import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['./new-lead.component.scss'],
})
export class NewLeadComponent {
  opportunities: string[] = ['RPA', 'Produto Digital', 'Analytics', 'BPM'];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('12345678', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
      Validators.pattern('[- +()0-9]+'),
    ]),
    email: new FormControl('matheusgarrido10@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    opportunities: new FormArray(
      this.opportunities.map((opportunity) => {
        return new FormControl(false);
      })
    ),
  });

  get VerifyAllChecked(): boolean {
    return this.VerifyChecks.length === this.opportunities.length
      ? true
      : false;
  }
  get VerifyHasChecked(): boolean {
    return this.VerifyChecks.length ? true : false;
  }
  get VerifyChecks(): string[] {
    let arrChecks = [];
    for (let i = 0; i < this.opportunities.length; i++) {
      let ckb = <HTMLInputElement>document.getElementById(`ckb${i}`);
      this.form.value.opportunities[i] = ckb.checked;
      if (this.form.value.opportunities[i] === true) {
        arrChecks.push(this.opportunities[i]);
      }
    }
    this.onChangeCheckAll(arrChecks.length === this.opportunities.length);
    return arrChecks;
  }

  checkAllEvent() {
    let allChecked: boolean = this.VerifyAllChecked;
    for (let i = 0; i < this.opportunities.length; i++) {
      this.form.value.opportunities[i] = !allChecked;
      let ckb = <HTMLInputElement>document.getElementById(`ckb${i}`);
      ckb.checked = !allChecked;
    }
    this.onChangeCheckAll(!allChecked);
  }

  onChangeCheckAll(value: boolean) {
    let ckbAll = <HTMLInputElement>document.getElementById('ckbAll');
    ckbAll.checked = value;
  }

  onSubmit() {
    const { name, phone, email } = this.form.value;
    const opportunities: string[] = this.form.value.opportunities
      ?.map((checkbox: string, index: number): string => {
        if (checkbox) {
          console.log(this.opportunities[index]);
          return this.opportunities[index];
        }
        return '';
      })
      .filter((opportunity: string) => opportunity !== '');
    const formValue = {
      name,
      phone,
      email,
      opportunities,
    };
    alert(`Formulário a ser salvo: ${JSON.stringify(formValue)}`);
    this.form.reset();
  }
}

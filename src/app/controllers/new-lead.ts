import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { LeadService, leadData } from '../services/lead/lead.service';

export class NewLeadComponent {
  opportunities: string[] = [];
  form = new FormGroup({});

  constructor(opportunities: string[]) {
    this.opportunities = opportunities;
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern('[- +()0-9]+'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      opportunities: new FormArray(
        this.opportunities.map((opportunity) => {
          return new FormControl(false);
        })
      ),
    });
  }

  //Return the form
  get getForm(): FormGroup {
    return this.form;
  }

  //List all checked boxes
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

  //When the 1st checkbox is clicked
  checkAllEvent() {
    let allChecked: boolean =
      this.VerifyChecks.length === this.opportunities.length;
    for (let i = 0; i < this.opportunities.length; i++) {
      this.form.value.opportunities[i] = !allChecked;
      let ckb = <HTMLInputElement>document.getElementById(`ckb${i}`);
      ckb.checked = !allChecked;
    }
    this.onChangeCheckAll(!allChecked);
  }

  //Change the 1st checkbox value
  onChangeCheckAll(value: boolean) {
    let ckbAll = <HTMLInputElement>document.getElementById('ckbAll');
    ckbAll.checked = value;
  }

  //Validates de full form
  get validate(): boolean {
    return this.form.status === 'VALID' && this.VerifyChecks.length > 0;
  }

  formattedFormValue() {
    const { name, phone, email } = this.form.value;
    const opportunities: string[] = this.form.value.opportunities
      ?.map((checkbox: string, index: number): string => {
        if (checkbox) {
          return this.opportunities[index];
        }
        return '';
      })
      .filter((opportunity: string) => opportunity !== '');
    const formValue: leadData = {
      name,
      phone,
      email,
      opportunities,
      tableColumn: 0,
    };
    return formValue;
  }

  saveMessage = '';
  errorMessage = false;
  //Submit the form
  submit(leadService: LeadService) {
    const formValue = this.formattedFormValue();
    if (this.validate) {
      const submitReturn = leadService.submit(formValue);
      if (!submitReturn.error) {
        this.form.reset();
        this.onChangeCheckAll(false);
      }
      this.errorMessage = submitReturn.error;
      this.saveMessage = submitReturn.message;
    }
  }

  formInput() {
    this.saveMessage = '';
  }
}

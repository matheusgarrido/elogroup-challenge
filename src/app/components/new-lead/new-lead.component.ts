import { Component } from '@angular/core';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['./new-lead.component.scss'],
})
export class NewLeadComponent {
  opportunities: string[] = ['RPA', 'Produto Digital', 'Analytics', 'BPM'];

  verifyChecks(): boolean {
    for (let i = 0; i < this.opportunities.length; i++) {
      let ckb = <HTMLInputElement>document.getElementById(`ckb${i}`);
      if (ckb.checked === false) {
        this.changeCheckAll(false);
        return false;
      }
    }
    this.changeCheckAll(true);
    return true;
  }

  checkAllEvent() {
    let allChecked: boolean = this.verifyChecks();
    for (let i = 0; i < this.opportunities.length; i++) {
      let ckb = <HTMLInputElement>document.getElementById(`ckb${i}`);
      ckb.checked = !allChecked;
    }
    this.changeCheckAll(!allChecked);
  }

  changeCheckAll(value: boolean) {
    let ckbAll = <HTMLInputElement>document.getElementById('ckbAll');
    ckbAll.checked = value;
  }
}

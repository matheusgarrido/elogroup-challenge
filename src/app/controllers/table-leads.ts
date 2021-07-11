import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { leadData, LeadService } from 'src/app/services/lead/lead.service';

export class TableController {
  tables: any = [];
  constructor(leadService: LeadService) {
    let arrLeads: leadData[] = leadService.getLeads;
    arrLeads.map((element) => {
      const row: any = [[], [], []];
      row[element.tableColumn].push(element);
      this.tables.push(row);
    });
  }
  get getTables() {
    return this.tables;
  }

  getCellPosition(row: number, column: number, totalColumns: number) {
    return row * totalColumns + column;
  }
  getCurrentCell(row: number, column: number, totalColumns: number) {
    return `dropList${this.getCellPosition(row, column, totalColumns)}`;
  }
  getDropConnectedTo(row: number, column: number, totalColumns: number) {
    const nextCellPosition =
      this.getCellPosition(row, column, totalColumns) + 1;
    const nextCell =
      nextCellPosition % 3 == 0 ? '' : `dropList${nextCellPosition}`;
    return [nextCell];
  }

  drop(event: CdkDragDrop<string[]>, leadService: LeadService) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const table = this.convertArrayToUpdate();
      leadService.moveCellLead(table);
    }
  }

  convertArrayToUpdate() {
    const arrLeads = this.tables.map((row: any[]) => {
      const cellsRow = row
        .map((element, index) => {
          if (element.length) {
            return { ...element[0], tableColumn: index };
          }
          return null;
        })
        .filter((element) => element !== null)[0];
      return cellsRow;
    });
    return arrLeads;
  }
}

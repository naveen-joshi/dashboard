import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-generator.component.html',
  styleUrl: './table-generator.component.scss'
})
export class TableGeneratorComponent {
  rows: number = 5;
  columns: number = 5;
  tableData: any[][] = [];
  editableStates!: boolean[][];

  generateTable() {
    this.tableData = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.columns }, (_, j) => ``)
    );

    this.editableStates = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.columns }, () => false)
    );

    return this.tableData;
  }

  addRow() {
    this.tableData.push(Array.from({ length: this.columns }, (_, j) => `Cell ${j + 1}`));
    this.editableStates.push(Array.from({ length: this.columns }, () => false));
  }

  addColumn() {
    this.tableData.forEach((row, i) => row.push(``));
    this.columns++;
    this.editableStates.forEach(row => row.push(false));
  }

  onCellDoubleClick(row: number, col: number) {
    this.editableStates[row][col] = !this.editableStates[row][col];
  }

}

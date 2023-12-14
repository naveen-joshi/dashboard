import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spreadsheet',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './spreadsheet.component.html',
  styleUrl: './spreadsheet.component.scss'
})
export class SpreadsheetComponent {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make', editable: true},
    { field: 'model', editable: true},
    { field: 'price', editable: true}
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}

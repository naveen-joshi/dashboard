import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { D3BarComponent } from './charts/d3-bar/d3-bar.component';
import { AgGridModule } from 'ag-grid-angular';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { TableComponent } from './data-table/table/table.component';
import { SheetListComponent } from './sheet-list/sheet-list.component';
import { TableGeneratorComponent } from './table-generator/table-generator.component';

@NgModule({
  declarations: [AppComponent, BarChartComponent, D3BarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    AgGridModule,
    SpreadsheetComponent,
    TableComponent,
    SheetListComponent,
    TableGeneratorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

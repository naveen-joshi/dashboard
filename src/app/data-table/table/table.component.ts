import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/domain/product';
import { TableModule } from 'primeng/table';
import { GuiCellEdit, GuiColumn, GuiGridModule, GuiPaging, GuiPagingDisplay } from '@generic-ui/ngx-grid';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { Subscription } from 'rxjs';
import { GuiSelectOption } from '@generic-ui/fabric';
import { DcDataService } from './dc-data.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, GuiGridModule, FormsModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  source: Array<any> = [];
  public columnName = '';

	columns: Array<GuiColumn> = [{
		header: 'Character',
		field: 'character'
	}];

	paging: GuiPaging = {
		enabled: true,
		display: GuiPagingDisplay.ADVANCED
	};

	headerList: Array<GuiSelectOption> = this.createColumnHeaderList();

	fieldList: Array<GuiSelectOption> = [
		{ name: 'index', value: 'index' },
		{ name: 'character', value: 'character' },
		{ name: 'name', value: 'name' },
		{ name: 'abilities', value: 'abilities' }
	];

	isBrowser = false;

	subscription!: Subscription;

	constructor(
				private dcDataService: DcDataService) {
	}

	ngOnInit() {
		this.subscription = this.dcDataService
								.getHeroes()
								.subscribe((heroes: any) => {
									this.source = heroes;
								});
	}

	ngOnDestroy() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	addColumn(): void {
		const column = {
			header: this.columnName,
			field: this.columnName
		};

		this.columns = [
			...this.columns,
			column
		];
		this.headerList = this.createColumnHeaderList();
    this.columnName = '';
	}

	removeColumn(headerName: string): void {
		const columns = [...this.columns];

		for (let i = 0; i < this.columns.length; i++) {
			if (this.columns[i].header === headerName) {
				columns.splice(i, 1);
				this.columns = [...columns];
			}
		}
		this.headerList = this.createColumnHeaderList();
	}

	editColumn(post: any): void {
		const columns = [...this.columns];

		for (let i = 0; i < this.columns.length; i++) {
			if (this.columns[i].header === post.selectedHeader) {
				this.columns[i].header = post.columnHeader;
				this.columns[i].field = post.columnField;
				this.columns[i].width = post.columnWidth;
				this.columns = [...columns];
			}
		}

		this.headerList = this.createColumnHeaderList();
	}

	private createColumnHeaderList(): Array<GuiSelectOption> {
		const list = [];

		for (let i = 0; i < this.columns.length; i++) {
			list.push(this.columns[i].header);
		}
		return list.map((headerElement: any) => {
			return { name: headerElement, value: headerElement };
		});
	}

  saveAsExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.source);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsFile(excelBuffer, 'table_data.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  }

  saveAsCSV(): void {
    const csvContent: string = this.convertArrayToCSV(this.source);
    this.saveAsFile([csvContent], 'table_data.csv', 'text/csv');
  }

  private saveAsFile(buffer: any, fileName: string, fileType: string): void {
    const data: Blob = new Blob([buffer], { type: fileType });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = fileName;
    link.click();
  }

  private convertArrayToCSV(data: any[]): string {
    const header = Object.keys(data[0]);
    const csv = [
      header.join(','),
      ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName])).join(','))
    ];

    return csv.join('\r\n');
  }

  addNewRow() {

  }

  addNewColumn() {

  }

  save() {

  }
}

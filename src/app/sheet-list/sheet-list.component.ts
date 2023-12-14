import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-sheet-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, DialogModule, BrowserAnimationsModule, FormsModule, InputTextModule, InputTextareaModule],
  templateUrl: './sheet-list.component.html',
  styleUrl: './sheet-list.component.scss'
})
export class SheetListComponent {
  public sheets = [
    {
      sheetName: 'Purchase order for Nokia Milehigh',
      status: 'Editable',
      createdBy: 'John Doe',
      createdOn: '12/12/2022',
      lastModifiedBy: 'John Doe',
      lastModifiedOn: '12/12/2022',
      note: 'Added 12 more items to this purchase order on Nov 16, 2023, Contact John for more details'
    },
    {
      sheetName: 'Purchase order for Nokia Milehigh',
      status: 'Editable',
      createdBy: 'John Doe',
      createdOn: '12/12/2022',
      lastModifiedBy: 'John Doe',
      lastModifiedOn: '12/12/2022',
      note: 'Added 12 more items to this purchase order on Nov 16, 2023, Contact John for more details'
    },
    {
      sheetName: 'Purchase order for Nokia Milehigh',
      status: 'Editable',
      createdBy: 'John Doe',
      createdOn: '12/12/2022',
      lastModifiedBy: 'John Doe',
      lastModifiedOn: '12/12/2022',
      note: 'Added 12 more items to this purchase order on Nov 16, 2023, Contact John for more details'
    },
    {
      sheetName: 'Purchase order for Nokia Milehigh',
      status: 'Editable',
      createdBy: 'John Doe',
      createdOn: '12/12/2022',
      lastModifiedBy: 'John Doe',
      lastModifiedOn: '12/12/2022',
      note: 'Added 12 more items to this purchase order on Nov 16, 2023, Contact John for more details'
    },
  ]

  public visible = false;
  public sheetName = '';
  public description = '';

  constructor() { }

  showDialog() {
    this.visible = true;
  }
}

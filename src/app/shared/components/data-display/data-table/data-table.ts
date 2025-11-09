import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TooltipModule, PaginatorModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTable {
  hasActionColumn() {
      throw new Error('Method not implemented.');
  }
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() loading: boolean = false;
  @Input() totalRecords: number = 0;
  @Input() rows: number = 10;
  @Input() currentPage: number = 0;
  @Input() selectionMode: 'single' | 'multiple' | null = null;
  @Input() selectedItems: any[] = [];

  @Output() pageChange = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();
  @Output() rowAction = new EventEmitter<RowActionEvent>();
  @Output() sortChange = new EventEmitter<any>();

  onPageChange(event: any): void {
    this.pageChange.emit(event);
  }

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event);
  }

  onRowAction(action: string, item: any): void {
    this.rowAction.emit({ action, item });
  }

  onSortChange(event: any): void {
    this.sortChange.emit(event);
  }

  getColspan() {

  }

  hasActions() {

  }

  isSelected(rowData: any) {

  }
}

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
  template?: 'actions' | 'boolean' | 'date' | 'currency';
}

export interface RowActionEvent {
  action: string;
  item: any;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-enhanced-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TooltipModule, PaginatorModule],
  templateUrl: './enhanced-table.html',
  styleUrl: './enhanced-table.scss'
})
export class EnhancedTable {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() loading: boolean = false;
  @Input() totalRecords: number = 0;
  @Input() rows: number = 10;
  @Input() selectionMode: 'single' | 'multiple' | null = null;
  @Input() selectedItems: any[] = [];
  @Input() actions: TableAction[] = [];

  @Output() pageChange = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();
  @Output() action = new EventEmitter<TableActionEvent>();
  @Output() sortChange = new EventEmitter<any>();

  onPageChange(event: any): void {
    this.pageChange.emit(event);
  }

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event);
  }

  onAction(actionName: string, item: any): void {
    this.action.emit({ action: actionName, item });
  }

  onSortChange(event: any): void {
    this.sortChange.emit(event);
  }

  hasActions(): boolean {
    return this.actions.length > 0;
  }

  getColspan(): number {
    let colspan = this.columns.length;
    if (this.selectionMode) colspan++;
    if (this.hasActions()) colspan++;
    return colspan;
  }
}

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
  template?: 'actions' | 'boolean' | 'date' | 'currency' | 'custom';
}

export interface TableAction {
  name: string;
  label: string;
  icon: string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
}

export interface TableActionEvent {
  action: string;
  item: any;
}

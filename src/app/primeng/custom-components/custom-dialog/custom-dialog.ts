import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './custom-dialog.html',
  styleUrl: './custom-dialog.scss'
})
export class CustomDialog {
  @Input() visible: boolean = false;
  @Input() header: string = '';
  @Input() width: string = '500px';
  @Input() modal: boolean = true;
  @Input() closable: boolean = true;
  @Input() closeOnEscape: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onHide = new EventEmitter<void>();
  @Output() onShow = new EventEmitter<void>();

  onVisibleChange(value: boolean): void {
    this.visible = value;
    this.visibleChange.emit(value);
  }

  onDialogHide(): void {
    this.onHide.emit();
  }

  onDialogShow(): void {
    this.onShow.emit();
  }

  close(): void {
    this.onVisibleChange(false);
  }
}

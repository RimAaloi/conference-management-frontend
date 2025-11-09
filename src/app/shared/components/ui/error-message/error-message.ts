import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './error-message.html',
  styleUrl: './error-message.scss'
})
export class Errormessage {
  @Input() title: string = 'Erreur';
  @Input() message: string = 'Une erreur est survenue.';
  @Input() type: 'error' | 'warning' | 'info' = 'error';
  @Input() showAction: boolean = false;
  @Input() actionText: string = 'Réessayer';
  @Input() actionIcon: string = 'pi pi-refresh';

  @Output() action = new EventEmitter<void>();

  getIconClass(): string {
    switch (this.type) {
      case 'error':
        return 'pi pi-times-circle';
      case 'warning':
        return 'pi pi-exclamation-triangle';
      case 'info':
        return 'pi pi-info-circle';
      default:
        return 'pi pi-times-circle';
    }
  }

  onAction(): void {
    this.action.emit();
  }
}

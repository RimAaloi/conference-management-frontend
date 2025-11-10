import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  timestamp: Date;
  action?: {
    label: string;
    callback: () => void;
  };
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([]);
  private nextId = 1;

  public notifications$ = this.notifications.asObservable();

  // ===== PUBLIC METHODS =====
  show(notification: Omit<Notification, 'id' | 'timestamp'>): number {
    const newNotification: Notification = {
      ...notification,
      id: this.nextId++,
      timestamp: new Date()
    };

    const currentNotifications = this.notifications.value;
    this.notifications.next([...currentNotifications, newNotification]);

    // Auto-remove si durée définie
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        this.remove(newNotification.id);
      }, newNotification.duration);
    }

    return newNotification.id;
  }

  success(title: string, message: string, duration?: number): number {
    return this.show({
      type: 'success',
      title,
      message,
      duration: duration || 5000
    });
  }

  error(title: string, message: string, duration?: number): number {
    return this.show({
      type: 'error',
      title,
      message,
      duration: duration || 10000
    });
  }

  warning(title: string, message: string, duration?: number): number {
    return this.show({
      type: 'warning',
      title,
      message,
      duration: duration || 7000
    });
  }

  info(title: string, message: string, duration?: number): number {
    return this.show({
      type: 'info',
      title,
      message,
      duration: duration || 5000
    });
  }

  // ===== MANAGEMENT METHODS =====
  remove(id: number): void {
    const currentNotifications = this.notifications.value;
    const filteredNotifications = currentNotifications.filter(
      notification => notification.id !== id
    );
    this.notifications.next(filteredNotifications);
  }

  clear(): void {
    this.notifications.next([]);
  }

  clearByType(type: Notification['type']): void {
    const currentNotifications = this.notifications.value;
    const filteredNotifications = currentNotifications.filter(
      notification => notification.type !== type
    );
    this.notifications.next(filteredNotifications);
  }

  // ===== GETTERS =====
  getNotifications(): Notification[] {
    return this.notifications.value;
  }

  getNotificationCount(): number {
    return this.notifications.value.length;
  }

  hasNotifications(): boolean {
    return this.notifications.value.length > 0;
  }

  // ===== UTILITY METHODS =====
  showApiSuccess(message: string = 'Opération réussie'): number {
    return this.success('Succès', message);
  }

  showApiError(error: any, defaultMessage: string = 'Une erreur est survenue'): number {
    const message = error?.message || error?.error?.message || defaultMessage;
    return this.error('Erreur', message);
  }

  showLoading(message: string = 'Chargement...'): number {
    return this.info('Chargement', message, 0); // 0 = pas de auto-remove
  }

  hideLoading(notificationId: number): void {
    this.remove(notificationId);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([]);
  private nextId = 1;

  public notifications$ = this.notifications.asObservable();

  show(notification: Omit<Notification, 'id' | 'timestamp'>): number {
    const newNotification: Notification = {
      ...notification,
      id: this.nextId++,
      timestamp: new Date()
    };

    const currentNotifications = this.notifications.value;
    this.notifications.next([...currentNotifications, newNotification]);

    // Auto-remove if duration is set
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

  getNotifications(): Notification[] {
    return this.notifications.value;
  }
}

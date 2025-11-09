import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Local Storage Methods
  setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  // Session Storage Methods
  setSessionItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to sessionStorage', error);
    }
  }

  getSessionItem<T>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from sessionStorage', error);
      return null;
    }
  }

  removeSessionItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clearSession(): void {
    sessionStorage.clear();
  }

  // Utility Methods
  hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  getKeys(): string[] {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i) as string);
    }
    return keys;
  }

  // Specific App Storage
  setUserPreferences(preferences: any): void {
    this.setItem('user_preferences', preferences);
  }

  getUserPreferences(): any {
    return this.getItem('user_preferences');
  }

  setAppSettings(settings: any): void {
    this.setItem('app_settings', settings);
  }

  getAppSettings(): any {
    return this.getItem('app_settings');
  }
}

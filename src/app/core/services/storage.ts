import { Injectable } from '@angular/core';

export type StorageType = 'local' | 'session';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // ===== LOCAL STORAGE =====
  setItem(key: string, value: any, storage: StorageType = 'local'): void {
    try {
      const serializedValue = JSON.stringify(value);
      this.getStorage(storage).setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving to ${storage}Storage`, error);
    }
  }

  getItem<T>(key: string, storage: StorageType = 'local'): T | null {
    try {
      const item = this.getStorage(storage).getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from ${storage}Storage`, error);
      return null;
    }
  }

  removeItem(key: string, storage: StorageType = 'local'): void {
    this.getStorage(storage).removeItem(key);
  }

  clear(storage: StorageType = 'local'): void {
    this.getStorage(storage).clear();
  }

  // ===== UTILITY METHODS =====
  hasItem(key: string, storage: StorageType = 'local'): boolean {
    return this.getStorage(storage).getItem(key) !== null;
  }

  getKeys(storage: StorageType = 'local'): string[] {
    const keys: string[] = [];
    const storageObj = this.getStorage(storage);

    for (let i = 0; i < storageObj.length; i++) {
      const key = storageObj.key(i);
      if (key) keys.push(key);
    }

    return keys;
  }

  getSize(storage: StorageType = 'local'): number {
    return this.getStorage(storage).length;
  }

  // ===== APP-SPECIFIC STORAGE =====
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

  setTableState(tableId: string, state: any): void {
    this.setItem(`table_state_${tableId}`, state);
  }

  getTableState(tableId: string): any {
    return this.getItem(`table_state_${tableId}`);
  }

  // ===== AUTH STORAGE (alias pour compatibilité) =====
  setAuthData(data: any): void {
    this.setItem('auth_data', data);
  }

  getAuthData(): any {
    return this.getItem('auth_data');
  }

  clearAuthData(): void {
    this.removeItem('auth_data');
    this.removeItem('access_token');
    this.removeItem('refresh_token');
    this.removeItem('user');
    this.removeItem('expires_at');
  }

  // ===== PRIVATE METHODS =====
  private getStorage(storage: StorageType): Storage {
    return storage === 'local' ? localStorage : sessionStorage;
  }
}

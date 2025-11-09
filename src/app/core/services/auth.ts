import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../shared/models/auth/user.model';
import { TokenResponse, AuthState } from '../../shared/models/auth/token.model'; // ✅ Correction ici
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<AuthState>({
    isAuthenticated: false,
    user: null,
    accessToken: null,
    refreshToken: null,
    expiresAt: null
  });

  public authState$ = this.authState.asObservable();

  constructor(
    private http: HttpClient,
    private config: Config
  ) {
    this.checkExistingAuth();
  }

  private checkExistingAuth(): void {
    // Vérifier si un token existe dans le storage
    const token = this.getStoredToken();
    if (token && !this.isTokenExpired(token)) {
      // TODO: Implémenter la vérification du token avec le backend
      this.authState.next({
        isAuthenticated: true,
        user: this.getStoredUser(),
        accessToken: token,
        refreshToken: this.getStoredRefreshToken(),
        expiresAt: this.getStoredExpiresAt()
      });
    }
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    // TODO: Implémenter la logique de connexion avec Keycloak
    const mockUser: User = {
      id: '1',
      username: credentials.username,
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe',
      roles: ['user'],
      isActive: true,
      createdAt: new Date()
    };

    const mockToken = 'mock-jwt-token';

    this.setAuthState({
      isAuthenticated: true,
      user: mockUser,
      accessToken: mockToken,
      refreshToken: 'mock-refresh-token',
      expiresAt: Date.now() + 3600000 // 1 heure
    });

    return new Observable(subscriber => {
      subscriber.next({ success: true });
      subscriber.complete();
    });
  }

  logout(): void {
    this.clearAuthState();
    // TODO: Rediriger vers la page de login
  }

  isAuthenticated(): boolean {
    return this.authState.value.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.authState.value.user;
  }

  getToken(): string | null {
    return this.authState.value.accessToken;
  }

  private setAuthState(state: AuthState): void {
    this.authState.next(state);
    this.storeAuthData(state);
  }

  private clearAuthState(): void {
    this.authState.next({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      expiresAt: null
    });
    this.clearStoredAuthData();
  }

  // Méthodes de stockage (localStorage)
  private storeAuthData(state: AuthState): void {
    localStorage.setItem('access_token', state.accessToken || '');
    localStorage.setItem('refresh_token', state.refreshToken || '');
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('expires_at', state.expiresAt?.toString() || '');
  }

  private clearStoredAuthData(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    localStorage.removeItem('expires_at');
  }

  private getStoredToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private getStoredRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  private getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  private getStoredExpiresAt(): number | null {
    const expiresAt = localStorage.getItem('expires_at');
    return expiresAt ? parseInt(expiresAt) : null;
  }

  private isTokenExpired(token: string): boolean {
    // TODO: Implémenter la vérification d'expiration du token
    return false;
  }
}

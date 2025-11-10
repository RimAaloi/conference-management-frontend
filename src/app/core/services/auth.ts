import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, LoginRequest, RegisterRequest } from '../../shared/models/auth/user.model';
import { TokenResponse, AuthState } from '../../shared/models/auth/token.model';
import { ConfigService } from './config';
import { NotificationService } from './notification';

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
      private config: ConfigService,
      private notification: NotificationService
  ) {
    this.checkExistingAuth();
  }

  private checkExistingAuth(): void {
    const token = this.getStoredToken();
    if (token && !this.isTokenExpired(token)) {
      const user = this.getStoredUser();
      this.authState.next({
        isAuthenticated: true,
        user,
        accessToken: token,
        refreshToken: this.getStoredRefreshToken(),
        expiresAt: this.getStoredExpiresAt()
      });
    }
  }

  login(credentials: LoginRequest): Observable<any> {
    // TODO: Remplacer par l'appel réel à Keycloak
    const mockUser: User = {
      id: '1',
      username: credentials.username,
      email: `${credentials.username}@example.com`,
      firstName: 'John',
      lastName: 'Doe',
      roles: ['user'],
      isActive: true,
      createdAt: new Date()
    };

    const mockToken = 'mock-jwt-token-' + Date.now();

    this.setAuthState({
      isAuthenticated: true,
      user: mockUser,
      accessToken: mockToken,
      refreshToken: 'mock-refresh-token',
      expiresAt: Date.now() + 3600000 // 1 heure
    });

    this.notification.success('Connexion', 'Connexion réussie !');

    return new Observable(subscriber => {
      subscriber.next({ success: true, user: mockUser });
      subscriber.complete();
    });
  }

  logout(): void {
    this.clearAuthState();
    this.notification.info('Déconnexion', 'Vous avez été déconnecté');
    // TODO: Rediriger vers la page de login
  }

  register(userData: RegisterRequest): Observable<any> {
    // TODO: Implémenter l'appel d'inscription
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next({ success: true });
        subscriber.complete();
      }, 1000);
    });
  }

  refreshToken(): Observable<any> {
    // TODO: Implémenter le refresh token
    return new Observable(subscriber => {
      subscriber.next({ success: true, token: 'new-token' });
      subscriber.complete();
    });
  }

  // Getters publics
  isAuthenticated(): boolean {
    return this.authState.value.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.authState.value.user;
  }

  getToken(): string | null {
    return this.authState.value.accessToken;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.roles.includes(role) : false;
  }

  // Méthodes privées de gestion d'état
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

  // Stockage localStorage
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
    // TODO: Implémenter la vérification d'expiration réelle
    const expiresAt = this.getStoredExpiresAt();
    return expiresAt ? Date.now() > expiresAt : true;
  }
}

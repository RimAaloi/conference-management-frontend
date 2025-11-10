import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

// 🎨 Composants Shared
import { HeaderComponent } from './shared/components/layout/header/header';
import { LoadingSpinnerComponent } from './shared/components/ui/loading-spinner/loading-spinner';
import { Errormessage } from './shared/components/ui/error-message/error-message';

// ⚡ Services
import { LoadingService } from './core/services/loading';
import { NotificationService } from './core/services/notification';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    LoadingSpinnerComponent,
    Errormessage
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Conference Management');

  // 🔄 État de l'application
  isLoading = signal(false);
  hasError = signal(false);
  errorMessage = signal('');

  constructor(
      private loadingService: LoadingService,
      private notificationService: NotificationService
  ) {
    this.setupGlobalListeners();
  }

  private setupGlobalListeners(): void {
    // Écouter l'état de chargement global
    this.loadingService.loading$.subscribe(loading => {
      this.isLoading.set(loading);
    });

    // Écouter les notifications globales (optionnel)
    this.notificationService.notifications$.subscribe(notifications => {
      // Tu peux gérer les notifications globales ici si besoin
    });
  }

  // Méthode pour gérer les erreurs globales
  handleGlobalError(message: string): void {
    this.hasError.set(true);
    this.errorMessage.set(message);
  }

  // Méthode pour effacer les erreurs
  clearError(): void {
    this.hasError.set(false);
    this.errorMessage.set('');
  }
}

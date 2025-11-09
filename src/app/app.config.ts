// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { PrimeNGProviders } from './primeng/config/primeng.config';
import { MessageService } from 'primeng/api';

// Import des interceptors (à créer ensuite)
// import { authInterceptor } from './core/interceptors/auth.interceptor';
// import { errorInterceptor } from './core/interceptors/error.interceptor';
// import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // 🔧 Configuration Angular de base
    provideZoneChangeDetection({ eventCoalescing: true }), // meilleure performance
    provideRouter(routes), // configuration du routing
    provideAnimations(), // animations Angular
    provideAnimationsAsync(), // animations async

    // 🌐 HTTP Client
    provideHttpClient(
      // withInterceptors([authInterceptor, errorInterceptor, loadingInterceptor])
    ),

    // 🎨 PrimeNG Configuration
    ...PrimeNGProviders,

    // 🔔 Services PrimeNG
    MessageService,

    // 🛡️ Services d'application (à ajouter)
    // ConfigService,
    // AuthService,
    // NotificationService
  ]
};

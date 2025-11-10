import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config = environment;

  // API URLs
  getGatewayUrl(): string {
    return this.config.gatewayUrl;
  }

  getKeynoteServiceUrl(): string {
    return this.config.keynoteServiceUrl || `${this.config.gatewayUrl}/keynotes`;
  }

  getConferenceServiceUrl(): string {
    return this.config.conferenceServiceUrl || `${this.config.gatewayUrl}/conferences`;
  }

  getReviewServiceUrl(): string {
    return `${this.config.gatewayUrl}/reviews`;
  }

  // Keycloak Configuration
  getKeycloakConfig() {
    return this.config.keycloak;
  }

  // Feature Flags
  isFeatureEnabled(feature: string): boolean {
    const features = this.config.features as Record<string, boolean>;
    return features[feature] || false;
  }

  // Environment
  isProduction(): boolean {
    return this.config.production;
  }

  getEnvironmentName(): string {
    return this.config.name;
  }

  // Debug
  isDebugEnabled(): boolean {
    return this.config.debug;
  }

  getLogLevel(): string {
    return this.config.logLevel;
  }

  // App Settings
  getAppName(): string {
    return 'Conference Management';
  }

  getAppVersion(): string {
    return '1.0.0';
  }

  // API Timeouts
  getApiTimeout(): number {
    return 30000; // 30 seconds
  }

  getRefreshTokenInterval(): number {
    return 300000; // 5 minutes
  }
}

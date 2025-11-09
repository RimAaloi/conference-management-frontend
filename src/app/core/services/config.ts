import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Config {
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

  // Keycloak Configuration
  getKeycloakConfig() {
    return this.config.keycloak;
  }

  // Feature Flags
  isFeatureEnabled(feature: string): boolean {
    return this.config.features[feature as keyof typeof this.config.features] || false;
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
}

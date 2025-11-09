export const environment = {
  production: false,
  name: 'development',

  // API URLs
  gatewayUrl: 'http://localhost:8080',
  keynoteServiceUrl: 'http://localhost:8081',
  conferenceServiceUrl: 'http://localhost:8082',

  // Keycloak Configuration
  keycloak: {
    url: 'http://localhost:8083/auth',
    realm: 'conference-realm',
    clientId: 'conference-frontend'
  },

  // Feature Flags
  features: {
    auth: true,
    analytics: false,
    export: true
  },

  // Debug
  debug: true,
  logLevel: 'debug'
};

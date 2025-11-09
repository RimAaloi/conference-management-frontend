export const environment = {
  production: false,
  name: 'dev',

  // API URLs
  gatewayUrl: 'http://localhost:8080',
  keynoteServiceUrl: 'http://localhost:8082',
  conferenceServiceUrl: 'http://localhost:8083',

  // Keycloak Configuration
  keycloak: {
    url: 'http://localhost:8081/auth',
    realm: 'conference-realm',
    clientId: 'conference-frontend'
  },

  // Feature Flags
  features: {
    auth: true,
    analytics: true,
    export: true,
    mockData: true
  },

  // Debug
  debug: true,
  logLevel: 'verbose'
};

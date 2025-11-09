export const environment = {
  production: true,
  name: 'production',

  // API URLs
  gatewayUrl: 'https://api.conference-management.com',
  keynoteServiceUrl: 'https://api.conference-management.com/keynotes',
  conferenceServiceUrl: 'https://api.conference-management.com/conferences',

  // Keycloak Configuration
  keycloak: {
    url: 'https://auth.conference-management.com/auth',
    realm: 'conference-realm',
    clientId: 'conference-frontend'
  },

  // Feature Flags
  features: {
    auth: true,
    analytics: true,
    export: true
  },

  // Debug
  debug: false,
  logLevel: 'error'
};

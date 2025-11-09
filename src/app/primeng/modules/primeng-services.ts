// Export centralisé des services PrimeNG
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

export const PRIMENG_SERVICES = [
  MessageService,
  ConfirmationService
];

export { MessageService, ConfirmationService };

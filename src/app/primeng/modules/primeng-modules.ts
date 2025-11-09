// Export centralisé de tous les modules PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TabsModule } from 'primeng/tabs';
import { ChartModule } from 'primeng/chart';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';

// Export groupé par catégorie
export const PRIMENG_FORM_MODULES = [
  InputTextModule,
  Select,
  DatePicker,
  RatingModule,
  FileUploadModule,
  MultiSelectModule
];

export const PRIMENG_DATA_MODULES = [
  TableModule,
  PaginatorModule,
  ChartModule
];

export const PRIMENG_OVERLAY_MODULES = [
  DialogModule,
  ToastModule,
  TooltipModule
];

export const PRIMENG_BUTTON_MODULES = [
  ButtonModule,
  CardModule
];

export const PRIMENG_FEEDBACK_MODULES = [
  ProgressSpinnerModule,
  MessageModule
];

export const PRIMENG_LAYOUT_MODULES = [
  TabsModule
];

// Export de tous les modules
export const ALL_PRIMENG_MODULES = [
  ...PRIMENG_BUTTON_MODULES,
  ...PRIMENG_FORM_MODULES,
  ...PRIMENG_DATA_MODULES,
  ...PRIMENG_OVERLAY_MODULES,
  ...PRIMENG_FEEDBACK_MODULES,
  ...PRIMENG_LAYOUT_MODULES
];

import { Routes } from '@angular/router';
import { KeynoteList } from './components/keynote-list/keynote-list';
import { KeynoteDetail } from './components/keynote-detail/keynote-detail';
import { KeynoteForm } from './components/keynote-form/keynote-form';

export const KEYNOTE_ROUTES: Routes = [
  { path: '', component: KeynoteList },
  { path: 'new', component: KeynoteForm },
  { path: ':id', component: KeynoteDetail },
  { path: ':id/edit', component: KeynoteForm }
];

import { Routes } from '@angular/router';
import { ConferenceList } from './components/conference-list/conference-list';
import { ConferenceDetail } from './components/conference-detail/conference-detail';
import { ConferenceForm } from './components/conference-form/conference-form';

export const CONFERENCE_ROUTES: Routes = [
  { path: '', component: ConferenceList},
  { path: 'new', component: ConferenceForm },
  { path: ':id', component: ConferenceDetail },
  { path: ':id/edit', component: ConferenceForm }
];

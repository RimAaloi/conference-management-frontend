import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Logout } from './components/logout/logout';
import { Profile } from './components/profile/profile';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: Login },
  { path: 'logout', component: Logout },
  { path: 'profile', component: Profile },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

import { provideRouter, RouterConfig } from '@angular/router';
import { ProfileComponent } from './app/profile/profile.component';

export const routes: RouterConfig = [
  { path: 'profile', component: ProfileComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
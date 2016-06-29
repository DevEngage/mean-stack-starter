import { provideRouter, RouterConfig } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent, terminal: true },
  { path: 'profile', component: ProfileComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
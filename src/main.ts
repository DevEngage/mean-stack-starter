import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MeansStackAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(MeansStackAppComponent, [
  APP_ROUTER_PROVIDERS
])
  .catch(err => console.error(err));


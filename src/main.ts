import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MeansStackAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MeansStackAppComponent);


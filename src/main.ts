import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AlarmsAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AlarmsAppComponent);


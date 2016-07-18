// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';


// bootstrap is used to start the application. It is not css related. 
import { bootstrap }          from '@angular/platform-browser-dynamic';
// Https is not a core provider
import { HTTP_PROVIDERS } from '@angular/http';

// Get the app Compononent
import { AppComponent }       from './app.component';
// Tell the main app about the routing. 
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);
// bootstrap is used to start the application. It is not css related. 
import { bootstrap }          from '@angular/platform-browser-dynamic';
// Get the app Compononent
import { AppComponent }       from './app.component';
// Tell the main app about the routing. 
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders
]);
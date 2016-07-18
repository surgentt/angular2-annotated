"use strict";
// bootstrap is used to start the application. It is not css related. 
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Get the app Compononent
var app_component_1 = require('./app.component');
// Tell the main app about the routing. 
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders
]);

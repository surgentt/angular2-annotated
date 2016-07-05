import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [
	{
	  path: 'dashboard',
	  component: DashboardComponent
	},
	{
    path: 'heroes',
    component: HeroesComponent
  },
	{
	  path: '',
	  redirectTo: '/dashboard'
	},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
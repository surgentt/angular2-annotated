import { provideRouter, RouterConfig }  from '@angular/router';
// Include Components in the routes
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

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
  	path: 'detail/:id',
  	component: HeroDetailComponent
	},
	{
	  path: '',
	  redirectTo: '/dashboard'
	},
];

export const appRouterProviders = [
  provideRouter(routes)
];
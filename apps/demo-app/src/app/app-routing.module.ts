import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { LoginPage } from './modules/auth/pages/login.page';

const routes: Routes = [
	{
		component: LoginPage,
		path: 'login',
	},
	{
		path: '',
		component: DashboardComponent,
		canActivate: [AuthGuard],
	},
	// TODO: Add NotFoundPage
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}

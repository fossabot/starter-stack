import { Component } from '@angular/core';
import { AuthStoreFacade } from './store/facades/auth-store-facade.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'demo-app';

	public constructor(private authStoreFacade: AuthStoreFacade) {}

	public test($event: Event): void {
		this.authStoreFacade.login();
	}
}

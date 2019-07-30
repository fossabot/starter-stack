import { Component } from '@angular/core';
import { Hello } from '@workspace/model';
import { AuthStoreFacade } from './store/facades/auth-store-facade.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'demo-app';

	public constructor(private authStoreFacade: AuthStoreFacade) {}

	public test(_: Event): void {
		const h: Hello = { world: '' };
		console.log(h);
		this.authStoreFacade.login();
	}
}

import { Component } from '@angular/core';
import { User } from '@workspace/model';
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
		const h: User = { id: 1, name: 'asd' };
		console.log(h);
		this.authStoreFacade.login();
	}
}

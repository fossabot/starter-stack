import { Component } from '@angular/core';
import { environment } from '@env';
import { User } from '@workspace/model';
import { AuthStoreFacade } from './store/facades/auth-store-facade.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'demo-app';

	public version = environment.version;

	public constructor(private authStoreFacade: AuthStoreFacade) {}

	public test(_: Event): void {
		const h: Partial<User> = { id: 1, username: 'asd', password: 'asd' };
		console.log(h);
		this.authStoreFacade.login();
	}
}

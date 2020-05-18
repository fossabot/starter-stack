import { Component } from '@angular/core';
import { environment } from '@env';
import { User } from '@workspace/model';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'demo-app';

	public version = environment.version;

	public constructor() {}

	public test(_: Event): void {
		const h: Partial<User> = { id: 1, username: 'asd', password: 'asd' };
		console.log(h);
	}
}

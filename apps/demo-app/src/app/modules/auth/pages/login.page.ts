import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginFormData } from '../forms/login.form';
import { AuthStoreFacade } from '../store/facades/auth-store-facade.service';

@Component({
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
	public isLoading$ = this.authStoreFacade.isLoading$;
	public accessToken$ = this.authStoreFacade.accessToken$;

	public constructor(private readonly authStoreFacade: AuthStoreFacade) {}

	public ngOnInit(): void {}

	public login($event: LoginFormData): void {
		console.log('Login form submitted', $event);
		this.authStoreFacade.login($event.username, $event.password);
	}
}

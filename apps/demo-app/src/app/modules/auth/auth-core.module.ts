import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { environment } from '@env';
import { take } from 'rxjs/operators';
import { AuthStoreModule, TokenStoreFacade } from './store';

/**
 * TODO: JwtModuleOptions should be settable from AuthModule.forRoot()
 */
export const jwtOptionsFactory = (tokenStoreFacade: TokenStoreFacade) => ({
	tokenGetter: () => tokenStoreFacade.accessToken$.pipe(take(1)).toPromise(),
	blacklistedRoutes: [`${environment.api}/auth/refresh`],
	whitelistedDomains: [environment.domain],
});

@NgModule({
	imports: [
		CommonModule,
		AuthStoreModule,
		JwtModule.forRoot({
			config: {},
			jwtOptionsProvider: {
				provide: JWT_OPTIONS,
				useFactory: jwtOptionsFactory,
				deps: [TokenStoreFacade],
			},
		}),
	],
})
export class AuthCoreModule {
	public constructor(@Optional() @SkipSelf() private readonly parentModule: AuthCoreModule) {
		if (this.parentModule) {
			throw new Error('AuthCoreModule already loaded.');
		}
	}
}

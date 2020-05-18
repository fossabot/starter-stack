import { Injectable } from '@angular/core';
import { AppState } from '@app/store/reducers';
import { JwtHelperService } from '@auth0/angular-jwt';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { login } from '../actions';
import { AuthStoreModule } from '../auth-store.module';
import { authSelectors } from '../selectors';

@Injectable({
	providedIn: AuthStoreModule,
})
export class AuthStoreFacade {
	public isLoading$ = this.store.pipe(select(authSelectors.isLoading));
	public accessToken$ = this.store.pipe(select(authSelectors.accessToken));
	public refreshToken$ = this.store.pipe(select(authSelectors.refreshToken));
	public isRefreshing$ = this.store.pipe(select(authSelectors.isRefreshing));
	public isAccessTokenExpired$ = this.accessToken$.pipe(
		tap((a) => console.log('fewfwefwe', a)),
		map((token) => this.jwtHelperService.isTokenExpired(undefined))
	);
	public isRefreshTokenExpired$ = this.refreshToken$.pipe(
		map((token) => this.jwtHelperService.isTokenExpired(token))
	);

	public constructor(
		private readonly store: Store<AppState>,
		private readonly jwtHelperService: JwtHelperService
	) {
		console.log('AuthStoreFacade initialized!');
	}

	public login(username: string, password: string): void {
		this.store.dispatch(
			login({
				payload: {
					username,
					password,
				},
			})
		);
	}
}

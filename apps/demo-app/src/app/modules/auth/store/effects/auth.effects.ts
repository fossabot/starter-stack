import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '@app/modules/auth/services/auth-api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
	AuthActions,
	login,
	loginFailure,
	loginSuccess,
	logout,
	logoutFailure,
	logoutSuccess,
} from '../actions';

@Injectable()
export class AuthEffects {
	public constructor(
		private actions$: Actions<AuthActions>,
		private auth: AuthApiService,
		private router: Router
	) {}

	@Effect()
	public login$ = this.actions$.pipe(
		ofType(login.type),
		tap((a) => void console.log('a', a)),
		switchMap(({ payload }) =>
			this.auth.login(payload).pipe(
				map((response) => loginSuccess({ payload: response })),
				catchError((error) => {
					console.log(error);
					return of(loginFailure({ payload: error.message }));
				})
			)
		)
	);

	/**
	 * TODO: Make the loginredirect configurable!
	 */
	@Effect({ dispatch: false })
	public loginSuccessRedirect$ = this.actions$.pipe(
		ofType(loginSuccess.type),
		switchMap(() => this.router.navigate(['/']))
	);

	@Effect()
	public logoutBlacklist$ = this.actions$.pipe(
		ofType(logout.type),
		switchMap(() =>
			this.auth.logout().pipe(
				map(() => logoutSuccess()),
				catchError((error) => {
					return of(logoutFailure({ payload: error }));
				})
			)
		)
	);

	/**
	 * TODO: Make the logoutredirect configurable!
	 */
	@Effect({ dispatch: false })
	public logoutSuccessRedirect$ = this.actions$.pipe(
		ofType(logoutSuccess.type),
		switchMap(() => from(this.router.navigate(['/login'])))
	);

	// @Effect()
	// public refresh$ = this.actions$.pipe(
	// 	ofType(refresh.type),
	// 	mergeMap(() => this.authStoreFacade.plainRefreshToken$.pipe(take(1))),
	// 	mergeMap(refreshToken =>
	// 		refreshToken === undefined ? throwError('Refresh token does not exist') : of(refreshToken)
	// 	),
	// 	switchMap(refreshToken =>
	// 		this.auth.refresh({ refreshToken }).pipe(
	// 			map(response => refreshSuccess({ payload: response })),
	// 			catchError(error => of(refreshFailure({ payload: error })))
	// 		)
	// 	)
	// );
}

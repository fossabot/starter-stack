import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '@app/core/modules/auth/services/auth-api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthActions, login, loginFailure, loginSuccess, logout, logoutFailure, logoutSuccess } from '../actions';

/**
 * Auth effects
 */
@Injectable()
export class AuthEffects {
	public constructor(private actions$: Actions<AuthActions>, private auth: AuthApiService, private router: Router) {}

	@Effect()
	public login$ = this.actions$.pipe(
		ofType(login.type),
		switchMap(({ payload }) =>
			this.auth.login(payload).pipe(
				map(response => loginSuccess({ payload: response })),
				catchError(error => of(loginFailure({ payload: error })))
			)
		)
	);

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
				catchError(error => of(logoutFailure({ payload: error })))
			)
		)
	);

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

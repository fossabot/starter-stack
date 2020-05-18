import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot,
	UrlSegment,
	UrlTree,
} from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthModule } from '../auth.module';
import { AuthStoreFacade } from '../store';

@Injectable({
	providedIn: AuthModule,
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
	public constructor(
		private readonly router: Router,
		private readonly authStoreFacade: AuthStoreFacade
	) {}

	public canActivate(
		_next: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return combineLatest([
			this.authStoreFacade.isAccessTokenExpired$,
			this.authStoreFacade.isRefreshTokenExpired$,
		]).pipe(
			take(1),
			map(([isAccessTokenExpired, isRefreshTokenExpired]) => {
				console.log('Auth Guard', isAccessTokenExpired, isRefreshTokenExpired);
				// If both tokens are expired, or non-existent, redirect to login.
				if (isAccessTokenExpired && isRefreshTokenExpired) {
					return this.router.parseUrl('/login');
				} else {
					return true;
				}
			})
		);
	}
	public canActivateChild(
		_next: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return true;
	}
	public canLoad(
		_route: Route,
		_segments: UrlSegment[]
	): Observable<boolean> | Promise<boolean> | boolean {
		return true;
	}
}

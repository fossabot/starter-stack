import { Injectable } from '@angular/core';
import { AppState } from '@app/store/reducers';
import { select, Store } from '@ngrx/store';
import { AuthStoreModule } from '../auth-store.module';
import { authSelectors } from '../selectors';

/**
 * Separate from the AuthStoreFacade, to be used with the JwtModule and
 * to avoid unnecessary circular imports
 */
@Injectable({
	providedIn: AuthStoreModule,
})
export class TokenStoreFacade {
	public accessToken$ = this.store.pipe(select(authSelectors.accessToken));
	public refreshToken$ = this.store.pipe(select(authSelectors.refreshToken));

	public constructor(private readonly store: Store<AppState>) {}
}

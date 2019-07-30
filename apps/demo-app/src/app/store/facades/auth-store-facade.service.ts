import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../actions';
import { AppStoreModule } from '../app-store.module';
import { AppState } from '../reducers';

@Injectable({
	providedIn: AppStoreModule
})
export class AuthStoreFacade {
	public constructor(private store: Store<AppState>) {}

	public login(): void {
		this.store.dispatch(login({ payload: {} }));
	}
}

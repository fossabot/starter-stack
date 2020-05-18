import { NgModule } from '@angular/core';
import { environment } from '@env';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppActions } from './actions';
import { AppState, metaReducers, reducers } from './reducers';

@NgModule({
	imports: [
		StoreModule.forRoot<AppState, AppActions>(reducers, {
			metaReducers,
			runtimeChecks: {
				strictActionWithinNgZone: !environment.production,
				strictStateImmutability: !environment.production,
				strictActionImmutability: !environment.production,
				strictStateSerializability: !environment.production,
				strictActionSerializability: !environment.production,
			},
		}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot({
			// TODO: Full only works if strict serializability checks are disabled
			routerState: RouterState.Minimal,
		}),
		StoreDevtoolsModule.instrument({ logOnly: environment.production }),
	],
})
export class AppStoreModule {}

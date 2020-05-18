import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './effects';
import { authFeatureReducers, AUTH_FEATURE_KEY } from './reducers';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		JwtModule,
		StoreModule.forFeature(AUTH_FEATURE_KEY, authFeatureReducers),
		EffectsModule.forFeature([AuthEffects]),
	],
})
export class AuthStoreModule {}

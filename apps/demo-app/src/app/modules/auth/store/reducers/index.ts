import { ActionReducerMap } from '@ngrx/store';
import { AuthFeatureActions } from '../actions';
import { authReducer, AuthState } from './auth.reducer';

export const AUTH_FEATURE_KEY = 'authFeature';

export interface AuthFeatureState {
	auth: AuthState;
}

export const authFeatureReducers: ActionReducerMap<AuthFeatureState, AuthFeatureActions> = {
	auth: authReducer,
};

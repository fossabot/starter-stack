import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppActions } from '../actions';
import { authReducer, AuthState } from './auth.reducer';

export interface AppState {
	router: RouterReducerState;
	auth: AuthState;
}

export const reducers: ActionReducerMap<AppState, AppActions> = {
	router: routerReducer,
	auth: authReducer
};

export * from './meta.reducer';

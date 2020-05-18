import { AuthFeatureState } from '@app/modules/auth/store/reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppActions } from '../actions';

export interface AppState {
	router: RouterReducerState;
	auth?: AuthFeatureState;
}

export const reducers: ActionReducerMap<AppState, AppActions> = {
	router: routerReducer,
};

export * from './meta.reducer';

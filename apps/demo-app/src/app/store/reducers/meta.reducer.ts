import { environment } from '@env';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from '.';
import { AppActions } from '../actions';

export function logger(
	reducer: ActionReducer<AppState, AppActions>
): ActionReducer<AppState, AppActions> {
	return (state: AppState | undefined, action: AppActions): AppState => {
		const result = reducer(state, action);
		console.groupCollapsed(action.type);
		console.log('prev state', state);
		console.log('action', action);
		console.log('next state', result);
		console.groupEnd();
		return result;
	};
}

const persistent = ['view', 'auth'];

export function localStorageSyncReducer(
	reducer: ActionReducer<AppState, AppActions>
): ActionReducer<AppState, AppActions> {
	return localStorageSync({ keys: persistent, rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<AppState, AppActions>[] = [
	localStorageSyncReducer,
	...(!environment.production ? [logger] : []),
];

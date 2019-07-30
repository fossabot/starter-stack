import { createReducer, on } from '@ngrx/store';
import {
	AuthActions,
	login,
	loginFailure,
	loginSuccess,
	logout,
	logoutFailure,
	logoutSuccess,
	refresh,
	refreshFailure,
	refreshSuccess,
	setLoading
} from '../actions';

export const AUTH_FEATURE_STATE_ID = 'auth';
export interface AuthState {
	accessToken?: string;
	refreshToken?: string;
	loading: boolean;
	refreshing: boolean;
}

/**
 * Initial state
 */
export const initialAuthState: AuthState = {
	loading: false,
	refreshing: false
};

const reducer = createReducer(
	initialAuthState,
	on(login, state => ({ ...state, loading: true })),
	on(loginSuccess, (state, _) => ({
		...state,
		loading: false
	})),
	on(loginFailure, state => ({ ...state, loading: false })),
	on(refresh, state => ({ ...state, refreshing: true })),
	on(refreshSuccess, (state, _) => ({ ...state, refreshing: false })),
	on(refreshFailure, state => ({ ...state, refreshing: false })),
	on(logout, state => ({ ...state, loading: true })),
	on(logoutSuccess, logoutFailure, state => ({
		...state,
		loading: false,
		accessToken: undefined,
		refreshToken: undefined
	})),
	on(setLoading, (state, { payload }) => ({ ...state, loading: payload, refreshing: payload }))
);

export function authReducer(state: AuthState | undefined, action: AuthActions): AuthState {
	return reducer(state, action);
}

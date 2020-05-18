import { createReducer, on } from '@ngrx/store';
import {
	login,
	loginFailure,
	loginSuccess,
	logout,
	logoutFailure,
	logoutSuccess,
	refresh,
	refreshFailure,
	refreshSuccess,
	setLoading,
} from '../actions';

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
	refreshing: false,
};

export const authReducer = createReducer(
	initialAuthState,
	on(login, (state) => ({ ...state, loading: true })),
	on(loginSuccess, (state, _) => ({
		...state,
		loading: false,
	})),
	on(loginFailure, (state) => ({ ...state, loading: false })),
	on(refresh, (state) => ({ ...state, refreshing: true })),
	on(refreshSuccess, (state, _) => ({ ...state, refreshing: false })),
	on(refreshFailure, (state) => ({ ...state, refreshing: false })),
	on(logout, (state) => ({ ...state, loading: true })),
	on(logoutSuccess, logoutFailure, (state) => ({
		...state,
		loading: false,
		accessToken: undefined,
		refreshToken: undefined,
	})),
	on(setLoading, (state, { payload }) => ({ ...state, loading: payload, refreshing: payload }))
);

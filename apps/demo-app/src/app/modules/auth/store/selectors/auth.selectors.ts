import { AppState } from '@app/store/reducers';
import { createSelector } from '@ngrx/store';

const selectAuthFeature = (state: AppState) => state.auth;

const selectAuthState = createSelector(selectAuthFeature, (state) => state?.auth);

const accessToken = createSelector(selectAuthState, (state) => state?.accessToken);
const refreshToken = createSelector(selectAuthState, (state) => state?.refreshToken);
const isRefreshing = createSelector(selectAuthState, (state) => state?.refreshing);
const isLoading = createSelector(selectAuthState, (state) => state?.loading);

export const authSelectors = {
	accessToken,
	refreshToken,
	isRefreshing,
	isLoading,
};

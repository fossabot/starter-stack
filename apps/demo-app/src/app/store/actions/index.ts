import { createAction, union } from '@ngrx/store';
import * as authActions from './auth.actions';
import * as viewActions from './view.actions';

const allAuthActions = union(authActions);
const allViewActions = union(viewActions);

export type AuthActions = typeof allAuthActions;
export type ViewActions = typeof allViewActions;
export type AppActions = AuthActions & ViewActions;

export * from './auth.actions';
export * from './view.actions';

export const voidOperation = createAction(`[Void]`, () => ({}));

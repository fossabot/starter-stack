import { union } from '@ngrx/store';
import * as authActions from './auth.actions';

const allAuthActions = union(authActions);

export type AuthActions = typeof allAuthActions;
export type AuthFeatureActions = AuthActions;

export * from './auth.actions';

import { createAction, union } from '@ngrx/store';
import * as viewActions from './view.actions';

const allViewActions = union(viewActions);

export type ViewActions = typeof allViewActions;
export type AppActions = ViewActions;

export * from './view.actions';

export const voidOperation = createAction(`[Void]`, () => ({}));

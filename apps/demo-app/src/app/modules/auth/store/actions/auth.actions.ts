import { Payload } from '@app/model/payload.interface';
import { createAction } from '@ngrx/store';
import { LoginRequest, LoginResponse, RefreshResponse } from '@workspace/demo-server-api';

export const login = createAction(
	`[Auth] Login`,
	(payload: Payload<LoginRequest>): Payload<LoginRequest> => payload
);

export const loginSuccess = createAction(
	`[Auth] Login Success`,
	(payload: Payload<LoginResponse>): Payload<LoginResponse> => payload
);

export const loginFailure = createAction(
	`[Auth] Login Failure`,
	(payload: Payload<Error>): Payload<Error> => payload
);

export const refresh = createAction(`[Auth] Refresh`);

export const refreshSuccess = createAction(
	`[Auth] Refresh Success`,
	(payload: Payload<RefreshResponse>): Payload<RefreshResponse> => payload
);

export const refreshFailure = createAction(
	`[Auth] Refresh Failure`,
	(payload: Payload<Error>): Payload<Error> => payload
);

export const logout = createAction(`[Auth] Logout`);

export const logoutSuccess = createAction(`[Auth] Logout Success`);

export const logoutFailure = createAction(
	`[Auth] Logout Failure`,
	(payload: Payload<Error>): Payload<Error> => payload
);

export const setLoading = createAction(
	`[Auth] Set Loading`,
	(payload: Payload<boolean>): Payload<boolean> => payload
);

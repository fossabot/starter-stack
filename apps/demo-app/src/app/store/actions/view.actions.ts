import { Payload } from '@app/model/payload.interface';
import { createAction } from '@ngrx/store';

export const setTitle = createAction(`[View] Set Title`, (payload: Payload<string>): Payload<string> => payload);

export const setTheme = createAction(`[View] Set Theme`, (payload: Payload<string>): Payload<string> => payload);

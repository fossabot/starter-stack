import { User } from '@workspace/model';

export interface LoginResult {
	tokens: TokenPair;
}

export type Token = string;
export type AccessToken = Token;
export type RefreshToken = Token;

export enum TokenType {
	ACCESS_TOKEN = 'ACCESS_TOKEN',
	REFRESH_TOKEN = 'REFRESH_TOKEN',
}

export interface TokenPair {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

export interface TokenPayload {
	user: User;
}

import { GenericRequest } from '@app/typings';
import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthService } from '../features/jwt/services/jwt-auth.service';

export const AUTH_META_KEY = 'auth';
export const PUBLIC_ENDPOINT_DENOTATOR = 'public';
// export const PrivateEndpoint = () => SetMetadata('auth', ['private']);
export const PublicEndpoint = () => SetMetadata(AUTH_META_KEY, [PUBLIC_ENDPOINT_DENOTATOR]);

/**
 * This global guard ensures that every endpoint (that is not marked explicitly `public`
 * by the @PublicEndpoint decorator) is only accessable with a valid bearer token
 */
@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly jwtAuthService: JwtAuthService, private readonly reflector: Reflector) {}
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request: GenericRequest = context.switchToHttp().getRequest();
		const authMetadata = this.reflector.get<string[]>(AUTH_META_KEY, context.getHandler());
		console.log('Auth Guard', authMetadata);
		if (authMetadata && authMetadata.some(m => m === PUBLIC_ENDPOINT_DENOTATOR)) {
			console.log('PUBLIC ENDPOINT!');
		} else if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
			console.log(request.headers.authorization);
			try {
				const res = await this.jwtAuthService.validateToken(request.headers.authorization.replace('Bearer ', '')[1]);

				console.log('res', res);
			} catch (e) {
				console.log('Token Error');
			}
		} else {
			console.log('No token');
		}
		return true;
	}
}

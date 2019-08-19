import { MetaService } from '@app/features/meta/services/meta.service';
import { GenericRequest } from '@app/typings';
import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { AuthenticationError } from '../errors';
import { JwtAuthService } from '../features/jwt/services/jwt-auth.service';

export const TOKEN_PREFIX = 'Bearer ';
export const AUTH_META_KEY = 'auth';
export const PUBLIC_ENDPOINT_DENOTATOR = 'public';
// export const PrivateEndpoint = () => SetMetadata('auth', ['private']);
export const PublicEndpoint = () => SetMetadata<string, string[]>(AUTH_META_KEY, [PUBLIC_ENDPOINT_DENOTATOR]);

/**
 * This global guard ensures that every endpoint (that is not marked explicitly `public`
 * by the @PublicEndpoint decorator) is only accessable with a valid bearer token
 */
@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly jwtAuthService: JwtAuthService, private readonly metaService: MetaService) {}
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const allMetadata = this.metaService.retrieve(context, AUTH_META_KEY);
		const request: GenericRequest = context.switchToHttp().getRequest();
		if (allMetadata.some(m => m === PUBLIC_ENDPOINT_DENOTATOR)) {
			return true;
		} else if (request.headers.authorization && request.headers.authorization.startsWith(TOKEN_PREFIX)) {
			try {
				return !!(await this.jwtAuthService.validateToken(request.headers.authorization.replace(TOKEN_PREFIX, '')));
			} catch (e) {
				throw new AuthenticationError(e.message);
			}
		} else throw new AuthenticationError('Missing token');
	}
}

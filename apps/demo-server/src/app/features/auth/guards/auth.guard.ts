import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { Observable } from 'rxjs';

export const Auth = () => SetMetadata('auth', ['login']);

@Injectable()
export class AuthGuard implements CanActivate {
	public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		console.log('Auth Guard', request, context);
		return true;
	}
}

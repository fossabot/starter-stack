import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export const Role = (...roles: string[]) => SetMetadata('roles', roles);

/**
 * TODO: make it more sophisticated, throw specific exceptions about missing roles
 */
@Injectable()
export class RoleGuard implements CanActivate {
	public constructor(private readonly reflector: Reflector) {}
	public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const roles = this.reflector.get<string[]>('roles', context.getHandler());
		if (!roles) {
			return true;
		}
		const request = context.switchToHttp().getRequest();
		const user = request.user;
		console.log('Role Guard', user);
		const hasRole = () => user.roles.some((role: string) => roles.includes(role));
		return user && user.roles && hasRole();
	}
}

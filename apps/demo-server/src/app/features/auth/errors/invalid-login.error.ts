import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginFailedError extends HttpException {
	constructor(reasons: string[]) {
		super(
			{
				error: 'Password is not correct',
				reasons
			},
			HttpStatus.FORBIDDEN
		);
	}
}

import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthenticationError extends HttpException {
	public constructor(...reasons: string[]) {
		super(
			{
				error: 'Authenticaton required',
				reasons
			},
			HttpStatus.FORBIDDEN
		);
	}
}

import { environment } from '@env';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@workspace/model';
import { SignOptions } from 'jsonwebtoken';
@Injectable()
export class JwtAuthService {
	private options: SignOptions = {
		...environment.authentication.signOptions
	};

	public constructor(private readonly jwtService: JwtService) {}

	public generateToken(user: User): string {
		console.log(user);
		return this.jwtService.sign({ user }, this.options);
	}
}

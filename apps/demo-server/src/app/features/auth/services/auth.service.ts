import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from '../../../repository/user/user-repository.service';

@Injectable()
export class AuthService {
	public constructor(private userRepositoryService: UserRepositoryService) {}
}

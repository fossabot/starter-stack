import { AppModule } from '@app/app.module';
import { BCryptService } from '@app/features/auth/features/bcrypt/services/crypt.service';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { IUser, User } from '@workspace/model';
import { getRepositoryToken } from 'nestjs-mikro-orm';
import * as request from 'supertest';

export type MockType<T> = {
	[P in keyof T]: jest.Mock<{}>;
};

describe('Auth', () => {
	let app: INestApplication;
	let bCryptService: BCryptService;

	beforeAll(async () => {
		bCryptService = new BCryptService();
		const module = await Test.createTestingModule({
			imports: [AppModule],
		})
			.overrideProvider(getRepositoryToken(User))
			.useValue({
				findOne: jest.fn(async (entity: User) => {
					if (entity.username === 'admin') {
						return {
							...entity,
							password: await bCryptService.encrypt('correctPassword'),
						};
					} else return undefined;
				}),
			})
			.compile();
		console.log('Beforall login');
		app = module.createNestApplication();
		await app.init();
	});

	it(`[Login] Correct`, () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ username: 'admin', password: 'correctPassword' } as IUser)
			.type('json')
			.expect(202);
	});

	it(`[Login] Wrong Password`, () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ username: 'admin', password: 'wrongPassword' } as IUser)
			.type('json')
			.expect(403);
	});

	it(`[Login] Non-Existent User`, () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ username: 'nonExistent', password: 'wrongPassword' } as IUser)
			.type('json')
			.expect(403);
	});

	afterAll(async () => {
		await app.close();
	});
});

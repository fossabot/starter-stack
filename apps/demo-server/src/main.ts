/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { AppModule } from './app/app.module';
import * as seed from './seed';

export async function bootstrap() {
	// Autoseed
	const res = await seed.bootstrap();
	console.log('Seed successful:', res);

	const app = await NestFactory.create(AppModule);
	const globalPrefix = 'api';
	app.enableCors({
		origin: /https?:\/\/localhost.*/
	});
	app.setGlobalPrefix(globalPrefix);
	const port = process.env.port || 3333;

	await app.listen(port, () => {
		console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
	});
}

bootstrap();

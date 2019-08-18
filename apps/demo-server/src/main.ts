/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import 'reflect-metadata';
import { AppModule } from './app/app.module';
import * as seed from './seed';
export async function bootstrap() {
	// Autoseed
	const res = await seed.bootstrap();
	console.log('Seed successful:', res);

	// Using the Fastify Platform
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
	const globalPrefix = 'api';
	app.enableCors({
		origin: /https?:\/\/localhost.*/
	});
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix(globalPrefix);
	const port = process.env.port || 3333;

	await app.listen(port, '0.0.0.0', () => {
		console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
	});
}

bootstrap();

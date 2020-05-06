/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { environment } from '@env';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'reflect-metadata';
import { AppModule } from './app/app.module';
export async function bootstrap() {
	// Autoseed
	// const res = await seed.bootstrap();
	// console.log('Seed successful:', res);

	// Using the Fastify Platform
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

	app.enableCors({
		origin: /https?:\/\/localhost.*/,
	});
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix(environment.api.globalPrefix);

	const port = parseInt(process.env.port || '3333', 10);

	setupSwagger(app);

	await app.listen(port, '0.0.0.0', () => {
		console.log('Listening at http://localhost:' + port + '/' + environment.api.globalPrefix);
	});
}

bootstrap();

export const setupSwagger = (app: INestApplication) => {
	const options = new DocumentBuilder()
		.setTitle(environment.artifact.name)
		.setDescription(environment.artifact.description)
		.setVersion(environment.artifact.version)
		.addTag('demo', 'Showcase demo')
		.addTag('nestjs', 'framework')
		.addBearerAuth({ type: 'apiKey', name: 'header' })
		.addTag('api')

		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('swag', app, document);
};

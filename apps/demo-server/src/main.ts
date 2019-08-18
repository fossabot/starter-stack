/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { AppModule } from './app/app.module';

export async function bootstrap() {
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

/**
 * Will only run when executed directly, not when imported as a module
 */
if (require.main === module) {
	bootstrap();
}

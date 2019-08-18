/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { SeederModule } from './app/database/seeders/seeder.module';
import { SeederService } from './app/database/seeders/seeder.service';

export async function bootstrap() {
	console.log('Start seeding');
	const appContext = await NestFactory.createApplicationContext(SeederModule);

	const logger = appContext.get(Logger);
	const seeder = appContext.get(SeederService);

	try {
		await seeder.seed();
		logger.debug('Seeding complete!');
	} catch (error) {
		logger.error('Seeding failed!');
		throw error;
	} finally {
		await appContext.close();
	}
	return true;
}

/**
 * Will only run when executed directly, not when imported as a module
 */
if (require.main === module) {
	bootstrap();
}

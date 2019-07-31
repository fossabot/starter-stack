import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryModule } from './repository/repository.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			database: 'mysql',
			username: 'root',
			password: 'secret',
			entities: [join(__dirname, '../../**/**.entity{.ts,.js}')],
			synchronize: true,
			debug: false
		}),
		RepositoryModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
	public constructor() {
		console.log('Dirname: ', __dirname);
	}
}

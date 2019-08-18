import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryModule } from './repository/repository.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 33060,
			database: 'demo',
			username: 'demo',
			password: 'secret',
			entities: [User],
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

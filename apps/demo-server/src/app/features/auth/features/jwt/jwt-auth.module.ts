import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigModule } from './config/jwt-config.module';
import { JwtConfigService } from './config/services/jwt-config.service';
import { JwtAuthService } from './services/jwt-auth.service';

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [JwtConfigModule],
			useFactory: async (configService: JwtConfigService) => ({
				secret: configService.secret
			}),
			inject: [JwtConfigService]
		})
	],
	controllers: [],
	providers: [JwtAuthService]
})
export class JwtAuthModule {
	public constructor() {}
}

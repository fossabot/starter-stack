import { Module } from '@nestjs/common';
import { JwtConfigService } from './services/jwt-config.service';

@Module({
	imports: [JwtConfigService],
	controllers: [],
	providers: [JwtConfigService],
	exports: [JwtConfigService]
})
export class JwtConfigModule {
	public constructor() {}
}

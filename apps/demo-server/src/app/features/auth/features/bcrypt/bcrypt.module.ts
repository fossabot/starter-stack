import { Module } from '@nestjs/common';
import { BCryptService } from './services/crypt.service';

@Module({
	imports: [BCryptService],
	controllers: [],
	providers: [BCryptService],
	exports: [BCryptService]
})
export class BCryptModule {
	public constructor() {}
}

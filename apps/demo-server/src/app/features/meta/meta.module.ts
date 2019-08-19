import { Module } from '@nestjs/common';
import { MetaService } from './services/meta.service';

@Module({
	imports: [],
	controllers: [],
	providers: [MetaService],
	exports: [MetaService]
})
export class MetaModule {
	public constructor() {}
}

import { BCryptService } from '@app/features/auth/features/bcrypt/services/crypt.service';
import { Controller, Get, Query } from '@nestjs/common';
import { Dictionary } from '@workspace/model';

@Controller('debug')
export class DebugController {
	public constructor(private readonly bCryptService: BCryptService) {}

	/**
	 * Encrypts every query parameters value with bCrypt
	 *
	 * @debug
	 */
	@Get('encrypt')
	// @Role('admin')
	public async encrypt(@Query() query: Dictionary): Promise<Dictionary> {
		const result: Dictionary = {};
		for (const [k, v] of Object.entries(query)) {
			result[k] = await this.bCryptService.encrypt(v);
		}
		return result;
	}
}

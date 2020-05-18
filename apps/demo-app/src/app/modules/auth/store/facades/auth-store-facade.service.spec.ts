import { TestBed } from '@angular/core/testing';
import { AuthStoreFacade } from './auth-store-facade.service';

describe('AuthStoreFacade', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AuthStoreFacade = TestBed.inject(AuthStoreFacade);
		expect(service).toBeTruthy();
	});
});

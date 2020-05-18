import { demoServerApi } from './demo-server-api';

describe('demoServerApi', () => {
	it('should work', () => {
		expect(demoServerApi()).toEqual('demo-server-api');
	});
});

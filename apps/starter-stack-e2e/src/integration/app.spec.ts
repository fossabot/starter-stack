import { getGreeting } from '../support/app.po';

describe('starter-stack', () => {
	beforeEach(() => cy.visit('/'));

	it('should display welcome message', () => {
		getGreeting().contains('Welcome to starter-stack!');
	});
});

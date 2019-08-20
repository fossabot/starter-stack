import { IAuthorizationGroup } from '@workspace/model';

export const data: IAuthorizationGroup[] = [
	{
		id: 1,
		name: 'admin',
		authorizations: [
			{
				id: 1,
				role: 'One'
			},
			{
				id: 2,
				role: 'Two'
			},
			{
				id: 3,
				role: 'Three'
			}
		]
	}
];

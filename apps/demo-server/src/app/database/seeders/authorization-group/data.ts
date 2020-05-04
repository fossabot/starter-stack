import { AuthorizationGroup } from '@workspace/model';

export const data: AuthorizationGroup[] = [
	{
		id: 1,
		name: 'admin',
		authorizations: [
			{
				id: 1,
				role: 'One',
			},
			{
				id: 2,
				role: 'Two',
			},
			{
				id: 3,
				role: 'Three',
			},
		],
	},
];

import { Entity, ManyToMany, PrimaryKey, Property } from 'mikro-orm';
import { AuthorizationGroup } from '../authorization/authorization-group.entity';

/**
 * User entity
 */
@Entity()
export class User {
	@PrimaryKey()
	id!: number;

	public constructor() {}

	@Property()
	public username!: string;

	@Property()
	public password!: string;

	@ManyToMany(() => AuthorizationGroup, (authorizationGroup) => authorizationGroup.users)
	public authorizationGroups?: AuthorizationGroup[];
}

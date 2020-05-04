import { Entity, ManyToMany, PrimaryKey, Property } from 'mikro-orm';
import { AuthorizationGroup } from './authorization-group.entity';

/**
 * Authorization entity
 */
@Entity()
export class Authorization {
	public constructor() {}

	@PrimaryKey()
	id!: number;

	@Property()
	public role!: string;

	/**
	 * Has to be a different import because webpack does not support circular dependencies
	 */
	@ManyToMany(() => AuthorizationGroup, (authorizationGroup) => authorizationGroup.authorizations)
	public authorizationGroups?: AuthorizationGroup[];
}

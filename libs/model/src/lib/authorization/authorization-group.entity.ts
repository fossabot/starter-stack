import {
	Cascade,
	Collection,
	Entity,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryKey,
	Property,
} from 'mikro-orm';
import { User } from '../user/user.entity';
import { Authorization } from './authorization.entity';

/**
 * Authorization entity
 */
@Entity()
export class AuthorizationGroup {
	public constructor() {}

	@PrimaryKey()
	id!: number;

	@Property({ nullable: false })
	public name!: string;

	@ManyToMany(() => User, (user) => user.authorizationGroups, { mappedBy: 'authorizationGroups' })
	public users = new Collection<User>(this);

	@ManyToMany(() => Authorization, 'authorizationGroups', {
		owner: true,
		cascade: [Cascade.PERSIST, Cascade.MERGE],
	})
	public authorizations = new Collection<Authorization>(this);

	@OneToMany(() => AuthorizationGroup, (authorizationGroup) => authorizationGroup.parentGroup, {
		mappedBy: 'parentGroup',
		cascade: [Cascade.PERSIST, Cascade.MERGE],
	})
	public authorizationGroups = new Collection<this>(this);

	@ManyToOne(() => AuthorizationGroup)
	public parentGroup?: AuthorizationGroup;
}

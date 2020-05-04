import { Cascade, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryKey, Property } from 'mikro-orm';
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

	@ManyToMany(() => User, (user) => user.authorizationGroups)
	public users?: User[];

	@ManyToMany({ cascade: [Cascade.PERSIST, Cascade.MERGE] })
	public authorizations?: Authorization[];

	@OneToMany({ cascade: [Cascade.PERSIST, Cascade.MERGE] })
	public authorizationGroups?: AuthorizationGroup[];

	@ManyToOne()
	public parentGroup?: AuthorizationGroup;
}

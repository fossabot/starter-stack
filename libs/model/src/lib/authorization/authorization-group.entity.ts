import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';
import { IUser, User } from '../user';
import { Authorization } from './authorization.entity';

export interface IAuthorizationGroup extends IAbstractEntity {
	name: string;
	users?: User[];
	authorizations?: Authorization[];
}

/**
 * Authorization entity
 */
@Entity()
export class AuthorizationGroup extends AbstractEntity<AuthorizationGroup> implements IAuthorizationGroup {
	public constructor(args?: Partial<AuthorizationGroup>) {
		super(args);
	}

	@Column({ nullable: false })
	public name!: string;

	@ManyToMany(() => User, user => user.authorizationGroups)
	@JoinTable()
	public users?: IUser[];

	@ManyToMany(() => Authorization, authorization => authorization.authorizationGroups, { cascade: true })
	@JoinTable()
	public authorizations?: Authorization[];
}

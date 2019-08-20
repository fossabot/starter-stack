import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';
import { Authorization } from './authorization.entity';

export interface IAuthorizationGroup extends IAbstractEntity {
	name: string;
	authorizations: Authorization[];
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

	@OneToMany(() => Authorization, authorization => authorization.authorizationGroup, { cascade: true })
	public authorizations!: Authorization[];
}

import { Entity /*, OneToMany */ } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';
// import { Authorization } from './authorization.entity';

export interface IAuthorizationGroup extends IAbstractEntity {
	// authorization: Authorization[];
}

/**
 * Authorization entity
 */
@Entity()
export class AuthorizationGroup extends AbstractEntity<AuthorizationGroup> implements IAuthorizationGroup {
	public constructor(args?: Partial<AuthorizationGroup>) {
		super(args);
	}

	// @OneToMany(() => Authorization, authorization => authorization.authorizationGroup)
	// public authorization!: Authorization[];
}

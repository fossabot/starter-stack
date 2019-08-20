import { Column, Entity /*, ManyToOne */ } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';
// import { AuthorizationGroup } from './authorization-group.entity';
export interface IAuthorization extends IAbstractEntity {
	role: string;
}

/**
 * Authorization entity
 */
@Entity()
export class Authorization extends AbstractEntity<Authorization> implements IAuthorization {
	public constructor(args?: Partial<Authorization>) {
		super(args);
	}

	@Column()
	public role!: string;

	// @ManyToOne(() => AuthorizationGroup, authorizationGroup => authorizationGroup.authorization)
	// public authorizationGroup?: AuthorizationGroup;
}

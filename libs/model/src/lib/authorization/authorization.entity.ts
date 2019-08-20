import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';
import { AuthorizationGroup, IAuthorizationGroup } from './authorization-group.entity';
export interface IAuthorization extends IAbstractEntity {
	role: string;
	authorizationGroup?: AuthorizationGroup;
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

	@ManyToOne(() => AuthorizationGroup, authorizationGroup => authorizationGroup.authorizations)
	public authorizationGroup?: IAuthorizationGroup; // Has to be a different import because webpack does not support circular dependencies
}

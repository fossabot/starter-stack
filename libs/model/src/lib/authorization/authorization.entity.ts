import { Column, Entity, ManyToMany } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';
import { AuthorizationGroup, IAuthorizationGroup } from './authorization-group.entity';
export interface IAuthorization extends IAbstractEntity {
	role: string;
	authorizationGroups?: AuthorizationGroup[];
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

	@ManyToMany(() => AuthorizationGroup, authorizationGroup => authorizationGroup.authorizations)
	public authorizationGroups?: IAuthorizationGroup[]; // Has to be a different import because webpack does not support circular dependencies
}

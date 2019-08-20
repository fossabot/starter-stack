import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';
import { AuthorizationGroup } from '../authorization';
export interface IUser extends IAbstractEntity {
	username: string;
	password: string;
	authorizationGroups?: AuthorizationGroup[];
}

/**
 * User entity
 */
@Entity()
export class User extends AbstractEntity<User> implements IUser {
	public constructor(args?: Partial<User>) {
		super(args);
	}

	@Column()
	@ApiModelProperty({
		description: 'Can be used for login purposes'
	})
	public username!: string;

	@Column()
	@Exclude()
	@ApiModelProperty({
		description: 'bCrypted password'
	})
	public password!: string;

	@ManyToMany(() => AuthorizationGroup, authorizationGroup => authorizationGroup.users)
	@JoinTable()
	public authorizationGroups?: AuthorizationGroup[];
}

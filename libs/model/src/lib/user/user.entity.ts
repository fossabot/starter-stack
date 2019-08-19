import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { AbstractEntity, IAbstractEntity } from '../abstract';

export interface IUser extends IAbstractEntity {
	username: string;
	password: string;
}

@Entity()
export class User extends AbstractEntity<User> implements IUser {
	public constructor(args?: Partial<User>) {
		super(args);
	}

	@Column()
	public username!: string;
	@Column()
	@Exclude()
	public password!: string;
}

import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../abstract';
@Entity()
export class User extends AbstractEntity<User> {
	public constructor(args?: Partial<User>) {
		super(args);
	}

	@Column()
	public name!: string;
	@Column()
	@Exclude()
	public password!: string;

	public nonSensitive(): Partial<User> {
		return {
			id: this.id,
			name: this.name
		};
	}
}

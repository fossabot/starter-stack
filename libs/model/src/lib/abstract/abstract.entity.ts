import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractEntity<T> {
	public constructor(args?: Partial<T>) {
		if (args) {
			Object.assign(this, args);
		}
	}

	@PrimaryGeneratedColumn()
	public id!: number;
}

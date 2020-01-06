import { PrimaryGeneratedColumn } from 'typeorm';

export interface IAbstractEntity {
	id: number;
}
export abstract class AbstractEntity<T> implements IAbstractEntity {
	public constructor(args?: Partial<T>) {
		if (args) {
			Object.assign(this, args);
		}
	}

	@PrimaryGeneratedColumn('rowid')
	public id!: number;
}

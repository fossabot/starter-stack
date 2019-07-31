import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
	@PrimaryGeneratedColumn()
	public id!: number;
	@Column()
	public name!: string;
}

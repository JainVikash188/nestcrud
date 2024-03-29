import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : String;

    @Column()
    lastName : String;

    @Column()
    age : number;
}
